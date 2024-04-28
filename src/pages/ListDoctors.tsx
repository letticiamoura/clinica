import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react"

import { GrPrevious } from "react-icons/gr";

export default function ListDoctors() {

    const url = "http://localhost:3000/doctors";

    const [ data, setData ] = useState([{
        name: '',
        cpf: '',
        cro: '',
        birthDate: '',
        area: '',
        active: false
    }]);

    useEffect(() => {
        axios.get(url) 
        .then((response) => {
            
            setData(prevState => ({ ...prevState, active: true}))
            setData(response.data)
            console.log(response.data)
        })
        .catch((err) => {
            console.log("Erro ao requisitar dados " + err)
        })
    })
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
                            <TableCell style={{fontSize: '1.1em', opacity: '90%'}}>Name</TableCell>
                            <TableCell style={{fontSize: '1.1em', opacity: '90%'}}>CPF</TableCell>
                            <TableCell style={{fontSize: '1.1em', opacity: '90%'}}>CRO</TableCell>
                            <TableCell style={{fontSize: '1.1em', opacity: '90%'}}>Birth Date</TableCell>
                            <TableCell style={{fontSize: '1.1em', opacity: '90%'}}>Área</TableCell>
                            <TableCell style={{fontSize: '1.1em', opacity: '90%'}}>active</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {data.map((items, i) => (
                            <TableRow key={i}>
                                <TableCell component="th" scope="row">{items.name}</TableCell>
                                <TableCell>{items.cpf}</TableCell>
                                <TableCell>{items.cro}</TableCell>
                                <TableCell>{items.birthDate}</TableCell>
                                <TableCell>{items.area}</TableCell>
                                <TableCell>{items.active? 'True' : 'False'}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
                                
        </div>
    )
}