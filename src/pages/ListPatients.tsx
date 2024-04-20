import { Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";


export default function ListPatients() {

    const [ data, setData ] = useState([{
        name: '',
        cpf: '',
        birthDate: ''
    }])

    const [formData, setFormData] = useState({
        name: "",
        cpf: "",
        birthDate: "",
        healthInsurance: "false"
      });

    const url = "https://letticiamoura.github.io/api-fake/db.json";

    //Requisitando dados da API fake
    useEffect(() => {
        axios.get(url)
        .then((response) => {
            setData(response.data)
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
        setOpen(false)
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

          setData([...data, response.data])

          alert("Paciente Cadastrado!")

          //Nova requisição para atualizar as informações
          axios.get(url)
          .then((resp) => {
            setData(resp.data)
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

                <button onClick={handleOpen} className="border p-2 rounded-md text-white">New Patients</button>
            </div>

            <Modal
                open={open}
                onClose={handleClose}
            >

            <div className="h-[90vh] w-[80vw] bg-slate-800 m-auto rounded-2xl">
                            
                <form onSubmit={handleSubmit} action="" method="post">

                    <h1 className="p-10 text-slate-700 text-center text-3xl lg:text-2xl font-bold">Register the <br />
                        <span className="text-slate-600 text-5xl   lg:text-4xl font-extrabold">Patients</span>
                    </h1>

                    <div className="flex flex-col gap-3 items-center">
                    
                        <div>
                            
                            <label htmlFor="name" className="text-slate-600 font-bold">Name <br />
                                <input 
                                    type="text" 
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="Seu nome completo"
                                    className="w-[50vw] lg:w-[20vw] font-normal outline-none rounded-2xl bg-slate-700 p-1.5" 
                                />
                            </label>
                        </div>
                    
                    <div>
                        <label htmlFor="name" className="text-slate-600 font-bold">CPF <br />
                            <input 
                                type="text" 
                                value={formData.cpf}
                                onChange={(e) => setFormData({ ...formData, cpf: e.target.value })}
                                placeholder="XXX.XXX.XXX-XX"
                                className="w-[50vw] lg:w-[20vw] font-normal outline-none rounded-2xl bg-slate-700 p-1.5" 
                            />
                        </label>
                    </div>
                    
                    <div>
                        <label htmlFor="name" className="text-slate-600 font-bold">Birthday <br />
                            <input 
                                type="date" 
                                name="birthday" 
                                id="birthday" 
                                value={formData.birthDate}
                                onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                                className="w-[50vw] lg:w-[20vw] outline-none rounded-2xl bg-slate-700 p-1.5" />
                        </label>
                    </div>

                    <div>
                        <label htmlFor="name" className="text-slate-600 font-bold">Health insurance <br />
                        <select 
                            name="value" 
                            id="healthInsurance" 
                            value={formData.healthInsurance}
                            onChange={(e) => setFormData({ ...formData, healthInsurance: e.target.value })} 
                            className="w-[50vw] lg:w-[20vw] outline-none rounded-2xl bg-slate-700 p-1.5" 
                        >
                            <option value="false">No</option>
                            <option value="true">Yes</option>
                        </select>
                        
                        </label>

                    </div>

                        <div className="pt-3">
                            <input onClick={handleSubmit}  type="submit" value="Register" className="border border-slate-500 text-xl lg:text-lg p-2 rounded-2xl text-slate-200 font-medium hover:bg-slate-700/50 hover:cursor-pointer"/>
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