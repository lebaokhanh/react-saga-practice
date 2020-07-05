import { put, takeLatest, takeEvery, all, call, take } from "redux-saga/effects";
import Axios from "axios";

const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}`;

function *fetchApi(url) {
  return yield Axios.get(url)
    .then(response => response.data)
}

function *fetchNews() {
  const response = yield call(fetchApi, [url])
  // const response = yield fetch(url)
  //   .then(response => response.json());
  yield put({ type: 'NEWS_RECEIVED', articles: response.articles })
}

function *actionWatcher() {
  // yield take('GET_NEWS', fetchNews);
  yield takeLatest('GET_NEWS', fetchNews);
  // yield takeEvery('GET_NEWS', fetchNews);
}

export default function *rootSaga() {
  yield all([
    actionWatcher(),
  ])
}
