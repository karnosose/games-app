import {ACTION_TYPES} from '../actionTypes'

export const initialState = {
    is_loading: true,
    games: [],
    categories: []
    
};

export const GamesReducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTION_TYPES.GAMES_DATA_LOADING:
            return {
                ...state,
                is_loading: true
            };

        case ACTION_TYPES.SET_GAMES_DATA:
            const data = action.payload.data;
            const categoryName = action.payload.category ? action.payload.category: 'All games';
            const [category] = data.categories.filter(cat => cat.nameKey === categoryName);

            // get game details for chosen category
            const games = category.games.map(item => {
                let [gameData] = data.games.filter(game => (
                   game.id === item.id
                ))
                gameData.top = item.top
                return gameData;
            });

            //keep large and small images separately
            const largeGames = [];
            const smallGames = [];
            games.forEach(game => {
                if(game.top){
                    largeGames.push(game);
                } else {
                    smallGames.push(game);
                }
            });

            // get category names
            const categories = data.categories.map(cat => (
                {
                    id: cat.id,
                    nameKey: cat.nameKey
                }
            ))

            return {
                is_loading: false,
                games: {
                    small: smallGames,
                    large: largeGames,
                },
                categories,
                allData: action.payload.data
            };
            case ACTION_TYPES.SET_FAVORITES_DATA:
                console.log(action.payload)
                const favData = action.payload.data;
                // const favCategoryName = action.payload.category ? action.payload.category: 'All games';
                // const [favCategory] = favData.categories.filter(cat => cat.nameKey === favCategoryName);

                // get game details for chosen category
                const favGames = action.payload.favorites.gameIds.map(id => {
                    let [favGameData] = favData.games.filter(game => (
                    game.id === id
                    ))
                    // favGameData.top = item.top
                    return favGameData;
                });

                //keep large and small images separately
                const favLargeGames = [];
                const favSmallGames = [];
                favGames.forEach(game => {
                    if(game.top){
                        favLargeGames.push(game);
                    } else {
                        favSmallGames.push(game);
                    }
                });

                // get category names
                const favCategories = favData.categories.map(cat => (
                    {
                        id: cat.id,
                        nameKey: cat.nameKey
                    }
                ))

            return {
                is_loading: false,
                games: {
                    small: favSmallGames,
                    large: favLargeGames,
                },
                categories: favCategories,
                allData: action.payload.data
            };
        default:
            return state
    }
};