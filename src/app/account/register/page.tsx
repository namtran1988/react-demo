'use client';

import { Navigation } from "@/app/navigation";
import { SyntheticEvent, useCallback, useState } from "react";

interface IRegistData{
    fullName:string;
    age: number;
    email: string;
    gender: string;
    gradeLevel: number;
    avatar:string;
}

export default function Register() {
    //const [formData,setFormData] = useState<IRegistData>({} as IRegistData);
    const demoData:IRegistData ={fullName:"Tran Hoang Nam", age:40, email:"nam@gmail.com",gender:"male", gradeLevel:2, avatar:""};
    const [formData,setFormData] = useState<IRegistData>(demoData);
    const [isAgree, set_isAgree] = useState(false);
    const [formDataStr, setformDataStr] = useState("");

    const handleChange = (event:SyntheticEvent)=>{
        setFormData({...formData,[event.target.name]:event.target.value});
    };

    const agreeHandler = (event:SyntheticEvent)=>{
        set_isAgree(event.target.checked);
    }

    const onSelectFileHandle = (event)=>{
        console.log(event);
        const file = event.target.files[0];
        setFormData({...formData,[event.target.name]:file.name});
    }

    const onSubmit = async (event:SyntheticEvent)=>{
        event.preventDefault();
        const response = await fetch("https://postman-echo.com/post",{
            method:"POST",
            headers: {"Content-Type":"application/json"},
            body:JSON.stringify(formData)
        });
    };
    return (<section>
        <Navigation />
        <article>
            <div className="flex">
            <form className="verticle-form" onSubmit={onSubmit}>
                <div className="item">
                    <label>Full Name: </label>
                    <input required name="fullName" value={formData.fullName} onChange={handleChange}/>
                </div>
                <div className="item">
                    <label>Age:</label>
                    <input type="number" max={150} min={1} required name="age" onChange={handleChange} value={formData.age} />
                </div>
                <div className="item">
                    <label>Email:</label>
                    <input type="email" name="email" onChange={handleChange} value={formData.email} />
                </div>
                <div className="item">
                    <label>Gender</label>
                    <input type="radio" name="gender" value="male" onChange={handleChange} checked={formData.gender == "male"}/> Male
                    <input type="radio" name="gender" value="female" onChange={handleChange} checked={formData.gender == "female"}/> Female
                </div>
                <div className="item">
                    <label>Grade level</label>
                    <select name="gradeLevel" onChange={handleChange} value={formData.gradeLevel}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                    </select>
                </div>
                <div className="item">
                    <label>Avatar</label>
                    <input type="file" name="avatar" onChange={onSelectFileHandle} />    
                </div>
                <div className="item">
                    <label>
                        <input type="checkbox" checked={isAgree} onChange={agreeHandler}/> I agree with terms and conditions
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
            <div>
                {formData && <ul className="form-data">
                    <li>Full Name: {formData.fullName}</li>
                    <li>Age: {formData.age}</li>
                    <li>Email: {formData.email}</li>
                    <li>IsAgree: {JSON.stringify(isAgree)}</li>
                    <li>Gender: {formData.gender}</li>
                    <li>GradeLevel: {formData.gradeLevel}</li>
                    <li>Avatar: {formData.avatar}</li>
                    <li>{formDataStr}</li>
                </ul>}
                
            </div>
            </div>
            
        </article>
    </section>);
}