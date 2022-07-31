import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';






function App() {
  
  const[events,setEvents] = useState([]);
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

  

  function handleTitle(e){
    setTitle(e.target.value);
  }
  function handleDescription(e){
    setDescription(e.target.value);
  }
  function handleDate(e){
    setDate(e.target.value);
  }
  function handleSubmit(e){
    e.preventDefault();
    handleAdmin(user);

    setEvents([...events,{title,description,date,House,isAdmin,user}]);
    setTitle('');
    setDescription('');
    setDate('');
    setHouse('');
    setIsAdmin(false);
    setUser('');
    handleClose();
  }

  function handleHouse(e){
    setHouse(e.target.value);
  }

  function handleUser(e){
    setUser(e.target.value);
  }
  function handleAdmin(user){
    if(user == "admin"){
      setIsAdmin(true);
    }
  }



  


  return (
    <div className="App">

      <header className="App-header">
        Game of Thrones Events 

        
        <Button variant="primary" onClick={handleShow}>
          Create Event
        </Button>
      </header>
      <div className="container-fluid h-100">

<div className="d-flex ">

      {events.map((event,i)=>{
        console.log(event);
        return <div key={i} className='bg-warning w-50 rounded p-3 m-4'>
          <h1>{event.title}</h1>
          <p>{event.description}</p>
          <p>{event.date}</p>
          <p>{event.House}</p>
            <p>{event.user}</p>
          Show Admin: {event.isAdmin ? "Yes" : "No"}
          
                    <Button variant="danger" onClick={()=>{
                      setEvents(events.filter((event,index)=>{
                        return index !== i
                      }))
                    }
                  }>Delete</Button>

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
