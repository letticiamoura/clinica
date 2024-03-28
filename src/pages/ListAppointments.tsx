import axios from "axios";
import { useEffect, useState } from "react";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

export default function ListAppointments() {
    const url = "http://localhost:3000/apointments";

    const [ data, setData ] = useState([]);

    useEffect(() => {
        axios.get(url)
        .then((response) => {
            setData(response.data)
        })
        .catch((err) => {
            console.log("Erro ao requisitar dados " + err)
        })
    })
    return(
        
        <div className="bg-slate-700 h-screen">

            <div className="p-10 flex justify-between">
                <h1 className="text-4xl text-center text-white">Patients</h1>
                <button className="border p-2 rounded-md text-white">New Patients</button>
            </div>

            <TableContainer component={Paper} elevation={3}>
                <Table className="bg-slate-200/50 filter bg-brightness-98 m-auto min-w-[400px]" size="small" aria-label="a dense table">
                    {/**Cabeçario */}
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>CPF</TableCell>
                            <TableCell>birthDate</TableCell>
                        </TableRow>
                    </TableHead>

                    {/**Corpo da Tabela*/}
                    <TableBody>
                        {data.map((items, i) => (
                            <TableRow key={i}>
                                <TableCell component="th" scope="row">{items.name}</TableCell>
                                <TableCell>{items.cpf}</TableCell>
                                <TableCell>{items.birthDate}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>

                </Table>
            </TableContainer>
        </div>
    )
}