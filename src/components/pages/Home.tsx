import patients from "../../assets/paciente.png";
import doctors from "../../assets/medico.png";
import apointments from "../../assets/calendario.png"

import Card from "../layout/Card";

export default function Home() {
    return(
        <div className="h-auto md:h-screen bg-gray-300">

            <h1 className="p-5 text-4xl text-center text-white bg-slate-950">Clínica | Odonto</h1>
            
            <div className="p-10 flex flex-col gap-10 md:flex-row">

                <div className="m-auto h-[30vh] w-[70vw]">
                    <Card 
                        logo={patients}
                        title="Patients"
                    />
                    
                </div>

                <div className="m-auto h-[30vh] w-[70vw]">
                    <Card 
                        logo={apointments}
                        title="Appointments"
                    />
                    
                </div>

                <div className="m-auto h-[30vh] w-[70vw]">
                    <Card 
                        logo={doctors}
                        title="Doctors"
                    />
                    
                </div>
            </div>
        </div>
    )
}