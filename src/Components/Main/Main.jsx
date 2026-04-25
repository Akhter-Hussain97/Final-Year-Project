import React from "react";
import "./main.css";
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();
import { HiOutlineClipboardCheck } from "react-icons/hi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import img1 from '../../Assets/img1.jpg';
import img2 from '../../Assets/img2.jpg';
import img3 from '../../Assets/img3.jpg';
import img4 from '../../Assets/img4.jpg';
import img5 from '../../Assets/img5.jpg';
import img6 from '../../Assets/img6.jpg';
import img7 from '../../Assets/img7.jpg';
import img8 from '../../Assets/img8.jpg';
import img9  from '../../Assets/img9.jpeg';
const Data=[
    {
        id:1,
        imgSrc:img1,
        destTitle:'Bora Bora',
        location:'New Zeeland',
        grade:'CULTURAL RELEX',
        fees:'$700',
        description:'The opitome of romance, Bora Bora is one of the best travel destinctions in the world. This place is known for its luxurious stays and adventurous activities.'
    },
     {
        id:2,
        imgSrc:img2,
        destTitle:'Machu Picchu',
        location:'Peru',
        grade:'CULTURAL RELEX',
        fees:'$600',
        description:'Machu Picchu a World Heritage Site, describing it as "a masterpiece of art, urbanism, architecture and engineering" and "a unique testimony" of the Inca civilization, with the inscription covering both the archaeological complex and its surrounding landscape'
    },
      {
        id:3,
        imgSrc:img3,
        destTitle:'Great Barrier Reef',  
        location:'Austraila',
        grade:'CULTURAL RELEX',
        fees:'$700',
        description:'The world largest coral reef system, located off the coast of Queensland, Australia, and can be seen from space. It is a massive and complex structure built by billions of tiny coral polyps and is home to an incredible diversity of marine life'
    },
      {
        id:4,
        imgSrc:img4,
        destTitle:'Cappadocia',  
        location:'Turkey',
        grade:'CULTURAL RELEX',
        fees:'$800',
        description:'It is an ancient region in central Turkey known for its unique "fairy chimney" rock formations, cave dwellings, and historic underground cities. This landscape was formed by volcanic eruptions and shaped by millions of years of erosion from wind and water.'
    },
      {
        id:5,
        imgSrc:img5,
        destTitle:'Cappadocia',  
        location:'Turkey',
        grade:'CULTURAL RELEX',
        fees:'$1100',
        description:'Guanajuato is a colorful, historic city in central Mexico, known as a UNESCO World Heritage site for its colonial-era architecture and former silver mining wealth. It is famous for its winding alleyways, vibrant buildings, and location nestled in a mountainous valley. '
    },
        {
        id:6,
        imgSrc:img6,
        destTitle:'Cinque Terre',  
        location:'Italy',
        grade:'CULTURAL RELEX',
        fees:'$840',
        description:' Cinque Terre is a rugged coastal area in Italy’s Liguria region, famous for its five cliffside villages: Monterosso al Mare, Vernazza, Corniglia, Manarola, and Riomaggiore. This UNESCO World Heritage site is known for its dramatic scenery, terraced vineyards, and vibrant, colorful houses built into steep cliffs overlooking the Ligurian Sea'
    }, 
         {
        id:7,
        imgSrc:img7,
        destTitle:'Angkor Wat',  
        location:'Cambodia',
        grade:'CULTURAL RELEX',
        fees:'$840',
        description:'Angkor Wat is a massive Hindu-Buddhist temple complex in Cambodia, renowned as the largest religious monument in the world. Built in the 12th century by King Suryavarman II, it was initially a Hindu temple dedicated to Vishnu but later became a Buddhist site. '
    }, 
         {
        id:8,
        imgSrc:img8,
        destTitle:'Taj Mahal',  
        location:'India',
        grade:'CULTURAL RELEX',
        fees:'$990',
        description:'The Taj Mahal is a white marble mausoleum in Agra, India, built by Mughal emperor Shah Jahan for his wife, Mumtaz Mahal, who died in 1631. Considered a masterpiece of Mughal architecture, it is a UNESCO World Heritage site famous for its symmetry.'
         },
        {
        id:9,
        imgSrc:img9,
        destTitle:'Famous House',  
        location:'Pakistan',
        grade:'CULTURAL RELEX',
        fees:'$1000',
        description:'The Famous House is a Balti mausoleum in Khaplu barah Valley, Skardu, built by local and is also shows its culture, Mumtaz Mahal, in all over the world people are visiting in all over the world here.'
         },
]  
const Main=()=>{
    return(
        <section className="main container section">
           <div className="secTitle">
            <h1 className="title">Most Visited destination</h1>
           </div>
           <div className="secContent grid">
           {Data.map(({id, imgSrc, destTitle, location, grade, fees, description})=>{
                    return (
                        <div key={id} className="singleDestination">
                          <div className="imageDiv">
                            <img src={imgSrc} alt={destTitle}/>
                          </div>
                          <div className="cardInfo">
                            <h4 className="destTitle">{destTitle}</h4>
                            <span className="continent flex"><HiOutlineLocationMarker className="icon" />
                            <span className="name">{location}</span></span>
                            <div className="fees flex">
                                <div className="grade">
                                    <span>{grade}<small>+1</small></span>
                                </div>
                               <div className="price">
                                <h5>{fees}</h5>
                               </div>
                            </div>
                            <div className="desc">
                                <p>{description}</p>
                            </div>
                            <button
  className="btn"
  onClick={() =>
    navigate("/booking", {
      state: {
        package: {
          id,
          destTitle,
          location,
          fees,
        },
      },
    })
  }
>
  Book Now
</button>
                            <button className="btn flex">DETAILS<HiOutlineClipboardCheck className="icon"/></button>
                          </div>
                        </div>
                    )
            })
           }
           </div>
        </section>
    );
}
export default Main;