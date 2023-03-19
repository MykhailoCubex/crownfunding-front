import { useEffect } from 'react'
import { styled, Typography, Button } from '@mui/material'
import Card from '@mui/material/Card'
import { Router } from '@mui/icons-material'
import { useAppDispatch } from '@app/hooks/redux-typed-hooks'
import { useRouter } from 'next/router'

const CampsCard = (data: any) => {
    const dispatch = useAppDispatch()
    const router = useRouter()
    
    const { name, goal, balance, id } = data.data
  const handleDonate = () => {
    router.push(`/${id}`)
  }

  return (
    <Container>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {name}
      </Typography>
      <Typography variant="h5" component="div">
        Gaol: {goal} USD
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Balance: {balance} USD
      </Typography>
      <DonateButton id={id} variant="contained" color="error" onClick={handleDonate}>
        Donate
      </DonateButton>
    </Container>
  )
}

export default CampsCard

const Container = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px;
  transition: all 0.5s ease-in-out;
  width: 200px;

  &:hover {
    cursor: pointer;
    scale: 1.02;
  }
`

const DonateButton = styled(Button)`
  color: #fff;
  transition: all 0.5s ease-in-out;

  &:hover,
  &:focus {
    cursor: pointer;
    scale: 1.05;
  }
`
