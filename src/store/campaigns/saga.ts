import { all, put, takeLatest, call } from 'redux-saga/effects'
import { getAllCampsSuccess, getAllCampsError, getCampByIdSuccess, getCampByIdError, createCampSuccess, createCampError } from './index'
import { api } from '@app/api/index'

function* getAllCampsWorker(): Generator {
  try {
    const camps = yield call(api.campaigns.getAllCamps)
    yield put(getAllCampsSuccess(camps))
  } catch (error) {
    yield put(getAllCampsError())
  }
}

function* getCampByIdWorker(action: any): Generator {
  const { payload: id } = action
  try {
    const camp = yield call(api.campaigns.getCampById, id)
    yield put(getCampByIdSuccess(camp))
  } catch (error) {
    yield put(getCampByIdError())
  }
}

function* createCampWorker(action: any): Generator {
  const { name, description, goal, status } = action.payload
  try {
    const camp = yield call(api.campaigns.createCamp, { name, description, goal, status })
    yield put(createCampSuccess(camp))
  } catch (error) {
    yield put(createCampError())
  }
}

function* campsSaga() {
  yield all([
    takeLatest('campaign/getAllCampsRequest', getAllCampsWorker),
    takeLatest('campaign/getCampByIdRequest', getCampByIdWorker),
    takeLatest('campaign/createCampRequest', createCampWorker),
  ])
}

export default campsSaga
