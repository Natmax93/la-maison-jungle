function Categories({ allCategories, categories, updateCategories }) {
    function handleChange(e) {
        const selected = e.target.value;
        updateCategories([selected]); // si tu veux en faire plus
    }

    return (
        <div>
            <label htmlFor="categories">Filtrer par catégories</label>
            <br />
            <select name="categories" id="categories" onChange={handleChange}>
                <option value="">-- Choisir une catégorie --</option>
                {allCategories.map((cat) => (
                    <option key={cat} value={cat}>
                        {cat}
                    </option>
                ))}
            </select>
            <br />
            <button onClick={() => updateCategories(allCategories)}>Réinitialiser</button>
        </div>
    );
}

export default Categories;
