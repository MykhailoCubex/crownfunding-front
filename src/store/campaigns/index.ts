import { createSlice } from '@reduxjs/toolkit'
import { CampsModel } from '../../models/campaigns.model'

export interface CampaignInterface {
  data: any | null
  loading: boolean
  current: CampsModel
}

const campaign = createSlice({
  name: 'campaign',
  initialState: { data: [], current: {}, loading: false } as CampaignInterface,
  reducers: {
    getAllCampsRequest: (state, action) => {
      state.loading = true
    },
    getAllCampsSuccess: (state, action) => {
      state.data.push(action.payload)
      state.loading = false
    },
    getAllCampsError: state => {
      state.loading = false
    },
    getCampByIdRequest: (state, action) => {
      state.loading = true
    },
    getCampByIdSuccess: (state, action) => {
      state.current = action.payload
      state.loading = false
    },
    getCampByIdError: state => {
      state.loading = false
    },
    createCampRequest: (state, action) => {
      state.loading = true
    },
    createCampSuccess: (state, action) => {
      state.current = action.payload
      state.loading = false
    },
    createCampError: state => {
      state.loading = false
    },
  },
})

export const {
  getAllCampsRequest,
  getAllCampsSuccess,
  getAllCampsError,
  getCampByIdRequest,
  getCampByIdSuccess,
  getCampByIdError, 
  createCampRequest,
  createCampSuccess,
  createCampError
} = campaign.actions

export default campaign.reducer
