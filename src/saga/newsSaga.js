import { call, takeLatest } from 'redux-saga/effects'
import { getNews } from '@/apis/news'
import { FETCH_NEWS } from '@/redux/actions/newActions'

function* handleFetchNews(action) {
  try {
    const data = yield call(getNews, action.payload.body)
    if (action.payload.onSuccess) {
      action.payload.onSuccess(data)
    }
  } catch (err) {
    if (action.payload.onError) {
      action.payload.onError(err)
    }
  }
}

export default function* newsSaga() {
  yield takeLatest(FETCH_NEWS, handleFetchNews)
}
