'use client';

import { Navigation } from "@/app/navigation";
import router from "next/router";
import { SyntheticEvent, useCallback, useState } from "react";

interface ILoginData{
    userName:string;
    password: string;
}

export default function Register() {
    const [formData,setFormData] = useState<ILoginData>({} as ILoginData);

    const handleChange = (event:SyntheticEvent)=>{
        setFormData({...formData,[event.target.name]:event.target.value});
    };

    const onSubmit = async (event:SyntheticEvent)=>{
        event.preventDefault();
        const response = await fetch("/api/users/login",{
            method:"POST",
            headers: {"Content-Type":"application/json"},
            body:JSON.stringify(formData)
        });

        if (response.ok) {
            router.push('/profile')
          } else {
            alert("Can not login");
            // Handle errors
          }
    };
    return (<section>
        <Navigation />
        <article>
            <div className="flex">
            <form className="verticle-form" onSubmit={onSubmit}>
                <div className="item">
                    <label>Username: </label>
                    <input required name="userName" onChange={handleChange}/>
                </div>
                <div className="item">
                    <label>Password: </label>
                    <input type="password" required name="password" onChange={handleChange}/>
                </div>
                <button type="submit">Submit</button>
            </form>
            </div>
            
        </article>
    </section>);
}