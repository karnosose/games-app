import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import {useParams, useLocation } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

import Sidebar from '../Sidebar'
import {gamesDataLoading, setGamesData, setFavoritesData, setSearchedData} from '../../store/actions/gamesList'
import {setFavorites} from '../../store/actions/favorites'

function MainLayout (props) {

    const {search, category} = useParams();
    
    const location = useLocation();

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

    useEffect(()=>{
        console.log(props.favorites.gameIds)
        //getting games list from json file and storing in store
        const getGamesList = () => {
            fetch(`${window.location.origin}/gamesList.json`, {
                headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then(res => res.json())
            .then(res => {
                if(search){
                    props.setSearchedData(res, search)
                } else if (location.pathname === '/favorites'){                    
                    props.setFavoritesData(res, props.favorites)
                } else {
                    props.setGamesData(res, category)
                }
            })
            .catch(err => console.log(err))
    
        }
        getGamesList()
    }, [location.pathname, props.favorites])

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
    setFavorites: data => dispatch(setFavorites(data)),
    setFavoritesData: (data, favorites) => dispatch(setFavoritesData(data, favorites)).favorites,
    setSearchedData: (data, search) => dispatch(setSearchedData(data, search))
});

export default connect(mapStateToProps,mapDispatchToProps)(MainLayout);