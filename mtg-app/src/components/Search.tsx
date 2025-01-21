// import { useState, useEffect } from "react";

// interface Card {
//     name: string;
//     colorsIdentity: string[];
//     subtypes: string[];
//     imageUrl: string;
// };

// const Search = () => {
    
//     const [_, setCards] = useState<Card[]>([]);
//     //  useEffect hook here:
//     const searchCards = () => {
//         useEffect(() => {
//         // passing in the endpoint to fetch request:
//         fetch(`https://api.magicthegathering.io/v1/cards?name=${ query }`)
//             // converting response into json:
//             .then(response => {
//                 if(!response.ok) {
//                     throw new Error(`HTTP error! status: ${response.status}`);
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 return setCards(data.cards || [])
//             })
//             .catch((error) => console.error('Failed to get response', error));
//         }, []);



//     };
//             // XML here:
//             return(
//                 <>
//                     <input 
//                     type="text" 
//                     placeholder="type in a card name"
//                     value={query}
//                     onChange={ (e) => setQuery(e.target.value)  }
//                     />
//                     <button onClick={ searchCards }>Search</button>
//                 </>
//             )
// };

// export default Search;