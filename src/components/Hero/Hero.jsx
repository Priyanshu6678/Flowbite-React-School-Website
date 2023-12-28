import { Carousel } from 'flowbite-react';

export default function Hero() {
  return (
    <div className="h-56 sm:h-64 xl:h-84 2xl:h-96">
      <Carousel slideInterval={5000}>
        <img src="https://source.unsplash.com/1920x1080/?technology" alt="Technology Image" />
        <img src="https://source.unsplash.com/1920x1080/?gaming" alt="Gaming Image" />
        <img src="https://source.unsplash.com/1920x1080/?studying" alt="Studying Image" />
        <img src="https://source.unsplash.com/1920x1080/?playing" alt="Playing Image" />
      </Carousel>
    </div>
  );
}
