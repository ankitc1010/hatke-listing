/*
 * Favourites Action Names
 *
 */

export const TOGGLE_FAVOURITES = "[LIST] TOGGLE FAVOURITES";

/*
 * Favourites Action functions
 *
 */

export const toggleFavourites = payload => {
  return {
    type: TOGGLE_FAVOURITES,
    payload
  };
};
