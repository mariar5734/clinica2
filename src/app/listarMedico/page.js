'use client'

import { useEffect, useState } from "react"
import styles from './listarMedico.module.css'

export default function efeitos(){
    const [medicos, setMedicos] = useState([]);
    //const [nomes, setMedicos] = useState('');


    const getMedicos = async () => {
        const response = await fetch('https://api-clinica-2a.onrender.com/medicos')
        if (!response.ok) {
            throw new Error('Erro ao buscar os dados: ' + response.statusText);

        }

        const data = await response .json()
        setMedicos(data);
        console.log(data)

    }


    useEffect(() => {
        getMedicos();

    }, [])


    return (
        <div>
            <h1>Lista de Médicos</h1>
            <table className={styles.table}>
                <thead className={styles.thead}>
                    <tr className={styles.tr}>
                        <th className={styles.th}>ID</th>
                        <th className={styles.th}>Nome</th>
                        <th className={styles.th}>Telefone</th>
                        <th className={styles.th}>Email</th>
                        <th className={styles.th}>Especialidade</th>
                    </tr>

                </thead>
                <tbody className={styles.table}>
                    {medicos.map((medico, id) => ( 
                    <tr key={id} className={styles.tr}>
                        <td className={styles.td}>{medico.id}</td>
                        <td className={styles.td}>{medico.nome}</td>
                        <td className={styles.td}>{medico.telefone}</td>
                        <td className={styles.td}>{medico.email}</td>
                        <td className={styles.td}>{medico.especialiade}</td>

                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )


}