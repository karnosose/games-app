import React from 'react'
import uuid from 'react-uuid'
import {connect} from 'react-redux';
import {useStyles} from './Home.style';
import GameItem from '../../components/GemeItem'

function Home (props) {
    
    const classes = useStyles();

    return (
        <div className={classes.homeContainer}>
            {!props.isLoading &&
                <>
                    <div className={props.games.large.length > 1 ? classes.large : classes.singlelarge}>
                        {props.games.large.map(game => (
                            <GameItem
                                key={uuid()}
                                game={game} 
                                isLarge={true}
                                wrapperClass={props.games.large.length === 1 ? classes.singlelargeWrapper : classes.largeImgWrapper}
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