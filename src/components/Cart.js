import { useState, useEffect } from "react";
import "../styles/Cart.css";
import { plantList } from "../datas/plantList";

function Cart({ cart, updateCart }) {
    const [isOpen, setIsOpen] = useState(true);
    const total = cart.reduce(
        (acc, plantType) => acc + plantType.amount * plantType.price,
        0
    );

    useEffect(() => {
        document.title = `LMJ: ${total}€ d'achats`;
    }, [total]);

    // Sauvegarde du panier à chaque modification
    useEffect(() => {
        // Ajout des items
        for (let item of cart) {
            localStorage.setItem(`${item.name}`, JSON.stringify(item));
        }
    }, [cart]);

    // Récupération du panier au premier chargement de la page
    useEffect(() => {
        const savedItems = [];
        for (let { name } of plantList) {
            const item = localStorage.getItem(`${name}`);
            if (item) {
                savedItems.push(JSON.parse(item));
            }
        }
        updateCart(savedItems);
    }, []);

    return isOpen ? (
        <div className="lmj-cart">
            <button
                className="lmj-cart-toggle-button"
                onClick={() => setIsOpen(false)}
            >
                Fermer
            </button>
            {cart.length > 0 ? (
                <div>
                    <h2>Panier</h2>
                    <ul>
                        {cart.map(({ name, price, amount }, index) => (
                            <div key={`${name}-${index}`}>
                                {name} {price}€ x {amount}
                            </div>
                        ))}
                    </ul>
                    <h3>Total :{total}€</h3>
                    <button
                        onClick={() => {
                            updateCart([]);
                            localStorage.clear();
                        }}
                    >
                        Vider le panier
                    </button>
                </div>
            ) : (
                <div>Votre panier est vide</div>
            )}
        </div>
    ) : (
        <div className="lmj-cart-closed">
            <button
                className="lmj-cart-toggle-button"
                onClick={() => setIsOpen(true)}
            >
                Ouvrir le Panier
            </button>
        </div>
    );
}

export default Cart;
