import React from 'react'
import {useLocation} from 'react-router-dom'
import uuid from 'react-uuid'
import {connect} from 'react-redux';
import {useStyles} from './Home.style';
import GameItem from '../../components/GemeItem'

function Home (props) {
    
    const location = useLocation().pathname;
    const classes = useStyles();

    return (
        <div className={classes.homeContainer}>
            {!props.isLoading &&
                <>
                    <div className={props.games.large.length > 1 ? classes.large : props.games.large.length === 1 ? classes.singlelarge : ''}>
                        {props.games.large.map(game => (
                            <GameItem
                                key={uuid()}
                                game={game} 
                                isLarge={true}
                                wrapperClass={props.games.large.length === 1 ? classes.singlelargeWrapper : classes.largeImgWrapper}
                                view={location}
                            />
                        ))}
                    </div>
                
                    <div className={classes.small}>
                        {props.games.small.map(game => (
                            <GameItem
                                key={uuid()}
                                game={game} 
                                isLarge={false}
                                wrapperClass={classes.smallImgWrapper}
                                view={location}

                            />
                        ))}
                    </div>
                </>
            }
        </div>
    )
}

const mapStateToProps = state => (
    {
        games: state.gameInfo.games,
        categories: state.gameInfo.categories,
        isLoading: state.gameInfo.is_loading,
    }
);

export default connect(mapStateToProps)(Home);