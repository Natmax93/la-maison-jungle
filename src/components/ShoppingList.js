import { plantList } from '../datas/plantList';
import '../styles/ShoppingList.css';

let uniqueCategories = [];

for (let plant of plantList) {
	if (uniqueCategories.includes(plant.category) === false) {
		uniqueCategories.push(plant.category);
	}
}

function ShoppingList() {
	return (<div>
		<ul>
			{uniqueCategories.map((category, index) => {
				return <li key={`${category}-${index}`}>{category}</li>;
			})}
		</ul>
		<ul className='lmj-plant-list'>
            {plantList.map((plant, index) => (
                <li key={`${plant.id}`} className='lmj-plant-item'>
					{ plant.name } {plant.isSpecialOffer ? <div>Soldes</div> : null}
				</li>
			))}
        </ul>
	</div>);
}

export default ShoppingList;
