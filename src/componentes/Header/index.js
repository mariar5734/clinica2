"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image className={styles.img} src='/images/estetoscopio.png' alt='' width={40} height={40} />
        <h1 className={styles.h1}>Clínica IF</h1>
      </div>
      <button
        className={styles.menuButton + (menuOpen ? " " + styles.open : "")}
        onClick={toggleMenu}
      >
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </button>
      <nav className={styles.nav + (menuOpen ? " " + styles.navOpen : "")}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link className={styles.link} href="/">
              Home
            </Link>
          </li>
          <li className={styles.li}><Link className={styles.link} href="/medico">Médico</Link>
            <ul className={styles.ulSmenu}>
              <li className={styles.liSmenu}>
                <Link className={styles.linkSmenu} href="/medico/listar">Listar</Link>
              </li>
              <li className={styles.liSmenu}>
                <Link className={styles.linkSmenu} href="/medico/adicionar">Adicionar</Link>
              </li>
              <li className={styles.liSmenu}>
                <Link className={styles.linkSmenu} href="/medico/editar">Editar</Link>
              </li>
              <li className={styles.liSmenu}>
                <Link className={styles.linkSmenu} href="/medico/excluir">Excluir</Link>
              </li>
            </ul>
          </li>
          <li className={styles.li}><Link className={styles.link} href="/paciente">Paciente</Link>
            <ul className={styles.ulSmenu}>
              <li className={styles.liSmenu}>
                <Link className={styles.linkSmenu} href="/paciente/listar">Listar</Link>
              </li>
              <li className={styles.liSmenu}>
                <Link className={styles.linkSmenu} href="/paciente/adicionar">Adicionar</Link>
              </li>
              <li className={styles.liSmenu}>
                <Link className={styles.linkSmenu} href="/paciente/editar">Editar</Link>
              </li>
              <li className={styles.liSmenu}>
                <Link className={styles.linkSmenu} href="/paciente/excluir">Excluir</Link>
              </li>
            </ul>
          </li>
          <li className={styles.li}><Link className={styles.link} href="/consulta">Consulta</Link>
            <ul className={styles.ulSmenu}>
              <li className={styles.liSmenu}>
                <Link className={styles.linkSmenu} href="/consulta/listar">Listar Consultas</Link>
              </li>
              <li className={styles.liSmenu}>
                <Link className={styles.linkSmenu} href="/consulta/adicionar">Agendar Consulta</Link>
              </li>
              <li className={styles.liSmenu}>
                <Link className={styles.linkSmenu} href="/consulta/editar">Editar Agendamento</Link>
              </li>
              <li className={styles.liSmenu}>
                <Link className={styles.linkSmenu} href="/consulta/excluir">Cancelar</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <nav className={styles.navDesktop}>
        <ul className={styles.ulDesktop}>
          <li className={styles.liDesktop}>
            <Link className={styles.linkDesktop} href="/">
              Home
            </Link>
          </li>
          <li className={styles.liDesktop}><Link className={styles.linkDesktop} href="/medico">Médico</Link>
            <ul className={styles.ulSmenuDesktop}>
              <li className={styles.liSmenuDesktop}>
                <Link className={styles.linkSmenuDesktop} href="/medico/listar">Listar</Link>
              </li>
              <li className={styles.liSmenuDesktop}>
                <Link className={styles.linkSmenuDesktop} href="/medico/adicionar">Adicionar</Link>
              </li>
              <li className={styles.liSmenuDesktop}>
                <Link className={styles.linkSmenuDesktop} href="/medico/editar">Editar</Link>
              </li>
              <li className={styles.liSmenuDesktop}>
                <Link className={styles.linkSmenuDesktop} href="/medico/excluir">Excluir</Link>
              </li>
            </ul>
          </li>
          <li className={styles.liDesktop}><Link className={styles.linkDesktop} href="/Paciente">Paciente</Link>
            <ul className={styles.ulSmenuDesktop}>
              <li className={styles.liSmenuDesktop}>
                <Link className={styles.linkSmenuDesktop} href="/paciente/listar">Listar</Link>
              </li>
              <li className={styles.liSmenuDesktop}>
                <Link className={styles.linkSmenuDesktop} href="/paciente/adicionar">Adicionar</Link>
              </li>
              <li className={styles.liSmenuDesktop}>
                <Link className={styles.linkSmenuDesktop} href="/paciente/editar">Editar</Link>
              </li>
              <li className={styles.liSmenuDesktop}>
                <Link className={styles.linkSmenuDesktop} href="/paciente/excluir">Excluir</Link>
              </li>
            </ul>
          </li>
          <li className={styles.liDesktop}><Link className={styles.linkDesktop} href="/consulta">Consulta</Link>
            <ul className={styles.ulSmenuDesktop}>
              <li className={styles.liSmenuDesktop}>
                <Link className={styles.linkSmenuDesktop} href="/consulta/listar">Listar Consultas</Link>
              </li>
              <li className={styles.liSmenuDesktop}>
                <Link className={styles.linkSmenuDesktop} href="/consulta/adicionar">Agendar Consulta</Link>
              </li>
              <li className={styles.liSmenuDesktop}>
                <Link className={styles.linkSmenuDesktop} href="/consulta/editar">Editar Agendamento</Link>
              </li>
              <li className={styles.liSmenuDesktop}>
                <Link className={styles.linkSmenuDesktop} href="/consulta/excluir">Cancelar</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}