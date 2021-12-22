import { Box, Button, ButtonGroup, Switch, Theme, Typography } from '@material-ui/core'
import { useTheme } from '@material-ui/styles'
import { useRouter } from 'next/dist/client/router'
import React, { Dispatch, SetStateAction } from 'react'

export default function Nav({
  colorScheme,
  toggleColorScheme,
  title,
  setTitle,
}: {
  colorScheme: 'light' | 'dark'
  toggleColorScheme: () => void
  title: string
  setTitle: Dispatch<SetStateAction<string>>
}) {
  const theme: Theme = useTheme()
  const router = useRouter()
  return (
    <div
      style={{
        background: theme.palette.primary.main,
        padding: 4,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: theme.spacing(4),
      }}
    >
      <div>
        <Typography variant="h6">{title}</Typography>
      </div>
      <div>
        <ButtonGroup aria-label="outlined primary button group">
          <Button
            onClick={() => {
              router.push('/')
            }}
          >
            Home
          </Button>
          <Button
            onClick={function () {
              router.push('/view')
            }}
          >
            View
          </Button>
          <Button>Delete</Button>
        </ButtonGroup>
      </div>
      <Box display="flex" alignItems="center">
        <Typography variant="body1">
          Color Scheme: <Typography component="span">{colorScheme.toUpperCase()}</Typography>
        </Typography>
        <Switch
          onChange={() => {
            toggleColorScheme()
            setTitle(Math.floor(Math.random() * 100).toString())

            // setTitle('TITLE CHANGED')
          }}
        />
      </Box>
    </div>
  )
}

// export default class NavClass extends React.Component {
//   render() {
//     return <div>hello WOrld</div>
//   }
// }
