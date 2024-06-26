
import { useState } from "react";

import perfil from "../../assets/perfil.png";
import menu from "../../assets/menu.png";

import { Link } from "react-router-dom";

export default function Menu() {

    const [ open, setOpen ] = useState(false);

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

    const handleOpenMenu = () => (
        setOpen(!open)
    )

    return(

        <div className="lg:block">
        
            <img src={menu} alt="Menu" onClick={handleOpenMenu} className="absolute left-4 top-4 lg:hidden"/>

            {open && 
        
                <div className="h-screen pt-10 bg-slate-950 h- w-64 lg:block absolute shadow-slate-600 shadow-xl">

                    <img    
                        src={perfil} 
                        alt="perfil" 
                        className="pt-5 m-auto object-cover h-48"
                    />

            <h1 className="text-center text-xl text-white opacity-65">James Lenon</h1>

            <div className="pt-10 text-center divide-y opacity-50 text-white">

                <div className="p-4 cursor-pointer">
                    <a href="/clinica">
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

            <Link to="/login">
                <div className="pt-10 flex justify-center items-center">
                    <button className="p-2 border border-slate-400 text-center text-white rounded-lg hover:bg-slate-700/50 w-36 cursor-pointer">Logout</button>
                </div> 
            </Link>

                </div>}

                <div className="bg-slate-950 h-screen w-64 hidden lg:block absolute">
                   
                   <img src={menu} alt="Menu" onClick={handleOpenMenu} className="lg:hidden absolute left-4 top-5"/>

                    <img    
                        src={perfil} 
                        alt="perfil" 
                        className="pt-8 m-auto object-cover h-40"
                    />

            <h1 className="text-center text-xl text-white opacity-65">James Lenon</h1>

            <div className="pt-10 text-center divide-y opacity-50 text-white">

                <div className="p-4 cursor-pointer">
                    <a href="/clinica">
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

            <Link to="/login">
                <div className="pt-10 flex justify-center items-center">
                    <button className="p-2 border border-slate-400 text-center text-white rounded-lg hover:bg-slate-700/50 w-36 cursor-pointer">Logout</button>
                </div> 
            </Link>

                </div>
        </div>
    )
}