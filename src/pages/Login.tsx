import { useState } from "react"

import login from "../assets/login.gif";
 
export default function Login() {

    const [ click, setClick ] = useState('')

    const handleClick = () => {
        setClick("")
    }

    return(

        <div className="bg-slate-950 h-auto">

            <form action="" className="p-5 flex flex-col lg:flex-row h-auto lg:h-screen justify-around items-center w-full sm:w-[80vw] lg:w-full m-auto">
                
            <img src={login} alt="Login" className="object-cover h-[35vh] md:h-[50vh] w-auto lg:h-auto  lg:w-auto"/>

                <div className="pt-5 md:pt-1 h-[80vh] lg:h-full w-full md:w-[40vw]">

                    <h1 className="lg:p-20 text-4xl md:text-5xl text-center text-slate-600 font-semibold">Faça seu <br />
                        <span className="text-5xl text-slate-400 font-extrabold">Login</span>
                    </h1>

                    <div className="pb-5">        
                        <label htmlFor="user" className="p-2 text-2xl lg:text-xl font-medium text-slate-300/50">User</label><br />
                        <input 
                            type="text" 
                            name="user" 
                            value={click}
                            onChange={(e) => setClick(e.target.value)}
                            id="user" 
                            className="p-3 lg:p-2 w-full rounded-lg outline-none text-slate-400 bg-slate-800"
                        />
                    </div>

                    <div className="pb-5">        
                        <label htmlFor="user" className="p-2 text-2xl lg:text-xl font-medium text-slate-300/50">Password</label><br />
                        <input  
                            type="password" 
                            name="password"
                            value={click}
                            onChange={(e) => setClick(e.target.value)}
                            id="password" 
                            className="p-3 lg:p-2 w-full rounded-lg outline-none text-slate-400 bg-slate-800"
                        />
                    </div>

                    <div className="text-center pt-10">

                        <input onClick={handleClick} type="button" value="Login" className="m-auto text-2xl lg:text-xl text-center p-2 border rounded-lg text-white w-32 outline-none"/>
                    
                    </div>

                </div>

            </form>

        </div>
    )
}