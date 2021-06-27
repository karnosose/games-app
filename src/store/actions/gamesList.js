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