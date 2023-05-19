import { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'
import Pic01 from '../../assets/accessibility01.png';
import Pic02 from '../../assets/accessibility02.png';
import Pic03 from '../../assets/accessibility03.png';
import Pic04 from '../../assets/accessibility04.jpg';
import './HomePage.css';


export default function HomePage() {

    // HomePage Images
    const homeImgs = [
        {
        id: 1,
        src: Pic01
        },
        {
        id: 2,
        src: Pic02
        },
        {
        id: 3,
        src: Pic03
        },
        {
        id: 4,
        src: Pic04
        }
    ];
    // Javascript that works the image carousel
    const [currentImgIndex, setCurrentImgIndex] = useState(0);

    const prevImg = () => {
        const isFirstImg = currentImgIndex === 0;
        const index = isFirstImg ? homeImgs.length - 1 : currentImgIndex - 1;
        setCurrentImgIndex(index);
    };

    const nextImg = () => {
        const isLastImg = currentImgIndex === homeImgs.length - 1;
        const index = isLastImg ? 0 : currentImgIndex + 1;
        setCurrentImgIndex(index);
    };

    return (
        <main>
            <h1>Welcome to Access All!</h1>
            <h2>Your Go-to site for accessibility features</h2>

            <p>Access All is a site that provides accessibility features for people with disabilities.</p>

            <p>Our goal is to provide a one-stop-shop for accessibility features. We want to make it easy for people with disabilities to find the features they need to make their lives easier.</p>
            
            
            {/* HomePage Carousel */}
            <div className="MainCarousel">
                <div 
                    style={{backgroundImage: `url(${homeImgs[currentImgIndex].src})`}} 
                    className="CarouselPictures" 
                >
                </div>
                {/* Buttons for Carousel */}
                <div className='LeftButton'>
                    <BsChevronCompactLeft onClick={prevImg} size={30}/>
                </div>
                <div className='RightButton'>
                    <BsChevronCompactRight onClick={nextImg} size={30}/>
                </div>
                {/* Dots for Carousel */}
                <div className="CarouselDots">
                    {homeImgs.map((img, index) => (
                        <RxDotFilled
                        key={img.id}
                        onClick={() => setCurrentImgIndex(index)}
                        size={20}
                        className={`dot ${index === currentImgIndex ? 'active' : ''}`}
                        />
                    ))}
                </div>
            </div>




        </main>
    )
}


