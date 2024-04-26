import patients from "../assets/patients.png";
import doctors from "../assets/doctor.png";
import apointments from "../assets/calendar.png"

import Card from "../components/layout/Card";
import Menu from "../components/layout/Menu";
import { Link } from "react-router-dom";

export default function Home() {
    return(
        
        <div className="h-auto w-auto bg-gray-300 lg:h-screen">

        <div className="">
            
            <h1 className="p-5 text-4xl text-center lg:absolute left-[25%] top-10 text-white bg-slate-950 lg:bg-transparent lg:text-slate-950 font-logo font-extrabold">
                <span className="p-3 bg-white text-slate-950 text-5xl rounded-tl-full rounded-br-full lg:bg-slate-950 lg:text-white">.CSP</span>
            </h1>

            <Menu />

        </div>
            
            
            <div className="p-10 flex flex-col items-center lg:fixed left-72 top-[20%] lg:flex-row justify-around">

                <div className="m-auto h-[30vh] lg:w-[25vw]">
                    <Link to="/listPatients">
                        <Card 
                            logo={patients}
                            title="Patients"
                        />
                    </Link>
                    
                </div>

                <div className="m-auto h-[30vh] lg:w-[25vw]">
                    <Link to="/listAppointments">
                        <Card 
                            logo={apointments}
                            title="Appointments"
                        />
                    </Link>
                    
                </div>

                <div className="m-auto h-[30vh] lg:w-[25vw]">
                    <Link to="/listDoctors">
                        <Card 
                            logo={doctors}
                            title="Doctors"
                        />
                    </Link>
                    
                </div>
            </div>
        </div>
    )
}