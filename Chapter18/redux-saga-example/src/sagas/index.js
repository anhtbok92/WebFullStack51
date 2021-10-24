import { put, takeEvery, all } from 'redux-saga/effects';
import CallApi from "../apis";

function* fetchNewsApi() {
    // step 1. Call API
    const json = yield CallApi();
    // step 2. dispatch action NEWS_RECEIVED for reducers
    yield put({ type: 'NEWS_RECEIVED', json: json.articles || [{ error: json.message }] })
}
function* actionWatcher() {
    yield takeEvery('GET_NEWS', fetchNewsApi);
}

export default function* rootSaga() {
    yield all([actionWatcher()]);
}