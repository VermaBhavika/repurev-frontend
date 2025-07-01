"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Cookies from "js-cookie";
import avatar from "../../assets/images/user.svg";
import styles from "../../styles/header.module.scss";
import Heading from "../ui/heading";

const Header = () => {
    const router = useRouter();
    const [isProfileOpen, setProfileOpen] = useState(false);

    const handleLogout = () => {
        Cookies.remove("is_logged_in");
        Cookies.remove("user_email");
        Cookies.remove("user_name");

        router.push("/login");
    };

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
                    {isProfileOpen && (
                        <div className={styles.dropdown}>
                            <ul>
                                <li>
                                    <div className={styles.profile}>
                                        <Image src={avatar} alt="avatar icon" width={1} height={1} />
                                    </div>
                                    <div className={styles.profileInfo}>
                                        <span>{Cookies.get("user_name") || "Guest"}</span>
                                        <small>Admin</small>
                                    </div>
                                </li>
                                <li onClick={handleLogout} style={{ cursor: "pointer" }}>
                                    Logout
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
