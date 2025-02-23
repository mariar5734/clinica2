'use client'
import { useEffect, useState } from "react";
import styles from "./listarMedico.module.css";
import Image from "next/image";

export default function medico() {
    let [nome, setNome] = useState(undefined)
    let [medicos, setMedicos] = useState([])
    const [mostrar, setMostrar] = useState(false);

    const [busca, setBusca] = useState('');
    const nomesBusca = medicos.filter((medico) => (medico.nome.toLowerCase().includes(busca.toLowerCase())));
    const getMedicos = async (nome) => {
        let response = await fetch('https://api-clinica-2a.onrender.com/medicos');
        let data = await response.json();
        console.log(data)

        if (typeof nome == 'undefined') {
            setMedicos(data);
        } else {
            data = data.filter(item => item.nome.toLowerCase().includes(nome.toLowerCase()));
            setMedicos(data);
        }

        if (!response.ok) {
            throw new Error('Não foi possível buscar' + response.statusText);
        }
    }

    useEffect(() => {
        getMedicos(nome);
    }, [nome]);
    return (


        <main className={styles.main}>
            <h1>Médicos</h1>
            <div className={styles.medicos_conteinar}>
                
                <button className={styles.buttonMedic}
                onClick={() => setMostrar(!mostrar)}>Buscar Médicos</button>
                {mostrar &&
                    <div className={styles.botao} onClick={() => setMostrar(!mostrar)}>
                        <div className={styles.selecione} onClick={(e) => e.stopPropagation()}>
                            <h3>Selecione um médico</h3>
                            <input
                                placeholder="Digite o nome do médico"
                                type="text"
                                onChange={(e) => setBusca(e.target.value)}
                                value={busca}
                                onClick={() => setMostrar(mostrar)}
                                >
                                    

                            </input>
                            <ul>
                                {nomesBusca.map((md, i) => (
                                    <li className={styles.li} key={i}>{md.nome}</li>
                                ))}
                            </ul>
                        </div>

                    </div>
                }




                <div className={styles.tabela_Container}>
                    <table className={styles.tabela_medic}>
                        <thead className={styles.thead}>
                            <tr className={styles.tr}>
                                <th className={styles.th}>ID</th>
                                <th className={styles.th}>Nome</th>
                                <th className={styles.th}>Telefone</th>
                                <th className={styles.th}>Email</th>
                                <th className={styles.th}>Especialidade</th>
                            </tr>
                        </thead>
                        <tbody className={styles.tbody}>
                            {medicos.map((medico) => (
                                <tr className={styles.tro} key={medico.id}>
                                    <td className={styles.td}>{medico.id}</td>
                                    <td className={styles.td}>{medico.nome}</td>
                                    <td className={styles.td}>{medico.telefone}</td>
                                    <td className={styles.td}>{medico.email}</td>
                                    <td className={styles.td}>{medico.especialidade}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>

    );

}