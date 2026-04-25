import { useContext } from "react";
import { LoginContext, ThemeContext } from "./MasterLayout";

export function CountButton(){
    const {isLogin} = useContext(LoginContext);
    const { theme } = useContext(ThemeContext);
    return(<>{<button
        style={theme=="dark"?{backgroundColor:'black'}:{backgroundColor:"white"}}
                          className="counter">
        {isLogin ? "Da dang nhap" : "Chua dang nhap"}
                        </button> 
            }</>);
}