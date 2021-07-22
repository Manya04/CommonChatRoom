import React, {useState, useEffect} from 'react'
import { Button , Input, List, ListItem, ListItemText} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import db from '../firebase'

function Display2() {

    const [user, setUser] = useState({
        name: '',
        messages: []
    })
    // const [todos, setTodos] = useState([])

    const [input, setInput] = useState('')

    // const [nameInput, setNameInput] = useState('')

    const [open, setOpen] = useState(true);

    // const [name, setName] = useState('')

    // useEffect(() => {
    //     db.collection('names').onSnapshot(snapshot => {
    //         setName(snapshot.docs.map(doc => doc.data().todo))
    //     })
    // }, [])

//   function handleClickOpen() {
//     setOpen(true);
//   }

  const handleClose = (event) => {
      event.preventDefault();
    setOpen(false);
    // setName({name})
  }

  const addMessage = (event) => {
      event.preventDefault();
      setUser({messages:[...user.messages, input]})
      setInput('')
  }

    // const addToDo = (event) => {
    //     event.preventDefault();
    //     setTodos([...todos, input]);
    //     setInput('')
    // }

    return (
        <div><Dialog open={open}  aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Enter Name</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To chat with your friends, please enter your name here. 
          </DialogContentText>
          <TextField value = {user.name}
          onChange = {event => setUser({name: event.target.value})}
            autoFocus
            margin="dense"
            id={user.name}
            label="Name"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button disabled={!(user.name)} onClick = {handleClose} color="primary">
            Chat
          </Button>
        </DialogActions>
      </Dialog>
            <h1>Hello {user.name}!</h1>
            <h3>Let's Chat</h3>
            <form onSubmit = {addMessage}>
            {/* <input type='text' value={input} onChange={event => setInput(event.target.value)}></input> */}
            <Input type='text' value={input} onChange={event => setInput(event.target.value)} placeholder="Message" inputProps={{ 'aria-label': 'description' }} />
            <Button disabled={!input} variant="outlined" color="primary" type='submit'>
                    Send
            </Button>
            </form>
            <ul>
            {
            user.messages.map((message, i) => <List>
                <ListItem>
                    <ListItemText primary= {user.name} secondary={message}></ListItemText>
                </ListItem>
            </List>
                )
                    }
            </ul>
        </div>
    )
}

export default Display2
