import { Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

import { BiEdit, BiArchive } from "react-icons/bi";

export default function ListPatients() {

   const [data, setData] = useState<{ name: string, cpf: string, birthDate: string }[]>([]);

    const [formData, setFormData] = useState({
        name: "",
        cpf: "",
        birthDate: "",
        healthInsurance: "false"
      });

    //const url = "http://localhost:3000/patients";
    //const urlPOST = "http://localhost:3000/patients";
    
    const url = "https://letticiamoura.github.io/api-fake/db.json";

    const urlPOST = "https://letticiamoura.github.io/api-fake/db.json";

    //Requisitando dados da API fake
    useEffect(() => {
        axios.get(url)
        .then((response) => {
            setData(response.data.patients)
        })
        .catch((err) => {
            console.log("Erro ao requisitar dados " + err)
        })
    }, []);

    const [ open, setOpen ] = useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }

    const handleClose = () => {
        setOpen(false);
        setFormData({
            name: '',
            cpf: '',
            birthDate: '',
            healthInsurance: 'false'
          });
    }

    const handleSubmit = async (e:any) => {
        e.preventDefault();

        const formattedDate = formData.birthDate.split('-').reverse().join('/');

        //Verifica se os campos estão vazios
        if (!formData.name || !formData.cpf || !formData.birthDate) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        try {

          const response = await axios.post(urlPOST, { ...formData, birthDate: formattedDate });

          setData([...data, response.data.patients])

          alert("Paciente Cadastrado!")

          //Nova requisição para atualizar as informações
          axios.get(url)
          .then((resp) => {
            setData(resp.data.patients)
          })
          .catch((err) => {
            console.log("Erro ao requisitar dados " + err)
          })

          //Vai limpar os campos
          setFormData({
            name: '',
            cpf: '',
            birthDate: '',
            healthInsurance: 'false'
          });

          //Vai fechar o modal
          handleClose();
          
        } catch (error) {
          console.error("Erro ao enviar dados:", error);
        }
      };

    return(

        <div className="bg-slate-700 h-screen">
        
            <div className="p-10 flex justify-between">

                <h1 className="text-4xl text-center text-white">Patients</h1>

                <button onClick={handleOpen} className="border p-2 rounded-md text-white hover:scale-105 hover:bg-gradient-to-r from-slate-500 to-slate-600 hover:inset-x-4 hover:inset-y-1">New Patients</button>
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                className="pt-10"
            >

            <div className="h-[90vh] w-[80vw] bg-slate-800 m-auto rounded-2xl">
                            
                <form onSubmit={handleSubmit} method="post">

                    <h1 className="pt-5 font-mono pr-5 font-bold text-end text-4xl text-slate-500" onClick={handleClose}>X</h1>

                    <h1 className="pt-5 text-slate-700 text-center text-3xl lg:text-2xl font-bold">Register the <br />
                        <span className="text-slate-600 text-5xl   lg:text-4xl font-extrabold">Patients</span>
                    </h1>

                    <div className="p-5 pt-10 flex flex-col gap-3 items-center">
                    
                        <div className="w-full">
                            <label htmlFor="name" className="text-slate-600 font-bold">Nome <br />
                                <input 
                                    type="text" 
                                    title="Digite um nome"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="Seu nome completo"
                                    className="w-full lg:w-[20vw] font-normal outline-none rounded-2xl text-white/80 bg-slate-700 p-2" 
                                />
                            </label>
                        </div>
                    
                        <div className="w-full">
                            <label htmlFor="name" className="text-slate-600 font-bold">CPF <br />
                                <input 
                                    type="text" 
                                    value={formData.cpf}
                                    pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" 
                                    title="Digite um CPF no formato: xxx.xxx.xxx-xx"
                                    onChange={(e) => setFormData({ ...formData, cpf: e.target.value })}
                                    placeholder="XXX.XXX.XXX-XX"
                                    className="w-full lg:w-[20vw] font-normal outline-none rounded-2xl text-white/80 bg-slate-700 p-2" 
                                />
                            </label>
                        </div>
                        
                        <div className="w-full">
                            <label htmlFor="name" className="text-slate-600 font-bold">Birthday <br />
                                <input 
                                    type="date" 
                                    title="Digite a data de nascimento"
                                    name="birthday" 
                                    id="birthday" 
                                    value={formData.birthDate}
                                    onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                                    className="w-full lg:w-[20vw] outline-none rounded-2xl text-white/80 bg-slate-700 p-2" />
                            </label>
                        </div>

                        <div className="w-full">
                            <label htmlFor="name" className="text-slate-600 font-bold">Health insurance <br />
                            <select 
                                name="value" 
                                id="healthInsurance" 
                                value={formData.healthInsurance}
                                onChange={(e) => setFormData({ ...formData, healthInsurance: e.target.value })} 
                                className="w-full lg:w-[20vw] outline-none rounded-2xl text-white/80 bg-slate-700 p-2" 
                            >
                                <option value="false">No</option>
                                <option value="true">Yes</option>
                            </select>
                            
                            </label>

                        </div>

                    <div className="pt-3">
                        <input onClick={handleSubmit}  type="submit" value="Register" className="border border-slate-500 text-xl lg:text-lg p-2 rounded-xl text-slate-200 font-medium hover:bg-slate-700/50 hover:cursor-pointer w-[40vw]"/>
                    </div>
                                    
                    </div>

                </form>

            </div>
                
        </Modal>

        <TableContainer component={Paper} elevation={3}>
            <Table className="bg-slate-200/50 filter bg-brightness-98 m-auto min-w-[400px]" size="small" aria-label="a dense table">
                {/**Cabeçario */}
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>CPF</TableCell>
                        <TableCell>birthDate</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>

                {/**Corpo da Tabela*/}
                <TableBody>
                    {data.map((items, i) => (
                        <TableRow key={i}>
                            <TableCell component="th" scope="row">{items?.name}</TableCell>
                            <TableCell>{items?.cpf}</TableCell>
                            <TableCell>{items?.birthDate}</TableCell>
                            <TableCell>
                                <div className="flex gap-5">
                                    <button className="text-2xl font-medium text-green-700/50 hover:text-green-700"><BiEdit title="Edit"/></button>
                                    <button className="text-2xl font-medium text-orange-500/50 hover:text-orange-500"> <BiArchive title="Archive"/> </button>
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