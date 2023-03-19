import { styled } from '@mui/material'
import { useMemo } from 'react'
import { useAppDispatch, useShallowEqualSelector } from '../../hooks/redux-typed-hooks'
import CampsCard from './card'

const Campaigns = () => {
  const dispatch = useAppDispatch()
  const { data: camps } = useShallowEqualSelector(s => s.campaigns)

  const campsItems = useMemo(() => {
    return camps.map((campaign: any) => <CampsCard key={campaign.id} data={campaign} />)
  }, [camps])

  return <Container>{campsItems}</Container>
}

export default Campaigns

const Container = styled('div')`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 40px;
`
