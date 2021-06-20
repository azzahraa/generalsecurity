import React, { useEffect, useState } from 'react'
import './Carousel.css'

const Carousel = (props) => {
    const {children, show} = props

    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(children.length)

    const [touchPosition, setTouchPosition] = useState(null)

    // Set the length to match current children from props
    useEffect(() => {
        setLength(children.length)
    }, [children])

    const next = () => {
        if (currentIndex < (length - show)) {
            setCurrentIndex(prevState => prevState + 1)
        }
    }

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
    }

    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
    }

    const handleTouchMove = (e) => {
        const touchDown = touchPosition

        if(touchDown === null) {
            return
        }

        const currentTouch = e.touches[0].clientX
        const diff = touchDown - currentTouch

        if (diff > 5) {
            next()
        }

        if (diff < -5) {
            prev()
        }

        setTouchPosition(null)
    }

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                {/* You can alwas change the content of the button to other things */}
                {
                    currentIndex > 0 &&
                    <button onClick={prev} className="left-arrow">
                        &lt;
                    </button>
                }
                <div
                    className="carousel-content-wrapper"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                >
                    <div
                        className={`carousel-content show-${show}`}
                        style={{ transform: `translateX(-${currentIndex * (100 / show)}%)` }}
                    >
                        {children}
                    </div>
                </div>
                {/* You can alwas change the content of the button to other things */}
                {
                    currentIndex < (length - show) &&
                    <button onClick={next} className="right-arrow">
                        &gt;
                    </button>
                }
            </div>
        </div>
    )
}

export default Carousel


// import React, {useState} from 'react';
// import Carousel from 'react-bootstrap/Carousel';


// function Slider(){
//     return(
//         <Carousel>
//             <Carousel.Item>
//                 <img className="d-block w-100" src={require("./bsn/warda.jpg")} alt="warda" style={{height: "50vh"}} >
//                 </img>
//             </Carousel.Item>
//             <Carousel.Item>
//             <img className="d-block w-100" src={require("./bsn/zimota.png")} alt="zimota" style={{height: "50vh"}} >
//                 </img>    
//             </Carousel.Item>
//             <Carousel.Item>
//             <img className="d-block w-100" src={require("./bsn/taamir.jpg")} alt="taamir" style={{height: "50vh"}} >
//                 </img>
//             </Carousel.Item>
//             <Carousel.Item>
                
//             </Carousel.Item>
//         </Carousel>
//     )
// }

// export default Slider;