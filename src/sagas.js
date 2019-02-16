import { takeLatest, call, put } from 'redux-saga/effects'
import axios from 'axios'

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function * watcherSaga () {
    yield takeLatest('API_CALL_REQUEST', workerSaga)
}

// function that makes the api request and returns a Promise for response
function fetchPicture () {
    return axios({

        // Pexels API Key 563492ad6f917000010000012dd31aba7107471cb3819381e9c1545f

        method: 'get',
        url: 'https://api.thecatapi.com/v1/images/search'
    })
}

// worker saga: makes the api call when watcher saga sees the action
function * workerSaga () {
    try {
        const response = yield call(fetchPicture)
        const picture = response.data[0].url
        // const picture = 'https://cdn2.thecatapi.com/images/1u.gif'
        console.log(picture)
        // dispatch a success action to the store with the new picture
        yield put({ type: 'API_CALL_SUCCESS', picture })
    }
    catch (error) {
        // dispatch a failure action to the store with the error
        console.log(error)
        yield put({ type: 'API_CALL_FAILURE', error })
    }
}
