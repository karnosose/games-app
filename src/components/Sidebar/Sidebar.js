import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import uuid from 'react-uuid';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {useStyles} from './Sidebar.style'
import CategoryIcon from '@material-ui/icons/Category';

function Sidebar(props) {

  const classes = useStyles();

  const [searchedGame, setSearchedGame] = useState('')

  const handleSearchChange = e => {
    setSearchedGame(e.target.value)
  }

  return (
    <Paper className={classes.root}>
        <MenuList>
            <form action={`/search/${searchedGame}`}>
            <MenuItem className={classes.searchbar}>
                <InputBase
                    className={classes.input}
                    placeholder="Search Games"
                    inputProps={{ 'aria-label': 'search games' }}
                    value={searchedGame}
                    onChange={e => handleSearchChange(e)}
                />
                <IconButton 
                    type="submit" 
                    className={classes.iconButton} 
                    aria-label="search"
                    >
                    <SearchIcon  />
                </IconButton>
            </MenuItem >
            </form>
            {props.categories.map(category => (
                 <Link 
                    to={category.nameKey === 'All games' ? '/' : `/category/${category.nameKey}`} 
                    className={`${classes.categories} ` } 
                    key={uuid()}
                >
                 <MenuItem>
                     <ListItemIcon>
                         {category.nameKey === 'All games' && <CategoryIcon fontSize="small" color='primary' />}
                     </ListItemIcon>
                     <Typography  variant="inherit">{category.nameKey}</Typography>
                 </MenuItem>
             </Link>
            ))}
            <Link to='/favorites' className={classes.favorites}>
                <MenuItem >
                    <ListItemIcon>
                        <FavoriteIcon fontSize="small" color='secondary'/>
                    </ListItemIcon>
                    <Typography  variant="inherit" noWrap>
                        Favorites ({props.favorites.length})
                    </Typography>
                </MenuItem>
                </Link>
        </MenuList>
    </Paper>
  );
}

const mapStateToProps = state => ({
    games: state.gameInfo.games,
    categories: state.gameInfo.categories,
    isLoading: state.gameInfo.is_loading,
    favorites: state.favorites.gameIds
});

export default connect(mapStateToProps)(Sidebar);
