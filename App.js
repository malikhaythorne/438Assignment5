
 import { useState } from 'react';
 import './App.css';
 import TextInput from './TextInput';
 
 function App() {
   const [messages,setMessages] = useState([{text:'hello'}])
   return <div className="App">
  
     <header className="header">
       <div className="logo" />
       CHATTER
     </header>
 
     <main className="message">
       {messages.map((m,i)=> {
         return <Message key={i} {...m} />
     }}}
     </main>
 
     <TextInput 
       send={(t)=> setMessages([{text:t}])}
     />
 
   </div>
 }
 
 export default App;
