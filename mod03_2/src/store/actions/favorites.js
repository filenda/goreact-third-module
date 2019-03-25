export const addFavoriteRequest = repository => ({
  type: "ADD_FAVORITE_REQUEST",
  payload: { repository }
});

//  REQUEST -> SAGA -> API CALL -> SUCCESS

export const addFavoriteSuccess = data => ({
  type: "ADD_FAVORITE_SUCCESS",
  payload: { data }
});
