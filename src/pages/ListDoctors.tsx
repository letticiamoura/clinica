import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react"

import { GrPrevious } from "react-icons/gr";
import { BiArchive, BiEdit } from "react-icons/bi";

export default function ListDoctors() {

    const url = "https://letticiamoura.github.io/api-fake/db.json";

    const [ data, setData ] = useState([{
        id: 0,
        name: '',
        cpf: '',
        cro: '',
        birthDate: '',
        area: '',
    }]);

    useEffect(() => {
        axios.get(url) 
        .then((response) => {
            setData(response.data.doctors)
        })
        .catch((err) => {
            console.log("Erro ao requisitar dados " + err)
        })
    })

    const handleEdit = (id: number) => {
        alert("Ops, em contrução");
        console.log(id);
    }

    const handleInative = (id: number) => {
        alert("Ops, em contrução");
        console.log(id);
    }

    return(
        <div className="bg-slate-700 h-screen">

            <div className="p-10 flex gap-3 justify-between">
                <Link to="/clinica"> <GrPrevious className="pt-2 text-4xl md:text-5xl text-slate-400 hover:text-slate-300 font-extrabold"/> </Link>
                <h1 className="text-4xl mr-3 md:text-5xl text-center text-slate-300 font-extrabold">Doctors</h1>
                <button className="border p-1 md:p-2 font-bold rounded-md text-slate-300 hover:scale-105 hover:border-none hover:bg-gradient-to-r from-slate-500 to-slate-600 hover:inset-x-4 hover:inset-y-1">New Doctors</button>
            </div>

            <TableContainer component={Paper}>

                <Table className="bg-slate-200/50 filter bg-brightness-98 m-auto min-w-[400px]" size="small" aria-label="a dense table">

                    <TableHead>
                        <TableRow>
                            <TableCell style={{fontSize: '1.1em', opacity: '90%'}}>Id</TableCell>
                            <TableCell style={{fontSize: '1.1em', opacity: '90%'}}>Name</TableCell>
                            <TableCell style={{fontSize: '1.1em', opacity: '90%'}}>CPF</TableCell>
                            <TableCell style={{fontSize: '1.1em', opacity: '90%'}}>CRO</TableCell>
                            <TableCell style={{fontSize: '1.1em', opacity: '90%'}}>Birth Date</TableCell>
                            <TableCell style={{fontSize: '1.1em', opacity: '90%'}}>Área</TableCell>
                            <TableCell style={{fontSize: '1.1em', opacity: '90%'}}>Action</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {data.map((items, i) => (
                            <TableRow key={i}>
                                <TableCell>{items.id}</TableCell>
                                <TableCell component="th" scope="row">{items.name}</TableCell>
                                <TableCell>{items.cpf}</TableCell>
                                <TableCell>{items.cro}</TableCell>
                                <TableCell>{items.birthDate}</TableCell>
                                <TableCell>{items.area}</TableCell>
                                <TableCell>
                                <div className="flex gap-5">
                                    <button onClick={() => handleEdit(items?.id)}  className="text-2xl font-medium text-green-700/50 hover:text-green-700"><BiEdit title="Edit"/></button>
                                    <button onClick={() => handleInative(items?.id)}  className="text-2xl font-medium text-orange-500/50 hover:text-orange-500"> <BiArchive title="Archive"/> </button>
                                </div>
                            </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
                                
        </div>
    )
}