import {
  Box,
  Button,
  Container,
  Divider,
  Paper,
  TextField,
  Theme,
  Typography,
} from '@material-ui/core'
import { useTheme } from '@material-ui/styles'
import Note from '@src/components/Note'
import { ChangeEvent, useEffect, useState } from 'react'

export default function Index() {
  const theme: Theme = useTheme()
  const [input, setInput] = useState('')
  const [todoLists, setTodoLists] = useState<
    {
      id: string
      title: string
      done: boolean
    }[]
  >([
    {
      id: '1',
      title: 'FIRST TODO',
      done: false,
    },
  ])

  useEffect(() => {
    // console.log('inputValue', input)
  }, [input])

  useEffect(() => {
    console.log('todoNow', todoLists)
  }, [todoLists])

  return (
    <div>
      <Container maxWidth="sm">
        <Typography
          variant="h2"
          style={{
            fontWeight: 500,
          }}
        >
          Create New Todo List
        </Typography>
        <Box my={2}>
          <Divider />
        </Box>
        <Box>
          <Paper>
            <Box p={2}>
              <Typography variant="body1">Create new Todo</Typography>
              <Box my={2}>
                <Divider />
              </Box>
              <Typography color="primary" variant="body2">
                Todo Title
              </Typography>
              <TextField
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setInput(e.target.value)
                }}
                fullWidth
                variant="outlined"
                size="small"
                value={input}
              />

              <Box my={2}>
                <Divider />
              </Box>
              <Button
                onClick={() => {
                  setTodoLists((prevState) => {
                    return [
                      ...prevState,
                      {
                        id: Math.floor(Math.random() * 1000).toString(),
                        title: input,
                        done: false,
                      },
                    ]
                  })
                }}
                variant="contained"
                disableElevation
                color="primary"
              >
                Submit
              </Button>
            </Box>
          </Paper>
        </Box>
        <Box mt={2}>
          <Paper>
            <Box p={2}>
              <Typography variant="body1">Todo List</Typography>
              <Box my={2}>
                <Divider />
              </Box>
              <Box>
                {todoLists.map((ea, index) => (
                  <Box
                    style={{
                      marginTop: 16,
                    }}
                    onClick={() => {
                      setTodoLists((prevState) => {
                        return prevState.map((todo, indexTodo) => {
                          return {
                            ...todo,
                            /**
                             * need fix
                             */
                            done: todo.id === ea.id && !todo.done,
                          }
                        })
                      })
                    }}
                    key={index}
                  >
                    <Paper
                      variant="elevation"
                      style={{
                        display: 'flex',
                        alignItems: 'stretch',
                      }}
                    >
                      <div
                        style={{
                          background: ea.done
                            ? theme.palette.success.main
                            : theme.palette.error.main,
                          width: 8,
                        }}
                      ></div>
                      <Box
                        style={{
                          padding: 16,
                        }}
                      >
                        <Typography>{ea.title}</Typography>
                      </Box>
                    </Paper>
                  </Box>
                ))}
              </Box>
            </Box>
          </Paper>
        </Box>
        <Box marginTop={4}>
          <Note text="hello world" />
        </Box>
      </Container>
    </div>
  )
}
