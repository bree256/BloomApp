import style from "./Braids.module.css"
import img31 from "./images/Star.png"
import img11 from "./images/img11.png"
import img12 from "./images/img12.png"
import img13 from "./images/img13.png"
import img14 from "./images/img14.png"
import imag15 from "./images/imag15.png"
import imag16 from "./images/imag16.png"
import imag17 from "./images/imag17.png"
import imag18 from "./images/imag18.png"
import imag19 from "./images/imag19.png"
import imag20 from "./images/imag20.png"
import imag21 from "./images/imag21.png"
import imag22 from "./images/imag22.png"
import imag23 from "./images/imag23.png"
import imag24 from "./images/imag24.png"
import imag25 from "./images/imag25.png"
import imag26 from "./images/imag26.png"
import imag27 from "./images/imag27.png"
import imag28 from "./images/imag28.png"
import imag29 from "./images/imag29.png"
import imag30 from "./images/imag30.png"
import React, { useState } from 'react';



export const BraidsCard = () =>{
    const [showAllCards, setShowAllCards] = useState(false);
  const allCards = [
    { id: 1, name: 'Kinks & Curlys', imageSrc: img11, distance: '20metres near you', priceRange: '₦-₦₦', rating: 4.71 },
    { id: 2, name: 'Nappy Roots ', imageSrc: img12, distance: '50metres near you', priceRange: '₦-₦₦', rating: 4.21 },
    { id: 1, name: 'Afro sence Salon', imageSrc: img13, distance: '97metres near you', priceRange: '₦-₦₦', rating: 4.81 },
    { id: 1, name: 'Curly  Attractions', imageSrc: img14, distance: '970metres near you', priceRange: '₦-₦₦', rating: 4.57 },
    { id: 1, name: 'Triple D Hair Salon', imageSrc: imag15, distance: '990metres near you', priceRange: '₦-₦₦', rating: 4.71 },
    { id: 1, name: 'Roots Revs Salon', imageSrc: imag16, distance: '1.25km near you', priceRange: '₦-₦₦', rating: 4.21 },
    { id: 1, name: 'Naturalista  Salon', imageSrc: imag17, distance: '1.27Km near you', priceRange: '₦-₦₦', rating: 4.81 },
    { id: 1, name: 'Napy Roots Salon', imageSrc: imag18, distance: '1.3Km near you', priceRange: '₦-₦₦', rating: 4.57},
    { id: 1, name: 'NaturaLock Salon', imageSrc: imag19, distance: '120metres near you', priceRange: '₦-₦₦', rating: 4.71 },
    { id: 1, name: 'Afro Fusion  Salon', imageSrc: imag20, distance: '1.4Km near you', priceRange: '₦-₦₦', rating: 4.71 },
    { id: 1, name: 'Kinky Chic Studio', imageSrc: imag21, distance: '1.5Km near you', priceRange: '₦-₦₦', rating: 4.71 },
    { id: 1, name: 'Afrocentric Salon', imageSrc: imag22, distance: '2.8Km near you', priceRange: '₦-₦₦', rating: 4.71 },
    { id: 1, name: 'Cornrow Couture', imageSrc: imag23, distance: '3.1Km near you', priceRange: '₦-₦₦', rating: 4.71 },
    { id: 1, name: 'Mzansiz Studios', imageSrc: imag24, distance: '3.96Km near you', priceRange: '₦-₦₦', rating: 4.71 },
    { id: 1, name: 'Frolicious Hairs', imageSrc: imag25, distance: '4.32Km near you', priceRange: '₦-₦₦', rating: 4.71 },
    { id: 1, name: 'CurlyQueen Salon', imageSrc: imag26, distance: '5.9Km near you', priceRange: '₦-₦₦', rating: 4.71 },
    { id: 1, name: 'Roots & Rhythms ', imageSrc: imag27, distance: '11 near you', priceRange: '₦-₦₦', rating: 4.71 },
    { id: 1, name: 'AfriCrown Salon', imageSrc: imag28, distance: '15Km near you', priceRange: '₦-₦₦', rating: 4.61 },
    { id: 1, name: 'Masai Edge  Salon', imageSrc: imag29, distance: '21Km near you', priceRange: '₦-₦₦', rating: 4.31 },
    { id: 1, name: 'SunStyle Studio', imageSrc: imag30, distance: '33Km near you', priceRange: '₦-₦₦', rating: 4.57 },
  ];

   // Initially display 12 cards
   const initialCards = allCards.slice(0, 12);
   

   // Function to toggle visibility of additional cards
   const handleShowMore = () => {
     setShowAllCards(!showAllCards); // Toggle state on button click
   };
 
// mapping throug all of the cards begind here
return (
   <div className={style.cardsContainer}>
     <div className={style.cards}>
       {/* Display the first 12 cards initially */}
       {initialCards.map((card) => (
         <div className={style.card} key={card.id}>
           <img src={card.imageSrc} alt="" />
           <h5>{card.name}</h5>
           <p>{card.distance}</p>
           <p>{card.priceRange}</p>
           <div className={style.star} >
             {/* <CiStar /> <span>{card.rating}</span> */}
             <img src={img31} alt="" /> <span>{card.rating}</span>
           </div>
         </div>
       ))}

       {showAllCards && (
         allCards.slice(12).map((card) => (
           <div className={style.card} key={card.id}>
             <img src={card.imageSrc} alt="" />
             <h5>{card.name}</h5>
             <p>{card.distance}</p>
             <p>{card.priceRange}</p>
             <div className={style.star} >
               <img src={img31} alt="" /> <span>{card.rating}</span>
             </div>
           </div>
         ))
       )}
     </div> <br />
      <p className={style.texttag}>Continue exploring Hair Cut  businesses</p>  <br /> <br />
     {allCards.length > 12 && (
       
       <button className={style.buttonCards} onClick={handleShowMore}>
         {showAllCards ? 'Show Less' : 'Show More'}
       </button>
     )}
   </div>
 );
}