import React from 'react';
import {Switch} from 'react-router-dom';
import {AppRouter} from './components/AppRouter/AppRouter';
import MainLayout from './components/layouts/MainLayout';
import Home from './views/Home'

export const Routers = _ => {
    return (
        <Switch>
            <AppRouter exact path='/' layout={MainLayout} component={Home}/>

            <AppRouter path='/category/:category' layout={MainLayout} component={Home}/>
            
            <AppRouter path='/search/:search' layout={MainLayout} component={Home}/>
            
            <AppRouter path='/favorites' layout={MainLayout} component={Home}/>
        </Switch>
    )
}