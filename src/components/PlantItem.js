import "../styles/PlantItem.css";
import CareScale from "./CareScale";

function PlantItem({ name, cover, id, light, water }) {
    return (
        <li className="lmj-plant-item">
            <img
                src={cover}
                alt="Monstera Plant"
                className="lmj-plant-item-cover"
            />
            {name}
            <CareScale careType="light" scaleValue={light} />
            <CareScale careType="water" scaleValue={water} />
        </li>
    );
}

export default PlantItem;
