import { plantList } from "../datas/plantList";
import PlantItem from "./PlantItem";
import Categories from "./Categories";
import "../styles/ShoppingList.css";
import { useState } from "react";

function ShoppingList({ cart, updateCart }) {
    const allCategories = plantList.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    );

    const [categories, updateCategories] = useState(allCategories);

    function addToCart(name, price) {
        const currentPlantSaved = cart.find((plant) => plant.name === name);
        if (currentPlantSaved) {
            const cartFilteredCurrentPlant = cart.filter(
                (plant) => plant.name !== name
            );
            updateCart([
                ...cartFilteredCurrentPlant,
                { name, price, amount: currentPlantSaved.amount + 1 },
            ]);
        } else {
            updateCart([...cart, { name, price, amount: 1 }]);
        }
    }

    return (
        <div className="lmj-shopping-list">
            <Categories
                allCategories={allCategories}
                categories={categories}
                updateCategories={updateCategories}
            />
            <ul className="lmj-plant-list">
                {plantList.map(
                    ({ id, cover, name, water, light, price, category }) => {
                        if (categories.includes(category)) {
                            return (<div key={id}>
                                <PlantItem
                                    cover={cover}
                                    name={name}
                                    water={water}
                                    light={light}
                                    price={price}
                                />
                                <button onClick={() => addToCart(name, price)}>
                                    Ajouter
                                </button>
                            </div>);
                        }
                    }
                )}
            </ul>
        </div>
    );
}

export default ShoppingList;
