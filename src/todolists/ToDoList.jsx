import React , {useState} from 'react'
import "./todolist.css"
const ToDoList = () => {
    const [todo , setTodos] = useState([]);
    const [input , setInputs] = useState("");
    function handelInputChange (e) {
      setInputs(e.target.value);
    }
    function handelSubmit(){
        if(input.trim()){
            setTodos([...todo, input.trim()]);
            setInputs("");
        }
    }
    function handeldelete(index){
        setTodos(todo.filter((_,i) => i !== index))
    }
  return (
    <div className='box'>
        <div>
            <section>
                <p>This is the place whare you can add your task to do in this website . feel free to add any kind of list items to do </p>
            </section>
        </div>
        <label class="label">please enter your todo list </label>
        <input class="input__field" type="text" value={input} onChange={handelInputChange} />
        <button className='button' onClick={handelSubmit}>
            add todos
        </button>
        <ul>
        {todo.map((todo, index) =>(
        <li className='appendlist' key={index}>
            {todo}
            <button className='button2' onClick={()=>handeldelete(index)}>delete</button>
        </li>))}
        </ul>
    </div>
  )
}

export default ToDoList
