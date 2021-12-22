import { Box, Typography } from '@material-ui/core'

export default function Note({ text }: { text: string }) {
  return (
    <Box p={2}>
      <Typography>{text}</Typography>
    </Box>
  )
}
