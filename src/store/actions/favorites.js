import {ACTION_TYPES} from '../actionTypes'

export const setFavorites = data => (
    {
        type: ACTION_TYPES.SET_FAVORITES,
        payload: data
    }
)
export const toggleFavorite = id => (
    {
        type: ACTION_TYPES.TOGGLE_FAVORITE,
        payload: id
    }
)
