import {ACTION_TYPES} from '../actionTypes'

export const gamesDataLoading = _ => (
    {
        type: ACTION_TYPES.GAMES_DATA_LOADING
    }
)
export const setGamesData = (data, category) => (
    {
        type: ACTION_TYPES.SET_GAMES_DATA,
        payload: {
            data,
            category
        }
    }
)

export const setFavoritesData = (data, favorites) => (
    {
        type: ACTION_TYPES.SET_FAVORITES_DATA,
        payload: {
            data,
            favorites
        }
    }
)

export const setSearchedData = (data, search) => (
    {
        type: ACTION_TYPES.SET_SEARCHED_DATA,
        payload: {
            data,
            search
        }
    }
)