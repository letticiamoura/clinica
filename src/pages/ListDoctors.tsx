import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react"

export default function ListDoctors() {

    const url = "http://localhost:3000/doctors";

    const [ data, setData ] = useState([{
        name: '',
        cpf: '',
        cro: '',
        birthDate: ''
    }]);

    useEffect(() => {
        axios.get(url) 
        .then((response) => {
            setData(response.data)
            console.log(response.data)
        })
        .catch((err) => {
            console.log("Erro ao requisitar dados " + err)
        })
    })
    return(
        <div className="bg-slate-700 h-screen">

            <div className="p-10 flex justify-between">
                <h1 className="text-4xl text-center text-white">Doctors</h1>
                <button className="border p-2 rounded-md text-white">New Doctors</button>
            </div>

            <TableContainer component={Paper}>

                <Table className="bg-slate-200/50 filter bg-brightness-98 m-auto min-w-[400px]" size="small" aria-label="a dense table">

                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>CPF</TableCell>
                            <TableCell>CRO</TableCell>
                            <TableCell>Birth Date</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {data.map((items, i) => (
                            <TableRow key={i}>
                                <TableCell component="th" scope="row">{items.name}</TableCell>
                                <TableCell>{items.cpf}</TableCell>
                                <TableCell>{items.cro}</TableCell>
                                <TableCell>{items.birthDate}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    )
}