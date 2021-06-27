import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
    root: {
        width: 300,
        height: window.innerHeight,
        marginTop:20,
        '@media only screen and (max-width:600px)': {
          width: '150px',
          // height: '315px',
        },
        '@media only screen and (max-width:460px)': {
          width: '100%',
          height: '315px',
        },
      },
      
      searchbar: {
        background: '#0000000a',
        borderRadius: 12,
        height: 44,
        margin: 10,
        '&.MuiInputBase-root': {
          '@media only screen and (max-width:460px)': {
              width: '100%',
          },
        }
      },
      favorites: {
            color: '#535050',
            textDecoration: 'none',
            '& .MuiListItemIcon-root': {
                minWidth:30
            }
      },
      categories: {
            color: '#535050',
            textDecoration: 'none',
            '& .MuiListItemIcon-root': {
                minWidth:30
            }
      }
})