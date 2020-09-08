import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img11.jpg'
              text='We develop quality web sites with very awesome web pages'
              label='Web Design'
              path='/services'
            />
            <CardItem
              src='images/img2.jpeg'
              text='Search engine optimization is one of the top key prarioties in our company'
              label='SEO'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img3.jpeg'
              text='Check out our E-commerce site generate. Get your store up and running '
              label='E-commerce'
              path='/services'
            />
            <CardItem
              src='images/img4.jpeg'
              text='we design stunning logos using the best adobe tools'
              label='Graphics Design'
              path='/products'
            />
            <CardItem
              src='images/img8.jpg'
              text='Are your looking for a monile app? your have come to the right place'
              label='Mobile App Development'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
