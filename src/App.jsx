import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';






function App() {
  
  const[events,setEvents] = useState(
    localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [],
  );
  const users =[
    {
      //house of lanister
      name: "Lanister",
      house: "House of Lanister",

    },
    {
      //house of stark
      name: "Stark",
      house: "House of Stark",
    },

  ];

  //add event to the list of events
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //set admin
  const [admin,setAdmin] = useState("");

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [House, setHouse] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  

  function handleTitle(e){
    setTitle(e.target.value);
  }
  function handleHouse(e){
    setHouse(e.target.value);
  }

  function handleUser(e){
    setUser(e.target.value);
  }
  function handleDescription(e){
    setDescription(e.target.value);
  }
  function handleDate(e){
    setDate(e.target.value);
  }
  function handleSubmit(e){
    e.preventDefault();
    setEvents([...events,{title,description,date,House,isAdmin,user}]);
    setTimeout(() => {

    localStorage.setItem("events",JSON.stringify([...events,{title,description,date,House,isAdmin,user}]));
    }, 1000);
    setTitle('');
    setDescription('');
    setDate('');
    setHouse('');
    
    setUser('');
    handleClose();
  }

  
  
 function handlePassword(e){
   setPassword(e.target.value);
 }

 function handleLogin(e){

    e.preventDefault();
    if(password === "admin"){
      setIsAdmin(true);
      setPassword('');
      return;
    }
    else{
      setIsAdmin(false);
      window.alert("Invalid Password");
      setPassword('');
      return;
    }
  }

  


  return (
    <div className="App">

      <header className="App-header d-flex justify-content-between ">
        Game of Thrones Events 

        
        <Button variant="primary" onClick={handleShow}>
          Create Event
        </Button>

        <div className="pass">
          <input type="text" value={password} placeholder="Enter Password" onChange={handlePassword}/>
        <Button onClick={handleLogin}>Login</Button>
        </div>


      </header>
      <div className="container-fluid h-100">

<div className="card-holder">

      {events.map((event,i)=>{
        // console.log(event);
        return <div key={i} className=' d-flex  flex-column justify-content-between   rounded p-3 m-4 cards'>
          <h1>{event.title}</h1>
          <p>{event.description}</p>
          <p>{event.date}</p>
          <p>{event.House}</p>
            <p>{event.user}</p>
          {isAdmin ?
          <Button  variant="danger" onClick={()=>{
            setEvents(events.filter((event,index)=>{
              return index !== i
            }))
            localStorage.setItem("events",JSON.stringify(events.filter((event,index)=>{
              return index !== i
            }
            )));
          }
        }>Delete</Button>  : <><span>Only admins can delete the event</span></>}
          
                    

        </div>

})}
</div>


      
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Create Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
      
            
      
    
      <input type="text" placeholder="title" onChange={handleTitle} />
      <input type="text" placeholder="description" onChange={handleDescription} />
      <input type="date" placeholder="date" onChange={handleDate} />
      <input type="text" placeholder="House" onChange={handleHouse} />
      <input type="text" placeholder="User" onChange={handleUser} />
      

      
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success  " onClick={handleSubmit}>Save</Button>
        </Modal.Footer>
      </Modal>

      


      
   
   
   </div>

  
      
    </div>
  )
}




export default App
