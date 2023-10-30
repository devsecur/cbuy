// import Image from 'next/image';
// import React, { useState, useEffect } from 'react';
// import styles from './Carousel.module.scss';
// interface CarouselProps {
//   images: string[];
// }

// const Carousel: React.FC<CarouselProps> = ({ images = [] }) => {
//   // const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   // const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);
//   return (
//     <div className={`carousel bg-black ${styles.carousel}`}>
//       {/* <Image
//         src={images[0]}
//         alt='Carousel Image'
//         className='carousel-image'
//         width={500}
//         height={200}
//         sizes='full'
//       /> */}
//       <div className='text-red-600'>
//         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga animi
//         quam ratione explicabo praesentium, velit dolor tempora doloremque
//         repudiandae laboriosam illum dolorum perferendis voluptates deleniti
//         cumque sint et facilis quod.
//       </div>
//       <img src={images[0]} alt='Carousel Image' className='carousel-image' />
//     </div>
//   );
// };
// export default Carousel;

import Image from 'next/image';
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import styles from './Carousel.module.scss';

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images = [] }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);

  // useEffect(() => {
  //   // Start the timer to automatically switch images after 5 seconds
  //   const id = setInterval(() => {
  //     setCurrentImageIndex((prevIndex) =>
  //       prevIndex === images.length - 1 ? 0 : prevIndex + 1,
  //     );
  //   }, 5000);

  //   setTimerId(id);

  //   // Cleanup the timer when the component unmounts
  //   return () => {
  //     if (timerId) {
  //       clearInterval(timerId);
  //     }
  //   };
  // }, [images.length, timerId]);

  // eslint-disable-next-line no-unused-vars
  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  // eslint-disable-next-line no-unused-vars
  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const handleCircleClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.carousel_image_container}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`${styles.carousel_image_wrapper} ${
              index === currentImageIndex ? `${styles.active}` : ''
            }`}
          >
            <Image
              src={image}
              alt='Carousel Image'
              className={styles.carousel_image}
              width={1000}
              height={70}
              // sizes='1000px'
            />
            {/* 
            {index === currentImageIndex && (
              <div className={styles.carousel_info}>
                <h3>Image Title</h3>
                <p>Price: $XXX</p>
                <p>Location: XYZ</p>
              </div>
            )} */}
          </div>
        ))}
        <div className={styles.carousel_circles}>
          {images.map((_, index) => (
            <div
              key={index}
              className={`${styles.carousel_circle} ${
                index === currentImageIndex ? `${styles.active}` : ''
              }`}
              onClick={() => handleCircleClick(index)}
            ></div>
          ))}
        </div>
      </div>
      {/* <button
        className={`${styles.carousel_button} ${styles.prev}`}
        onClick={handlePrevClick}
      >
        Prev
      </button>
      <button
        className={`${styles.carousel_button} ${styles.next}`}
        onClick={handleNextClick}
      >
        Next
      </button> */}
    </div>
  );
};

export default Carousel;
