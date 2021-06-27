import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

import Sidebar from '../Sidebar'
import {gamesDataLoading, setGamesData} from '../../store/actions/gamesList'
import {setFavorites} from '../../store/actions/favorites'

function MainLayout (props) {

    const {search, category} = useParams();
    console.log(window.location.origin)
    useEffect(()=>{
        //getting games list from json file and storing in store
        const getGamesList = () => {
            fetch(`${window.location.origin}/gamesList.json`, {
                headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then(res => res.json())
            .then(res => props.setGamesData(res, category))
            .catch(err => console.log(err))
    
        }
        getGamesList()
    }, [category])

    //read favorites from localstorage and save it in store
    useEffect(_ => {
        let favorites = localStorage.getItem('favorites');
        favorites = favorites ? JSON.parse(favorites) : [];
        props.setFavorites(favorites);
    },[])

    //save favorites to the local storage each time they change
    useEffect(_ => {
            localStorage.setItem('favorites', JSON.stringify(props.favorites.gameIds))
    }, [props.favorites.gameIds])

    return (
        <Grid container >
            <Sidebar />
            {props.children}
        </Grid>

    )
}

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    gamesDataLoading: () => dispatch(gamesDataLoading),
    setGamesData: (data, category) => dispatch(setGamesData(data, category)),
    setFavorites: data => dispatch(setFavorites(data))
});

export default connect(mapStateToProps,mapDispatchToProps)(MainLayout);