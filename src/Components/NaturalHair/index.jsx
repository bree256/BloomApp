import style from "./naturalhair.module.css"
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
import {Link} from 'react-router-dom'



export const NaturalHairCard = () => {

    const [showAllCards, setShowAllCards] = useState(false);
    const allCards = [
      { id: 1, name: 'AfriTrim Barbers', imageSrc: img11, distance: '120metres near you', priceRange: '₦-₦₦', rating: 4.71 },
      { id: 2, name: 'Amazzing  Salon', imageSrc: img12, distance: '520metres near you', priceRange: '₦-₦₦', rating: 4.21 },
      { id: 1, name: 'Ultra Men  Salon', imageSrc: img13, distance: '750metres near you', priceRange: '₦-₦₦', rating: 4.81 },
      { id: 1, name: 'The Mane Haven', imageSrc: img14, distance: '970metres near you', priceRange: '₦-₦₦', rating: 4.57 },
      { id: 1, name: 'Triple D Hair Salon', imageSrc: imag15, distance: '120metres near you', priceRange: '₦-₦₦', rating: 4.71 },
      { id: 1, name: 'AfroShear Lounge', imageSrc: imag16, distance: '520metres near you', priceRange: '₦-₦₦', rating: 4.21 },
      { id: 1, name: 'Tribal Cuts  Salon', imageSrc: imag17, distance: '750metres near you', priceRange: '₦-₦₦', rating: 4.81 },
      { id: 1, name: 'Napy Roots Salon', imageSrc: imag18, distance: '970metres near you', priceRange: '₦-₦₦', rating: 4.57},
      { id: 1, name: 'Sanko Style Salon', imageSrc: imag19, distance: '120metres near you', priceRange: '₦-₦₦', rating: 4.71 },
      { id: 1, name: 'Salon', imageSrc: imag20, distance: '120metres near you', priceRange: '₦-₦₦', rating: 4.71 },
      { id: 1, name: 'Kente Cuts  Salon', imageSrc: imag21, distance: '520metres near you', priceRange: '₦-₦₦', rating: 4.71 },
      { id: 1, name: 'Afrocentric Salon', imageSrc: imag22, distance: '970metres near you', priceRange: '₦-₦₦', rating: 4.71 },
      { id: 1, name: 'Zambezi Barbers', imageSrc: imag23, distance: '80metres near you', priceRange: '₦-₦₦', rating: 4.71 },
      { id: 1, name: 'Mzansiz Studios', imageSrc: imag24, distance: '120metres near you', priceRange: '₦-₦₦', rating: 4.71 },
      { id: 1, name: 'Dashiki  Barbers', imageSrc: imag25, distance: '120metres near you', priceRange: '₦-₦₦', rating: 4.71 },
      { id: 1, name: 'Ankarra Clippers', imageSrc: imag26, distance: '100metres near you', priceRange: '₦-₦₦', rating: 4.71 },
      { id: 1, name: 'Masai Edge  Salon', imageSrc: imag27, distance: '40metres near you', priceRange: '₦-₦₦', rating: 4.71 },
      { id: 1, name: 'AfroPulse Barbers', imageSrc: imag28, distance: '820metres near you', priceRange: '₦-₦₦', rating: 4.61 },
      { id: 1, name: 'Shantiizz Blades', imageSrc: imag29, distance: '120metres near you', priceRange: '₦-₦₦', rating: 4.31 },
      { id: 1, name: 'SunStyle Barbers', imageSrc: imag30, distance: '970metres near you', priceRange: '₦-₦₦', rating: 4.57 },
    ];
  
     // Initially display 12 cards
     const initialCards = allCards.slice(0, 12);
     
  
     // Function to toggle visibility of additional cards
     const handleShowMore = () => {
       setShowAllCards(!showAllCards); // Toggle state on button click
     };
   
  // mapping through all of the cards begins here

  return (
    <div className={style.cardsContainer}>
      <div className={style.cards}>
        {/* Display the first 12 cards initially */}
        {initialCards.map((card) => (
          <div className={style.card} key={card.id}>
            <Link to={`/NaturalHairBusiness/${card.id}`}>
            <img src={card.imageSrc} alt="" />
            <h5>{card.name}</h5>
            <p>{card.distance}</p>
            <p>{card.priceRange}</p>
            <div className={style.star} >
              {/* <CiStar /> <span>{card.rating}</span> */}
              <img src={img31} alt="" /> <span>{card.rating}</span>
            </div>
            </Link>
          </div>
        ))}
 
        {showAllCards && (
          allCards.slice(12).map((card) => (
            <div className={style.card} key={card.id}>
               <Link to={`/NaturalHairBusiness/${card.id}`}>
              <img src={card.imageSrc} alt="" />
              <h5>{card.name}</h5>
              <p>{card.distance}</p>
              <p>{card.priceRange}</p>
              <div className={style.star} >
                <img src={img31} alt="" /> <span>{card.rating}</span>
              </div>
              </Link>
              
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