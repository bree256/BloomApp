import style from "./service.module.css";
import img from "./images/logo.png";
import img2 from "./images/headerwoman.png";
import img3 from "./images/braid icon 1.png";
import img4 from "./images/face.png";
import img5 from "./images/Hair main't.png";
import img6 from "./images/hands.png";
import img7 from "./images/lip.png";
import img8 from "./images/tattoo.png";
import img9 from "./images/wig.png";
import img10 from "./images/wigs icon 1.png";
import img31 from "./images/Star.png";
import img11 from "./images/first.png";
import img12 from "./images/second.png";
import img13 from "./images/third.png";
import img14 from "./images/fourth.png";
import imag15 from "./images/imag15.png";
import imag16 from "./images/imag16.png";
import imag17 from "./images/imag17.png";
import imag18 from "./images/imag18.png";
import imag19 from "./images/imag19.png";
import imag20 from "./images/imag20.png";
import imag21 from "./images/imag21.png";
import imag22 from "./images/imag22.png";
import imag23 from "./images/imag23.png";
import imag24 from "./images/imag24.png";
import imag25 from "./images/imag25.png";
import imag26 from "./images/imag26.png";
import imag27 from "./images/imag27.png";
import imag28 from "./images/imag28.png";
import imag29 from "./images/imag29.png";
import imag30 from "./images/imag30.png";
import { RiSearchLine, RiCloseFill } from "react-icons/ri";
import { useState, useEffect } from "react";

// first header for navigation
export const HairServicesHeader = () => {
  return (
    <header className={style.nav}>
      <nav>
        <div>
          <img src={img} alt="" />
        </div>
        <ul>
          <li>
            <a href="/#">Home</a>
          </li>
          <li>
            <a href="/#">Online booking</a>
          </li>
          <li>
            <label htmlFor="search">Service</label>
            <select name="text" id="">
              services
            </select>
          </li>
          <li>
            <a href="/#">Store</a>
          </li>
          <li>
            <a href="/#">About</a>
          </li>
          <li>
            <a href="/#">Blog</a>
          </li>
          <li>
            <a href="/#">Contact Us</a>
          </li>
        </ul>
        <img src={img2} alt="" />
      </nav>
    </header>
  );
};
// I used hooks to ensure functionality for the search input and icon
export const SecondHeader = () => {
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(-1);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleClose = () => {
    setSearch("");
    setSearchData([]);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp" && selectedItem > 0) {
      setSelectedItem((prev) => prev - 1);
    } else if (e.key === "ArrowDown" && selectedItem < searchData.length - 1) {
      setSelectedItem((prev) => prev + 1);
    } else if (e.key === "Enter" && selectedItem >= 0) {
      window.open(searchData[selectedItem].show.url);
    }
  };

  useEffect(() => {
    if (search !== "") {
      fetch(`http://api.tvmaze.com/search/shows?q=${search}`)
        .then((res) => res.json())
        .then((data) => setSearchData(data));
    }
  }, [search]);

  return (
    <div className={style.Header2}>
      <div className={style.imgDivs}>
        <img src={img5} alt="" />
        <p>Hair Care</p>
      </div>
      <div className={style.imgDivs}>
        <img src={img6} alt="" />
        <p>
          Natural <br /> Hair
        </p>
      </div>
      <div className={style.imgDivs}>
        <img src={img3} alt="" />
        <p>Braids</p>
      </div>
      <div className={style.imgDivs}>
        <img src={img10} alt="" />
        <p>
          Wigs n <br /> Weaves
        </p>
      </div>

      <div className={style.imgDivs}>
        <img src={img9} alt="" />
        <p>Hands & Feets</p>
      </div>
      <div className={style.imgDivs}>
        <img src={img8} alt="" />
        <p>
          Makeup <br /> Artist
        </p>
      </div>
      <div className={style.imgDivs}>
        <img src={img4} alt="" />
        <p>
          Tattoo and <br /> Piercings
        </p>
      </div>
      <div className={style.imgDivs}>
        <img src={img7} alt="" />
        <p>
          Spa and <br /> Massage
        </p>
      </div>

      {/* <div className={style.inputfield}>
        <input
          className={style.searchInput}
          type="text"
          placeholder="search"
          onChange={handleChange}
          value={search}
          onKeyDown={handleKeyDown}
        /> */}
      {/* <div className={style.search}>
          {search === "" ? (
            <RiSearchLine />
          ) : (
            <RiCloseFill onClick={handleClose} />
          )}
        </div>
        <div className={style.searchResult}>
          {searchData.map((data, index) => {
            return (
              <a
                href={data.show.url}
                key={index}
                target="blank"
                className={style.searchSuggestionLine}
              >
                {data.show.name}
              </a>
            );
          })}
        </div>
      </div> */}
    </div>
  );
};

