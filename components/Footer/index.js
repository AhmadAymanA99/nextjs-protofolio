import styles from "./Footer.module.css";
import { FaLinkedin, FaFacebook, FaGithub, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.contact}>
                <h3>Ahmad Ayman El-Saeid</h3>
                <p>Cairo, Egypt</p>
                <p>
                    Phone: <a href="tel:01023874473">01023874473</a> | <a href="tel:01121805624">01121805624</a>
                </p>
                <p>
                    Email: <a href="mailto:ahmadaymana99@gmail.com">ahmadaymana99@gmail.com</a>
                </p>
            </div>
            <div className={styles.links}>
                <a href="https://linkedin.com/in/ahmadaymana99" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/AhmadAymanA99" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="mailto:ahmadaymana99@gmail.com">
                    <FaEnvelope />
                </a>
                <a href="https://www.facebook.com/AhmadAyman.A99/" target="_blank" rel="noopener noreferrer">
                    <FaFacebook />
                </a>
                <a href="https://x.com/A7medAyman99" target="_blank" rel="noopener noreferrer">
                    <FaXTwitter />
                </a>
            </div>
            <div className={styles.objective}>
                <p>
                    Dedicated and experienced Software Engineer specializing in front-end development with a strong background in business management and delivery management applications. Proficient in React.js, JavaScript, and .NET Core, with a focus on scalability, usability,
                    and performance. Seeking opportunities to leverage expertise in a dynamic and collaborative environment.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
