import { Card } from 'flowbite-react';

const cardsData = [
  {
    imgSrc: "https://source.unsplash.com/random/1920x1080",
    alt: "Alt text 1",
    title: "Noteworthy technology acquisitions 2021",
    description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
  },
  {
    imgSrc: "https://source.unsplash.com/random/1920x1080",
    alt: "Alt text 2",
    title: "Another Technology Topic",
    description: "Description for the second card.",
  },
  {
    imgSrc: "https://source.unsplash.com/random/1920x1080",
    alt: "Alt text 3",
    title: "Third Technology Topic",
    description: "Description for the third card.",
  },
];

export default function Component() {
  return (
    <>
     <div className=''>
      <h1 id="events_heading" className='text-center mt-4 text-2xl lg:text-4xl mt-6 dark:text-white'>Recent Events</h1>
    
      <div className="mt-4 pl-6 pr-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            className="max-w-sm transition-all transform ease-in-out delay-200 hover:scale-x-105"
            imgAlt={card.alt}
            imgSrc={card.imgSrc} 
           
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {card.title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {card.description}
            </p>
          </Card>
        ))}
      </div>
     </div>
    </>
  );
}
