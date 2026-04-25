import { createContext, useState } from 'react';
import viteLogo from './assets/vite.svg'
import { Link, NavLink, Outlet } from 'react-router';
export const LoginContext = createContext({ isLogin: false });
export const ThemeContext = createContext({ theme: "light" });

export function MasterLayout() {

    const [isLogin, setIsLogin] = useState(false);
    const [theme, setTheme] = useState("light");


    return (
        <ThemeContext.Provider value={{ theme: theme }}>
            <LoginContext.Provider value={{ isLogin: isLogin }}>
                <div>
                    <div className='header'>
                        <div className='logo'>
                            <span><img src={viteLogo} /></span>
                            DEMO REACT VITE
                        </div>
                        <ul className="menu">
                            <li><NavLink to="/">Home page</NavLink></li>
                            <li><a href="#next-steps">Products</a></li>
                            <li><a href="#spacer">Blogs</a></li>
                            {!isLogin && <>
                                <li><Link to="/login">Login</Link></li>
                                <li><Link to="/register">Register</Link></li>
                            </>}
                            
                            <li><button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                                {theme === "light" ? "Switch to Dark Theme" : "Switch to Light Theme"}
                            </button></li>
                        </ul>

                    </div>
                    <div><Outlet/></div>
                    <div><h2>Footer</h2></div>
                </div>
            </LoginContext.Provider>
        </ThemeContext.Provider>

    )
}