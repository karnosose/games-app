// import axios from 'axios';

export function getGamesList (onSuccess) {
    fetch('gamesList.json',{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
    .then(onSuccess)
    .catch(err => console.log(err))
}