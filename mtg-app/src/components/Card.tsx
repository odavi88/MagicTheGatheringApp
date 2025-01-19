// This should be where the api call is happening

interface Card {
    name: string;
    colorsIdentity: string[];
    subtypes: string[];
    imageUrl: string;
};

interface CardListProps {
    cards: Card[]
}

function Card({ cards }: CardListProps) {
    return(
        <>
            {cards.map((card, index) => (
               <div key={index}>
                    <div>
                        <div> <img src={card.imageUrl} alt={card.name}/> </div>
                        <h2>{card.name}</h2>
                    </div>
                </div> 
            ))}
        </>
    );
};

export default Card;