
import './App.css';
import Form from './components/Form';
import ToDoList from './components/ToDoList'

function App() {
  return (
    <div className="App">
     <header>Asim's ToDo List</header>
     <Form/> 
     <ToDoList/>
    </div>
      
  );
}

export default App;
