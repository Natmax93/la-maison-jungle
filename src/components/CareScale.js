function handleClick(careType, value) {
    let type = careType === "light" ? "de lumière" : "d'arrosage";
    let quantite = "";

    switch (value) {
        case 1:
            quantite = "peu";
            break;
        case 2:
            quantite = "modérement";
            break;
        case 3:
            quantite = "beaucoup";
            break;
        default:
            break;
    }

    alert(`Cette plante requiert ${quantite} ${type}`);
}

function CareScale({ scaleValue, careType }) {
    const range = [1, 2, 3];
    const scaleType = careType === "light" ? "☀️" : "💧";

    return (
        <div onClick={() => handleClick(careType, scaleValue)}>
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? (
                    <span key={rangeElem.toString()}>{scaleType}</span>
                ) : null
            )}
        </div>
    );
}

export default CareScale;
