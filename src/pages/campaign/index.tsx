import React from 'react'
import { api } from '../../api'

const getAllCampagins = async () => {
  return await api.campaigns.getAllCamps()
}

const index = async () => {
  const  camps = await getAllCampagins()
  return (
    <div>
      
      {camps.map(i => (
        <div key={i.id}>{i.name}</div>
      ))}
    </div>
  )
}

export default index
