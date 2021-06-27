import React from 'react'
import {connect} from 'react-redux';
import {useStyles} from './GameItem.style';
import {toggleFavorite} from '../../store/actions/favorites'

function GameItem (props){
    const {wrapperClass, isLarge, game} = props
    const classes = useStyles();
    const favorites = props.favorites.gameIds;
    const handleFavoritesClick = id => {
        
        props.toggleFavorite(id);
    }

    return (
        <div className={wrapperClass}>    
            <img 
                className={isLarge ? classes.gameLargeImg : classes.gameSmallImg} 
                alt={game.name} 
                src={`/assets/${isLarge ? game.img.large : game.img.small}`} />
            <span className={classes.gameName}>{game.name}</span>
            <img 
                className={classes.favoriteIcon} 
                src={`/assets/icons/${favorites.includes(game.id) ? 'icon-favorites-active.svg' : 'icon-favorites-noactive.svg'}`} 
                alt='favorite'
                onClick={_ => handleFavoritesClick(game.id)}
            />

        </div>
    )
}

const mapStateToProps = state => ({
    ...state,
    favorites: state.favorites
});

const mapDispatchToProps = dispatch => ({
    toggleFavorite: id => dispatch(toggleFavorite(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GameItem)