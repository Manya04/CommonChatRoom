import React, {useState, useEffect} from 'react'
import { Button , Input, List, ListItem, ListItemText} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import db from '../firebase'
import firebase from 'firebase';

function Display() {

    const [todos, setTodos] = useState([])

    const [input, setInput] = useState('')

    const [open, setOpen] = useState(true);

    const [name, setName] = useState("")

    useEffect(() => {
      db.collection('Users').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
              setTodos(snapshot.docs.map(doc => doc.data().todo))
          })
      }, [])

    // useEffect(() => {
    //   firebase
    //   .firestore()
    //   .collection("Users")
    //   .doc($name)
    //   .collection("messages")
    //   .doc("database")
    //   .set({
    //     message: input
    //   })
    //   .then((ref) => { console.log(ref) });
    // }, [input])
    

  // function handleClickOpen() {
  //   setOpen(true);
  // }

  const handleClose = (event) => {
      event.preventDefault();
    setOpen(false);
    // setName({name})
  }

    const addToDo = (event) => {
        event.preventDefault();
        // setTodos([...todos, input]);
        db.collection('Users').add({
          name: name,
          todo: input,
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
          })
          setInput('')
        }
        
    

    return (
        <div><Dialog open={open}  aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Enter Name</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To chat with your friends, please enter your name here. 
          </DialogContentText>
          <TextField value = {name}
          onChange = {event => setName(event.target.value)}
            autoFocus
            margin="dense"
            id={name}
            label="Name"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button disabled={!name} onClick = {handleClose} color="primary">
            Chat
          </Button>
        </DialogActions>
      </Dialog>
            <div><h1>Hello {name}!</h1>
            <h3>Let's Chat</h3>
            <form onSubmit = {addToDo}>
            {/* <input type='text' value={input} onChange={event => setInput(event.target.value)}></input> */}
            <Input type='text' value={input} onChange={event => setInput(event.target.value)} placeholder="Message" inputProps={{ 'aria-label': 'description' }} />
            <Button disabled={!input} variant="outlined" color="primary" type='submit'>
                    Send
            </Button>
            </form>
            <ul>
            {
            todos.map(todo => <List>
                <ListItem>
                    <ListItemText primary= {todo} secondary={name}></ListItemText>
                </ListItem>
            </List>
                )
                    }
            </ul>
            </div>
        </div>
    )
}

export default Display
