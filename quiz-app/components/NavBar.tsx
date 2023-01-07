import { useState } from 'react';
import styles from "./NavBar.module.css"

import { NavLink } from "react-router-dom";

export function NavBar() {
    const [hamOpen, setHamOpen] = useState(false);

    //TODO: update with better type
    const navLinkClickHandler = ({ currentTarget }: any) => {

        currentTarget.classList.add("active")
        // const tag: HTMLElement = e.currentTarget
        // if (!filter.includes(tag)) {
        //     setFilter([...filter, tag]);
        // } else {
        //     const filteredArray = filter.filter((item) => item !== tag);
        //     setFilter([...filteredArray]);
        // }
    };

    const hamburgerMenuToggle = () => {
        setHamOpen(!hamOpen)
    }
    const closeMenu = () => {
        setHamOpen(false)
      }

    return (
        <div className={styles.wrapper}>
            <div className={styles.logoWrapper}>
                <a href="/" className={styles.logo}>
                     geis
                </a>
            </div>
            <div className={styles.nav}>
                <NavLink to="projects" className={({ isActive }) => isActive ? styles.navLinkActive : styles.navLink}>projects</NavLink>
                <NavLink to="music" className={({ isActive }) => isActive ? styles.navLinkActive : styles.navLink}>music</NavLink>
                <NavLink to="contact" className={({ isActive }) => isActive ? styles.navLinkActive : styles.navLink}>contact</NavLink>
            </div>
            <div className={styles.hamburgerWrapper}>
                <div className={styles.hamburgerBox} onClick={hamburgerMenuToggle}>
                    <div className={`${hamOpen ? styles.hamburgerLineOne : ""}`}></div>
                    <div className={`${hamOpen ? styles.hamburgerLineTwo : ""}`}></div>
                    <div className={`${hamOpen ? styles.hamburgerLineThree : ""}`}></div>
                </div>
                <div className={`${styles.hamburgerMenu} ${hamOpen ? styles.hamburgerMenuActive : ""}`}>
                    <NavLink 
                        to="projects" 
                        className={({ isActive }) => isActive ? styles.hamburgerLinkActive : styles.hamburgerLink} 
                        onClick={() => closeMenu()}>projects</NavLink>
                    <NavLink 
                        to="music" 
                        className={({ isActive }) => isActive ? styles.hamburgerLinkActive : styles.hamburgerLink} 
                        onClick={() => closeMenu()}>music</NavLink>
                    <NavLink 
                        to="contact" 
                        className={({ isActive }) => isActive ? styles.hamburgerLinkActive : styles.hamburgerLink} 
                        onClick={() => closeMenu()}>contact</NavLink>
                </div>
            </div>
        </div>
    )
}