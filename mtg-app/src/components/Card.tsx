// This should be where the api call is happening

interface Card {
    name: string;
    colorsIdentity: string[];
    subtypes: string[];
    setName: string;
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
                    <div className="card-container">
                        <div> <img src={!card.imageUrl ? `https://i.imgur.com/LdOBU1I.jpg` : card.imageUrl} height={375} width={250} alt={card.name}/> </div>
                        <div className="card-info">
                            <h3>{card.name}</h3>
                            <p>{ card.setName }</p>
                        </div>
                    </div>
                </div> 
            ))}
        </>
    );
};

export default Card;