"use client"
import Image from "next/image";
import { useState } from "react";
import avatar from "../../assets/images/user.svg";
import styles from "../../styles/header.module.scss";
import Heading from "../ui/heading";

const Header = () => {
    const [isProfileOpen, setProfileOpen] = useState(false);
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.navbar}>
                    <div className={styles.logo}>
                        <Heading tagName="h3" headingText="Repurev" />
                    </div>
                    <div className={styles.profile} onClick={() => setProfileOpen(!isProfileOpen)}>
                        <Image src={avatar} alt="avatar icon" width={1} height={1} />
                    </div>
                    {isProfileOpen &&
                        <div className={styles.dropdown}>
                            <ul>
                                <li>
                                    <div className={styles.profile}>
                                        <Image src={avatar} alt="avatar icon" width={1} height={1} />
                                    </div>
                                    <div className={styles.profileInfo}>
                                        <span>John Doe</span>
                                        <small>Admin</small>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    }
                </div>
            </div>
        </header>
    )
}

export default Header;