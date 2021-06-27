export const loadFavorites = () => {
    // try {
    //   const serializedState = localStorage.getItem('state');
    //   if (serializedState === null) {
    //     return undefined;
    //   }
    //   return JSON.parse(serializedState);
    // } catch (err) {
    //   return undefined;
    // }
    return {
        favorites:1
    }
  }; 

  export const saveFavorites = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('state', serializedState);
    } catch (e) {
        console.warn(e);
    }
  };
  