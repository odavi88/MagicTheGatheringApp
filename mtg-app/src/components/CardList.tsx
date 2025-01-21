import { useState } from "react";
import Card from "./Card";
import './styles.css';


// Card list component here:
function CardList() {
    // using useState hook to store an empty array of type Card and a function that will update the cards array:
    const [cardArray, setCards] = useState<Card[]>([]);
    const [query, setQuery] = useState('');

    const searchCards = () => {
        // passing in the endpoint to fetch request:
        fetch(`https://api.magicthegathering.io/v1/cards?name=${ query }`)
            // converting response into json:
            .then(response => {
                if(!response.ok) {
                    throw new Error(`HTTP error! status: ${ response.status }`);
                }
                return response.json();
            })
            .then(data => {
                return setCards(data.cards || [])
            })
            .catch((error) => console.error('Failed to get response', error));
        };

        const clearCards = () => {
            setCards([]);
        };

    return(
        <>
        <div className="input-component">
            <input 
                type="text" 
                placeholder="Card name..."
                value={ query }
                onChange={ (e) => setQuery(e.target.value) }
            />

            <button onClick={ searchCards }> Search Cards </button>
            <button onClick={ clearCards } >Clear Cards</button>
        </div>
            

            <p>{cardArray.length}</p>

            <div className="card-list">
                <Card cards={ cardArray } /> 
            </div>
        </>
       
    );
};

export default CardList;