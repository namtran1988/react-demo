import { useCallback, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BigTitle } from './BigTitle'
import { MasterLayout } from './MasterLayout'
import { CountButton } from './CountButton'

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [gender, setGender]= useState("");
  const [isAgree, setIsAgree] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleAddTodo = useCallback(() => {
    const newTodo = `Todo ${todos.length + 1}`;
    setTodos([...todos, newTodo]);
  }, [todos]);

  const lastTodo = useMemo(() => {
    return todos.length > 0 ? todos[todos.length - 1] : null;
  }, [todos.length < 2]);

  const onInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }, [formData]);

  const onSubmitHandler = useCallback(async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log("formData: ", formData);
    // console.log("gender: ", gender);
    // console.log("isAgree: ", isAgree);
    // console.log("selectedOption: ", selectedOption);
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ ...formData, gender, isAgree, selectedOption })
    });
    const data = await response.json();
    console.log("Response from API: ", data);
    /// send data to the API
  }, [formData, gender, isAgree, selectedOption]);

  const onGenderChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.value);
  }, []);

  const onCheckboxChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setIsAgree(e.target.checked);
  }, []);

  const onSelectChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  }, []);

  const onFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    console.log("Selected file: ", file);
  }, []);

  const requestData = useCallback(() => {
   // fetch data from API
    setFormData({name: "John Doe", email: "john.doe@example.com"});
  },[formData]);

  return (
    <>
    <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <p>
            Todo Count = {todos.length}
          </p>
          <p>Todo list:</p>
          <p>
            {todos.map((todo, index) => (
              <div key={index}>{todo}</div>
            ))}
          </p>
          <p>Last Todo: {lastTodo}</p>
        </div>
        <button onClick={handleAddTodo}>Add Todo</button>
        <button onClick={requestData}>Request Data</button>
        {/* <CountButton/> */}
        <BigTitle />
      </section>

      <form onSubmit={onSubmitHandler}>
        <input type="text" value={formData.name} onChange={onInputChange} name="name" required maxLength={10} />
        <input type="email" value={formData.email} onChange={onInputChange} name="email"/>
        <div>
          <input type="radio" name="gender" value="male" onChange={onGenderChange} /> Male <br />
          <input type="radio" name="gender" value="female" onChange={onGenderChange} /> Female
        </div>
        <div>
            <input type="checkbox" checked={isAgree} onChange={onCheckboxChange} /> I agree to the terms and conditions
        </div>
        <div>
          <select value={selectedOption} onChange={onSelectChange}>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        <div>
          <input type="file" onChange={onFileChange} />
        </div>
        
        <button type='submit'>Submit</button>
      </form>

      <div className="ticks"></div>
      <section id="spacer"></section></>
  )
}

export default App
