import { Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

import { GrPrevious } from "react-icons/gr";
import { BiEdit, BiArchive } from "react-icons/bi";

import { Link } from "react-router-dom";

export default function ListPatients() {

   const [data, setData] = useState<{ id: number, name: string, cpf: string, birthDate: string }[]>([]);

    const [formData, setFormData] = useState({
        id: 0,
        name: "",
        cpf: "",
        birthDate: "",
        healthInsurance: "false"
      });

    //const url = "http://localhost:3000/patients";
    //const urlPOST = "http://localhost:3000/patients";
    
    const url = "https://letticiamoura.github.io/api-fake/db.json";

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
            id: 0,
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

          const response = await axios.post(url, { ...formData, birthDate: formattedDate });

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
            id: 0,
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
        
            <div className="p-10 flex gap-2 justify-between">
                <Link to="/clinica" className="pt-1"> <GrPrevious className="text-5xl md:text-5xl text-slate-400 hover:text-slate-300 font-extrabold"/> </Link>

                <h1 className="pt-2 md:pt-0 text-4xl md:text-5xl text-center font-extrabold text-slate-300 mr-5">Patients</h1>

                <button onClick={handleOpen} className="border p-1 md:p-2 md:text-xl rounded-lg text-slate-300 hover:scale-105 hover:bg-gradient-to-r from-slate-500 to-slate-600 hover:inset-x-4 hover:inset-y-1 font-bold hover:border-none">New Patients</button>
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

                    <div className="p-5 pt-10 lg:pt-5 flex flex-col gap-3 items-center">
                    
                        <div className="w-full lg:w-auto">
                            <label htmlFor="name" className="text-slate-600 font-bold">Nome <br />
                                <input 
                                    type="text" 
                                    title="Digite um nome"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="Seu nome completo"
                                    className="w-full lg:w-[30vw] font-normal outline-none rounded-2xl text-white/80 bg-slate-700 p-2" 
                                />
                            </label>
                        </div>
                    
                        <div className="w-full lg:w-auto">
                            <label htmlFor="name" className="text-slate-600 font-bold">CPF <br />
                                <input 
                                    type="text" 
                                    value={formData.cpf}
                                    pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" 
                                    title="Digite um CPF no formato: xxx.xxx.xxx-xx"
                                    onChange={(e) => setFormData({ ...formData, cpf: e.target.value })}
                                    placeholder="XXX.XXX.XXX-XX"
                                    className="w-full lg:w-[30vw] font-normal outline-none rounded-2xl text-white/80 bg-slate-700 p-2" 
                                />
                            </label>
                        </div>
                        
                        <div className="w-full lg:w-auto">
                            <label htmlFor="name" className="text-slate-600 font-bold">Birthday <br />
                                <input 
                                    type="date" 
                                    title="Digite a data de nascimento"
                                    name="birthday" 
                                    id="birthday" 
                                    value={formData.birthDate}
                                    onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                                    className="w-full lg:w-[30vw] outline-none rounded-2xl text-white/80 bg-slate-700 p-2" />
                            </label>
                        </div>

                        <div className="w-full lg:w-auto">
                            <label htmlFor="name" className="text-slate-600 font-bold">Health insurance <br />
                            <select 
                                name="value" 
                                id="healthInsurance" 
                                value={formData.healthInsurance}
                                onChange={(e) => setFormData({ ...formData, healthInsurance: e.target.value })} 
                                className="w-full lg:w-[30vw] outline-none rounded-2xl text-white/80 bg-slate-700 p-2" 
                            >
                                <option value="false">No</option>
                                <option value="true">Yes</option>
                            </select>
                            
                            </label>

                        </div>

                    <div className="pt-3">
                        <input onClick={handleSubmit} type="submit" value="Register" className="border border-slate-500 text-xl lg:text-lg p-2 rounded-xl text-slate-200 font-medium hover:bg-slate-700/50 hover:cursor-pointer w-[40vw] lg:w-[10vw]"/>
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
                        <TableCell style={{fontSize: '1.1em', opacity: '90%'}}>Id</TableCell>
                        <TableCell style={{fontSize: '1.1em', opacity: '90%'}}>Name</TableCell>
                        <TableCell style={{fontSize: '1.1em', opacity: '90%'}}>CPF</TableCell>
                        <TableCell style={{fontSize: '1.1em', opacity: '90%'}}>birthDate</TableCell>
                        <TableCell style={{fontSize: '1.1em', opacity: '90%'}}>Action</TableCell>
                    </TableRow>
                </TableHead>

                {/**Corpo da Tabela*/}
                <TableBody>
                    {data.map((items, i) => (
                        <TableRow key={i}>
                            <TableCell>{items?.id}</TableCell>
                            <TableCell component="th" scope="row">{items?.name}</TableCell>
                            <TableCell>{items?.cpf}</TableCell>
                            <TableCell>{items?.birthDate}</TableCell>
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