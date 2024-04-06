import React from 'react';
import CarouselTile from './CarouselTile.jsx';
const Carousel = () => {
  return (
    <>
      <div className="flex flex-row">
        <CarouselTile imageUrl="https://fakeimg.pl/200x250/b84d4d/909090" />
        <CarouselTile imageUrl="https://fakeimg.pl/200x250/b8a0a0/909090" />
        <CarouselTile imageUrl="https://fakeimg.pl/200x250/b84d4d/909090" />
      </div>
      <div className="flex flex-row">
        <CarouselTile imageUrl="https://fakeimg.pl/200x250/b8a0a0/909090" />
        <CarouselTile imageUrl="https://fakeimg.pl/200x250/b84d4d/909090" />
        <CarouselTile imageUrl="https://fakeimg.pl/200x250/b8a0a0/909090" />
      </div>
    </>
  );
};

export default Carousel;
