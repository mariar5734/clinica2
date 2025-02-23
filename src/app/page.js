import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.containerPrincipal}>
      <h1>Clínica Médica IF</h1>
      <p className={styles.text}>a Clínica IF oferece atendimento médico de qualidade com uma equipe dedicada e experiente. 
        Com serviços que incluem consultas, exames e tratamentos especializados, nosso foco é proporcionar cuidado personalizado e eficaz para todos nossos pacientes.
        Venha conhecer a Clínica IF e cuide da sua saúde com a gente!</p>
    </div>
  );
}





