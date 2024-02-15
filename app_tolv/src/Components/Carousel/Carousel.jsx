import React, { Component} from 'react';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import startVideo from 'https://www.youtube.com/embed/eII-L0YadU4?version=3&enablejsapi=1&html5=1&hd=1&wmode=opaque&showinfo=0&rel=0;;origin=https://tolvstockholm.se;&controls=0&playsinline=1https://www.youtube.com/embed/eII-L0YadU4?version=3&enablejsapi=1&html5=1&hd=1&wmode=opaque&showinfo=0&rel=0;;origin=https://tolvstockholm.se;&controls=0&playsinline=1';
import startImg from '../Foto/start-2.jpg';
import foodImg from '../Foto/mat-bg.jpg';
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <a
                className='d-block w-100'
                src={startVideo}
                alt= "Start video"
              />
            </Carousel.Item>
            <Carousel.Item>
                <img 
                    className='d-block w-100'
                    src={startImg}
                    alt= "Start"
                />
                <Carousel.Caption>
                    <h3>Start Img</h3>
                    <p>15 activities for all
                        <br>
                        ages and any occasion
                        </br>
                    </p>
                </Carousel.Caption>
              </Carousel.Item>  

              <Carousel.Item>
                <img 
                    className='d-block w-100'
                    src={foodImg}
                    alt= "Restaurants"
                />            
                <Carousel.Caption>
                    <h3>Food Img</h3>
                    <p>3 restaurants
                        <br>
                        under one roof
                        </br>
                    </p>
                    <Button as="a" variant="primary">
                        Food & beverage
                    </Button>
                </Carousel.Caption>             
              </Carousel.Item>  
        </Carousel>
    );
}
export default ControlledCarousel;