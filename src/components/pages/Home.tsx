import patients from "../../assets/paciente.png";
import doctors from "../../assets/medico.png";
import apointments from "../../assets/calendario.png"

import Card from "../layout/Card";
import Menu from "../layout/Menu";

export default function Home() {
    return(
        
        <div className="h-auto w-auto md:h-screen bg-gray-300">

            <Menu />

            <h1 className="p-5 text-4xl text-center lg:absolute left-[25%] top-10 text-white bg-slate-950 lg:bg-transparent lg:text-slate-950">Clínica | Odonto</h1>
            
            <div className="p-10 flex flex-col gap-5 lg:fixed left-64 top-[20%] lg:flex-row">

                <div className="m-auto h-[30vh] lg:w-[25vw]">
                    <Card 
                        logo={patients}
                        title="Patients"
                    />
                    
                </div>

                <div className="m-auto h-[30vh] lg:w-[25vw]">
                    <Card 
                        logo={apointments}
                        title="Appointments"
                    />
                    
                </div>

                <div className="m-auto h-[30vh] lg:w-[25vw]">
                    <Card 
                        logo={doctors}
                        title="Doctors"
                    />
                    
                </div>
            </div>
        </div>
    )
}