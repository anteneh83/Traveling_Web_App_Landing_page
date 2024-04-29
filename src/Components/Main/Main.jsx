import React, {useEffect} from 'react'
import './main.css'
import './main.scss'

import {HiOutlineLocationMarker} from 'react-icons/hi'
import {LuClipboardCheck} from 'react-icons/lu'

import img1 from '../../Assets/img1.webp'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img3.avif'
import img4 from '../../Assets/img4.jpg'
import img5 from '../../Assets/img5.jpg'
import img6 from '../../Assets/img6.jpg'
import img7 from '../../Assets/img7.jpg'
import img8 from '../../Assets/img8.jpg'
import img9 from '../../Assets/img9.jpg'

import Aos from 'aos';
import 'aos/dist/aos.css';

const Data = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: 'Giyorgis',
    location: 'Bahir Dar',
    grade: 'CULTURAL RELAX',
    fees: '$300',
    description: "Bahir Dar Giyorgis, also known as St. George's Church, is a historic Orthodox Christian church located in Bahir Dar, Ethiopia. It is renowned for its architectural beauty and religious significance, attracting both tourists and worshippers. The church is dedicated to St. George, a revered figure in Ethiopian Orthodox Christianity, and is part of the cultural and religious heritage of the region."
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: 'Lalibela',
    location: 'Lalibela',
    grade: 'HISTORICAL & SPIRITUAL',
    fees: '$250',
    description: "Lalibela is famous for its rock-hewn churches, a UNESCO World Heritage site and a significant pilgrimage destination for Ethiopian Orthodox Christians. It showcases remarkable architectural feats and religious history."
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: 'Gondar',
    location: 'Gondar',
    grade: 'HISTORICAL',
    fees: '$200',
    description: "Gondar, known as the 'Camelot of Africa,' boasts medieval castles and churches, reflecting Ethiopia's rich history and cultural heritage."
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: 'Axum',
    location: 'Axum',
    grade: 'HISTORICAL',
    fees: '$220',
    description: "Axum is an ancient city with ruins including stelae fields and the Church of St. Mary of Zion, believed to house the Ark of the Covenant."
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: 'Harar',
    location: 'Harar',
    grade: 'CULTURAL & HISTORICAL',
    fees: '$180',
    description: "Harar, a UNESCO-listed city, is known for its walled old town, vibrant markets, and unique cultural heritage, including the hyena feeding ritual."
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: 'Addis Ababa',
    location: 'Addis Ababa',
    grade: 'CULTURAL & MODERN',
    fees: '$150',
    description: "Addis Ababa, the capital city, offers a mix of vibrant culture, historical sites, and modern amenities, including the National Museum and lively markets."
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: 'Dire Dawa',
    location: 'Dire Dawa',
    grade: 'CULTURAL & HISTORICAL',
    fees: '$190',
    description: "Dire Dawa is a multicultural city with an Arabic influence, known for its diverse cultural heritage, markets, and historical sites."
  },
  {
    id: 8,
    imgSrc: img8,
    destTitle: 'Arba Minch',
    location: 'Arba Minch',
    grade: 'NATURAL & SCENIC',
    fees: '$210',
    description: "Arba Minch, meaning 'Forty Springs,' offers stunning views of the Rift Valley, national parks, and diverse wildlife, making it a paradise for nature lovers."
  },
  {
    id: 9,
    imgSrc: img9,
    destTitle: 'Hawassa',
    location: 'Hawassa',
    grade: 'NATURAL & RELAXING',
    fees: '$180',
    description: "Hawassa, located by Lake Hawassa, is perfect for water sports, birdwatching, and relaxation by the serene lake shores, offering a peaceful getaway."
  }
];


const Main = () =>{
    //lets create a react hook to add a scroll animation
    
    useEffect(()=>{
      Aos.init({duration: 2000})
    }, [])


  return (
    <section className='main container section '>
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most visited destinations
        </h3>
      </div>


      <div className="secContent grid">
        {
          Data.map(({id, imgSrc,destTitle, location, grade, fees, description}) =>{
            return(
              <div key={id} data-aos="fade-up" 
              className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">
                    {destTitle}
                  </h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className='icon' />
                    <span className="name">
                      {location}
                    </span>
                  </span>


                  <div className="fees flex">
                    <div className="grade">
                      <span> {grade}<small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className='btn flex'>
                    DETAILS <LuClipboardCheck className='icon' />
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Main
