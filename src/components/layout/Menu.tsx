
import { useState } from "react";

import perfil from "../../assets/perfil.png";
import { Link } from "react-router-dom";

export default function Menu() {

    const [ openPatients, setOpenPatients ] = useState(false);
    const [ openAppointments, setOpenAppointments ] = useState(false);
    const [ openDoctors, setOpenDoctors ] = useState(false);

    const handleOpen = () => {
        setOpenPatients(!openPatients);
        setOpenAppointments(false);
        setOpenDoctors(false);
    };

    const handleOpenApp = () => {
        setOpenAppointments(!openAppointments);
        setOpenPatients(false);
        setOpenDoctors(false);
    };

    const handleOpenDoc = () => {
        setOpenDoctors(!openDoctors);
        setOpenPatients(false);
        setOpenAppointments(false);
    };

    return(
        <div className="bg-slate-950 h-screen w-64 hidden lg:block">

            <img    
                src={perfil} 
                alt="perfil" 
                className="pt-5 m-auto object-cover h-44"
            />

            <h1 className="text-center text-xl text-white opacity-65">James Lenon</h1>

            <div className="pt-10 text-center divide-y opacity-50 text-white">

                <div className="p-4 cursor-pointer">
                    <a href="/">
                        <h1 className="text-xl">Home</h1>
                    </a>
                </div>

                <div className="p-4 cursor-pointer"  onClick={handleOpen}>
                    <h1 className="text-xl">Patients</h1>
                    {openPatients &&(
                        <>

                            <Link to="/createPatients">
                                <div className="p-3 hover:bg-slate-600">
                                    <h2>Patients</h2>
                                </div>
                            </Link>

                                <Link to="/listPatients">
                                    <div className="p-3 hover:bg-slate-600">
                                        <h1>List</h1>
                                    </div>
                                </Link>
                        </>
                    )}
                </div>

                <div className="p-4 cursor-pointer" onClick={handleOpenApp}>
                    <h1 className="text-xl">Appointments</h1>
                    {openAppointments &&(
                        <>
                            <Link to="/createAppointments">
                                <div className="p-3 hover:bg-slate-600">
                                    <h2>Appointments</h2>
                                </div>
                            </Link>

                            <Link to="/listPatients">
                                <div className="p-3 hover:bg-slate-600">
                                    <h2>List Appointments</h2>
                                </div>
                            </Link>
                        </>
                    )}
                </div>

                <div className="p-4 cursor-pointer" onClick={handleOpenDoc}>
                    <h1 className="text-xl">Doctors</h1>
                    {openDoctors &&(
                        <>
                            <Link to="/createDoctors">
                                <div className="p-3 hover:bg-slate-600">
                                    <h2>Doctors</h2>
                                </div>
                            </Link>

                            <Link to="/listDoctors">
                                <div className="p-3 hover:bg-slate-600">
                                    <h2>List Doctors</h2>
                                </div>
                            </Link>
                        </>
                    )}
                </div>

            </div>

            <Link to="/clinica/login">
                <div className="flex justify-center items-center">
                    <button className="p-2 border border-slate-400 text-center text-white rounded-lg hover:bg-slate-700/50 w-36 cursor-pointer">Logout</button>
                </div> 
            </Link>

            <footer className="fixed bottom-0 w-[18vw]">
                <p className="text-center opacity-50 text-white ">
                Version 0.1 
                    <span className="font-light text-slate-500">&copy;direitos reservados</span></p>
            </footer>
        </div>
    )
}