import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className="cards">
      <h1>Check out our Destinations</h1>
      <div className="cars__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              // src="./public/images/img-9.jpg"
              src="https://github.com/rtripi/React_website_layout/blob/9ca0d3a2673c89690fc90e7be956802f62fca7ea/images/img-9.jpg?raw=true"
              text="Explore the hidden waterfall"
              label="Adventure"
              path="/services"
            />
            <CardItem
              // src="./public/images/img-8.jpg"
              src="https://github.com/rtripi/React_website_layout/blob/9ca0d3a2673c89690fc90e7be956802f62fca7ea/images/img-8.jpg?raw=true"
              text="Explore the desert"
              label="Adventure"
              path="/services"
            />
            
          </ul>
          <ul className="cards__items">
            <CardItem
              // src="./public/images/img-9.jpg"
              src="https://github.com/rtripi/React_website_layout/blob/9ca0d3a2673c89690fc90e7be956802f62fca7ea/images/img-9.jpg?raw=true"
              text="Explore the hidden waterfall"
              label="Adventure"
              path="/services"
            />
            <CardItem
              // src="./public/images/img-8.jpg"
              src="https://github.com/rtripi/React_website_layout/blob/9ca0d3a2673c89690fc90e7be956802f62fca7ea/images/img-8.jpg?raw=true"
              text="Explore the desert"
              label="Adventure"
              path="/services"
            />
            
          </ul>
          <ul className="cards__items">
            <CardItem
              // src="/images/img-7.jpg"
              src="https://github.com/rtripi/React_website_layout/blob/9ca0d3a2673c89690fc90e7be956802f62fca7ea/images/img-7.jpg?raw=true"
              text="Hiking season"
              label="Adventure"
              path="/services"
            />
            <CardItem
              // src="/images/img-6.jpg"
              src="https://github.com/rtripi/React_website_layout/blob/9ca0d3a2673c89690fc90e7be956802f62fca7ea/images/img-6.jpg?raw=true"
              text="The city"
              label="Turism"
              path="/services"
            />
            <CardItem
              // src="/images/img-7.jpg"
              src="https://github.com/rtripi/React_website_layout/blob/9ca0d3a2673c89690fc90e7be956802f62fca7ea/images/img-7.jpg?raw=true"
              text="Hiking season"
              label="Adventure"
              path="/services"
            />
            <CardItem
              // src="/images/img-6.jpg"
              src="https://github.com/rtripi/React_website_layout/blob/9ca0d3a2673c89690fc90e7be956802f62fca7ea/images/img-6.jpg?raw=true"
              text="The city"
              label="Turism"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
