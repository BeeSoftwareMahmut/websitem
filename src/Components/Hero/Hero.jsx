import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useMyContext } from '../Context/Context';

const Hero = () => {
  const { imagesHero } = useMyContext();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true); // Yükleme durumunu izlemek için bir state 
  const [currentImageUrl, setCurrentImageUrl] = useState(null);

  const changeTheImageHandler = (direction) => {
    setCurrentImageIndex((prevIndex) => {
      if (direction === 'left') {
        return prevIndex === 0 ? imagesHero.length - 1 : prevIndex - 1;
      } else if (direction === 'right') {
        return prevIndex === imagesHero.length - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  useEffect(() => {
    if (imagesHero.length > 0) {
      setCurrentImageUrl(imagesHero[currentImageIndex].imgUrl);
      setLoading(false); // Veri yüklendikten sonra yükleme durumunu güncelleyin
    }
    
    const interval = setInterval(() => {
      changeTheImageHandler('right');
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [currentImageIndex, imagesHero]);

 

  return (
    <div className='relative mt-4'>
    {loading ? (
      // Yükleme durumunda bir animasyon kullanın
      <div className="animate-spin rounded-full border-t-4 border-blue-500 border-solid h-16 w-16"></div>
    ) : (
      // Yüklendikten sonra resmi gösterin
      <img
        className='h-60 md:h-96 w-screen object-cover'
        src={currentImageUrl}
        alt='Hero'
      />
    )}
    <button
      onClick={() => changeTheImageHandler('left')}
      className='absolute top-1/2 left-5 font-extrabold text-3xl text-red-600 transform -translate-y-1/2 focus:outline-none'
    >
      <FontAwesomeIcon icon={faChevronLeft} />
    </button>
    <button
      onClick={() => changeTheImageHandler('right')}
      className='absolute top-1/2 right-5 font-extrabold text-3xl text-red-600 transform -translate-y-1/2 focus:outline-none'
    >
      <FontAwesomeIcon icon={faChevronRight} />
    </button>
  </div>
  );
};

export default Hero;
