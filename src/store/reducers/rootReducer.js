import { combineReducers } from 'redux'
import {GamesReducer} from './GamesReducer'
import {FavoritesReducer} from './FavoritesReducer'

const rootReducer = combineReducers({
    gameInfo: GamesReducer,
    favorites: FavoritesReducer
});

export default rootReducer;