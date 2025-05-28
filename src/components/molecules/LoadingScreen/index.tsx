import { Backdrop, CircularProgress } from '@mui/material'

const Loading = () => (
  <Backdrop open={true} aria-label="loading-screen">
    <CircularProgress />
  </Backdrop>
)

export default Loading
