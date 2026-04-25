import axios from "axios";
import { useCallback, useState } from "react";
const API_URL = import.meta.env.VITE_API_URL;

export function Register(){
    const [formData, setFormData] = useState({ userName: "", password: "" });
    const onInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }, [formData]);


    const onSubmitHandler = useCallback(async(e: React.FormEvent<HTMLFormElement>) => { 
        e.preventDefault();
        await axios.postForm(`${API_URL}/account/login`,formData).then(e=>{console.log("test response", e)})
    }, [formData]);
    return (<form onSubmit={onSubmitHandler}>
        <div><label>Email: </label>
            <input type="text" onChange={onInputChange} name="userName" autoComplete="false" /></div>

        <div><label>Password: </label>
            <input type="password" onChange={onInputChange} name="password" autoComplete="false" /></div>

        <button type="submit">Login</button>
    </form>)
}