import patients from "../assets/patients.png";
import doctors from "../assets/doctor.png";
import apointments from "../assets/calendar.png"

import Card from "../components/layout/Card";
import { Link } from "react-router-dom";
import Cabecario from "../components/Cabecario";

export default function Home() {
    return(
        
        <div className="h-auto w-auto bg-gray-300 lg:h-screen">
            
            <Cabecario />
            
            
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