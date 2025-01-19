import { useEffect, useState } from "react";
import Card from "./Card";


// Card list component here:
function CardList() {
    // using useState hook to store an empty array of type Card and a function that will update the cards array:
    const [cardArray, setCards] = useState<Card[]>([]);

    
    //  useEffect hook here:
    useEffect(() => {
        // passing in the endpoint to fetch request:
        fetch(`https://api.magicthegathering.io/v1/cards`)
            // converting response into json:
            .then(response => {
                if(!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                return setCards(data.cards)
            })
            .catch((error) => console.error('Failed to get resposne', error));
    }, []);

    return(
       <ul>
            <Card cards={ cardArray } /> 
       </ul>
    );
};

export default CardList;