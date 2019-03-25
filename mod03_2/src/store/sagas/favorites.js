import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { addFavoriteSuccess } from "../actions/favorites";

// '*' indicates a generator function (async/await alike but better)
export function* addFavorite(action) {
  //   const response = yield api.get(`/repos/${action.payload.repository}`);
  /** 'call' first param = method to be executed, second param = params to pass
   * to the method
   */
  const { data } = yield call(api.get, `/repos/${action.payload.repository}`);

  const repositoryData = {
    id: data.id,
    name: data.full_name,
    description: data.description,
    url: data.html_url
  };

  // 'put' finally dispatches the action to the reducers with appropriate data
  yield put(addFavoriteSuccess(repositoryData));
}
