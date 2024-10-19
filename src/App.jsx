import './App.css'
import {useState} from 'react';
import ReactDom  from 'react-dom/client'


/*El primer ejercicio*/
/*function App() {
 const [name, setName] = useState('Sofia')
 const [newName, setNewName] = useState('')
 const teachers = ['Data', 'Reyes', 'Yolanda'];
 return (
    <div>
    <h2>Teacher Name: {name}</h2>
    <ul>
    {teachers.map((teacher) => (
          <li key={teacher} onClick={() => setName(teacher)}>
            {teacher}</li>))}
    </ul>
    </div>
 )
}*/

/*BONUS + el primer ejercicio*/

function App() {
    const [name, setName] = useState('Sofia')
    const [newName, setNewName] = useState('')
    const teachers = ['Data', 'Reyes', 'Yolanda'];
    const changeName = (event) => {
        event.preventDefault();
        if(newName !== '') {
            setName(newName)
            setNewName('')
        }
    }
    return (
        <div>
            <h2>Teacher Name: {name}</h2>
        <form onSubmit={changeName}>
            <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} placeholder="add a name"></input>
            <button type="submit">Add</button>
        </form>
        <ul>
            {teachers.map((teacher) => (
            <li key={teacher} onClick={() => setName(teacher)}>
            {teacher}</li>))}
        </ul>
        </div>
   )}

export default App
