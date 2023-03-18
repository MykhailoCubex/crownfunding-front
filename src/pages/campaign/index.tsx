import React from 'react'
import { useAppDispatch, useShallowEqualSelector } from '../../hooks/redux-typed-hooks'

const Campaigns = async () => {
  const dispatch = useAppDispatch()
  const { data: camps } = useShallowEqualSelector(s => s.campaigns)

  return (
    <div>
      {camps.map((i: any) => (
        <div key={i.id}>{i.name}</div>
      ))}
    </div>
  )
}

export default Campaigns
