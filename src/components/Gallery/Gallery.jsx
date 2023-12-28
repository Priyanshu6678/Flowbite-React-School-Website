import React from 'react';

export default function Gallery() {
  const imageSources = [
    'https://source.unsplash.com/random/1920x1080',
    'https://source.unsplash.com/random/1920x1080',
    'https://source.unsplash.com/random/1920x1080',
   'https://source.unsplash.com/random/1920x1080'
    // Add more image sources as needed
  ];

  return (
    
     <div>
      <h1 id="events_heading" className='text-center text-2xl lg:text-4xl dark:text-white'>Image Gallery</h1>
    
      <div className="mt-4 pl-6 pr-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {imageSources.map((src, index) => (
          <img key={index} className="max-w-full h-auto" alt={`Image ${index + 1}`} src={src} />
        ))}
      </div>
     </div>
    
  );
}
