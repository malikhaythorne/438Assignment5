
 import {useState} from 'react'
 
 function TextInput(props) {
   const [text, setText] = useState('')
 
   function sendMessage(){
     props.send(text)
     setText('')
   }
 
   return <footer className="text-input">
     <input 
       placeholder="Write your message"
       value={text}
       onChange={e=> setText(e.target.value)}
     />
     <button onClick={sendMessage}>
       SEND
     </button>
   </footer>
 }
 
 export default TextInput
