import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
    homeContainer: {
        flex: 1,
        marginLeft:20,
        marginRight: 20,
        display: 'flex',
        marginTop:20,
        alignItems: 'flex-start',
        background: '#383838',
        padding: 4,
        '@media only screen and (max-width:992px)': {
            flexDirection: 'column'
        },
    },
    large: {
        width: '50%',
        display: 'flex',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        '@media only screen and (max-width:992px)': {
            width: '100%'
        },
    },
    singlelarge: {
        // width:'25%',
        position: 'relative'

    },
    gameLargeImg: {
        width: '-webkit-fill-available',
        display: 'block',
        flexGrow:1,
        border: '4px solid #383838',
        boxSizing: 'border-box'
    },
    small: {
        width: '50%',
        display: 'flex',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        '@media only screen and (max-width:992px)': {
            width: '100%'
        },
    },
    gameSmallImg: {
        display: 'block',
        flexGrow:1,
        border: '4px solid #383838',
        boxSizing: 'border-box',
        width: '-webkit-fill-available',
        
    },
    gameName: {
        position: 'absolute',
        bottom:5,
        color: 'white',
        left:6,
        fontSize: 12
    },
    smallImgWrapper: {
        position: 'relative',
        maxWidth:'25%',
        flexGrow:1,
        width: '-webkit-fill-available',
        '@media only screen and (max-width:992px)': {
            // maxWidth: 'unset',
            // minWidth: '25%',
            flexGrow:1
        },
    },
    largeImgWrapper: {
        position: 'relative',
        width: '50%'
    },
    
    favoriteIcon: {
        position: 'absolute',
        top:10,
        right:10,
        width:16,
        opacity: 0.7,
        cursor: 'pointer',
        '&:hover': {
            opacity: 1
        }
    },

})