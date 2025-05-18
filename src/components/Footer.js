import { useState } from "react";
import "../styles/Footer.css";

function checkEmail(email) {
    if (email.includes("@") === false) {
        alert("Attention il n'y pas d'@, ceci n'est pas une adresse valide. 😥");
    }
}

function Footer() {
    const [inputValue, setInputValue] = useState("");

    return (
        <footer className="lmj-footer">
            <div className="lmj-footer-elem">
                Pour les passionné·e·s de plantes 🌿🌱🌵
            </div>
            <label htmlFor="email" className="lmj-footer-elem">
                Laissez-nous votre mail :
            </label>
            <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onBlur={() => checkEmail(inputValue)}
                type="email"
                name="email"
                id="email"
                className="lmj-footer-elem"
            />
        </footer>
    );
}

export default Footer;
