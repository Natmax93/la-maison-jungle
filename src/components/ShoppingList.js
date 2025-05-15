import { plantList } from "../datas/plantList";
import "../styles/ShoppingList.css";
import PlantItem from "./PlantItem";

let uniqueCategories = [];

for (let plant of plantList) {
    if (uniqueCategories.includes(plant.category) === false) {
        uniqueCategories.push(plant.category);
    }
}

function ShoppingList() {
    return (
        <div>
            <ul>
                {uniqueCategories.map((category, index) => {
                    return <li key={`${category}-${index}`}>{category}</li>;
                })}
            </ul>
            <ul className="lmj-plant-list">
                {plantList.map(({id, cover, name, water, light}) => (
                        <PlantItem
                        key={id}
                        name={name}
                        cover={cover}
                        id={id}
                        light={light}
                        water={water}
                        />
                ))}
            </ul>
        </div>
    );
}

export default ShoppingList;
