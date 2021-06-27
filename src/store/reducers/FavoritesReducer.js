import {ACTION_TYPES} from '../actionTypes'

export const initialState = {    
    gameIds: []
};

export const FavoritesReducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTION_TYPES.SET_FAVORITES:
            console.log('set: ', action.payload)
            return {
                gameIds: action.payload
            };
            
        case ACTION_TYPES.TOGGLE_FAVORITE:

            const gameId = action.payload;
            
            let newFavorites = [];

            if(state.gameIds.includes(gameId)){
                //remove from favorites
                newFavorites = state.gameIds.filter(game_id => game_id !== gameId)
            } else {
                //add to favorites
                newFavorites = [...state.gameIds, gameId]
            }

            return {
                gameIds: newFavorites
            };           
        default:
            return state
    }
};