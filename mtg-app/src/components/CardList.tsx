import { useEffect, useState } from "react";
import Card from "./Card";

interface Card {
    name: string;
    colorsIdentiry: string[];
    subtypes: string[];
    imageUrl: string;
};

function CardList() {
    const [cardArray, setCards] = useState<Card[]>([]);

    // useEffect hook here to bring in the Scryfall api:
    useEffect(() => {
        fetch(`https://api.magicthegathering.io/v1/cards`)
            // converting response into json:
            .then(response => response.json())
            .then(data => setCards(data))
            .then(data => console.log(data))
            .catch((error) => console.error('Failed to get resposne', error));
    }, []);

    return(
       <ul>
            {cardArray.map((card) => (
                <li> 
                    <div>
                        <img src={ card.imageUrl } alt={ card.name } />
                    </div> 
                </li>
            ))}
       </ul>
    );
};

export default CardList;