export const Card = () => {
  const [showAllCards, setShowAllCards] = useState(false);
  // an array of object showing details of all of the card item
  const allCards = [
    {
      id: 1,
      name: "AfriTrim Barbers",
      imageSrc: img11,
      distance: "120metres near you",
      priceRange: "₦-₦₦",
      rating: 4.71,
    },
    {
      id: 2,
      name: "Amazzing  Salon",
      imageSrc: img12,
      distance: "520metres near you",
      priceRange: "₦-₦₦",
      rating: 4.21,
    },
    {
      id: 1,
      name: "Ultra Men  Salon",
      imageSrc: img13,
      distance: "750metres near you",
      priceRange: "₦-₦₦",
      rating: 4.81,
    },
    {
      id: 1,
      name: "The Mane Haven",
      imageSrc: img14,
      distance: "970metres near you",
      priceRange: "₦-₦₦",
      rating: 4.57,
    },
    {
      id: 1,
      name: "Triple D Hair Salon",
      imageSrc: imag15,
      distance: "120metres near you",
      priceRange: "₦-₦₦",
      rating: 4.71,
    },
    {
      id: 1,
      name: "AfroShear Lounge",
      imageSrc: imag16,
      distance: "520metres near you",
      priceRange: "₦-₦₦",
      rating: 4.21,
    },
    {
      id: 1,
      name: "Tribal Cuts  Salon",
      imageSrc: imag17,
      distance: "750metres near you",
      priceRange: "₦-₦₦",
      rating: 4.81,
    },
    {
      id: 1,
      name: "Napy Roots Salon",
      imageSrc: imag18,
      distance: "970metres near you",
      priceRange: "₦-₦₦",
      rating: 4.57,
    },
    {
      id: 1,
      name: "Sanko Style Salon",
      imageSrc: imag19,
      distance: "120metres near you",
      priceRange: "₦-₦₦",
      rating: 4.71,
    },
    {
      id: 1,
      name: "Salon",
      imageSrc: imag20,
      distance: "120metres near you",
      priceRange: "₦-₦₦",
      rating: 4.71,
    },
    {
      id: 1,
      name: "Kente Cuts  Salon",
      imageSrc: imag21,
      distance: "520metres near you",
      priceRange: "₦-₦₦",
      rating: 4.71,
    },
    {
      id: 1,
      name: "Afrocentric Salon",
      imageSrc: imag22,
      distance: "970metres near you",
      priceRange: "₦-₦₦",
      rating: 4.71,
    },
    {
      id: 1,
      name: "Zambezi Barbers",
      imageSrc: imag23,
      distance: "80metres near you",
      priceRange: "₦-₦₦",
      rating: 4.71,
    },
    {
      id: 1,
      name: "Mzansiz Studios",
      imageSrc: imag24,
      distance: "120metres near you",
      priceRange: "₦-₦₦",
      rating: 4.71,
    },
    {
      id: 1,
      name: "Dashiki  Barbers",
      imageSrc: imag25,
      distance: "120metres near you",
      priceRange: "₦-₦₦",
      rating: 4.71,
    },
    {
      id: 1,
      name: "Ankarra Clippers",
      imageSrc: imag26,
      distance: "100metres near you",
      priceRange: "₦-₦₦",
      rating: 4.71,
    },
    {
      id: 1,
      name: "Masai Edge  Salon",
      imageSrc: imag27,
      distance: "40metres near you",
      priceRange: "₦-₦₦",
      rating: 4.71,
    },
    {
      id: 1,
      name: "AfroPulse Barbers",
      imageSrc: imag28,
      distance: "820metres near you",
      priceRange: "₦-₦₦",
      rating: 4.61,
    },
    {
      id: 1,
      name: "Shantiizz Blades",
      imageSrc: imag29,
      distance: "120metres near you",
      priceRange: "₦-₦₦",
      rating: 4.31,
    },
    {
      id: 1,
      name: "SunStyle Barbers",
      imageSrc: imag30,
      distance: "970metres near you",
      priceRange: "₦-₦₦",
      rating: 4.57,
    },
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
          <div className={style.card}>
            <img src={card.imageSrc} alt="" />
            <h5>{card.name}</h5>
            <p>{card.distance}</p>
            <p>{card.priceRange}</p>
            <div className={style.star}>
              <img src={img31} alt="" /> <span>{card.rating}</span>
            </div>
          </div>
        ))}
        {/* use map function to show all cards */}
        {showAllCards &&
          allCards.slice(12).map((card) => (
            <div className={style.card}>
              <img src={card.imageSrc} alt="" />
              <h5>{card.name}</h5>
              <p>{card.distance}</p>
              <p>{card.priceRange}</p>
              <div className={style.star}>
                <img src={img31} alt="" /> <span>{card.rating}</span>
              </div>
            </div>
          ))}
      </div>{" "}
      <br />
      <p className={style.texttag}>
        Continue exploring Hair Cut businesses
      </p>{" "}
      <br /> <br />
      {allCards.length > 12 && (
        <button className={style.buttonCards} onClick={handleShowMore}>
          {showAllCards ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
};
