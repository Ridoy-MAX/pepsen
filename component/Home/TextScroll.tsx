import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SlickCarousel: React.FC = () => {
  const settings = {
    arrows: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
  };

  return (
    <div className='container-fluid'>
      <div className="slick-carousel-wrapper">
        <Slider {...settings}>
          <div>
            <div className="item d-flex gap-2">
              <h1 className="text-gray-900 h4 lh-32 rajdhani-600 m-0 text-uppercase ls-4">Service Development</h1>
              <img src="icon-8.png" className="w-20 mt-1 h-20" alt="icon" />
            </div>
          </div>
          <div>
            <div className="item d-flex gap-2">
              <h1 className="text-gray-900 h4 lh-32 rajdhani-600 m-0 text-uppercase ls-4">Photoghraphy Trend</h1>
              <img src="icon-8.png" className="w-20 mt-1 h-20" alt="icon" />
            </div>
          </div>
          <div>
            <div className="item d-flex gap-2">
              <h1 className="text-gray-900 h4 lh-32 rajdhani-600 m-0 text-uppercase ls-4">Discusson Platform </h1>
              <img src="icon-8.png" className="w-20 mt-1 h-20" alt="icon" />
            </div>
          </div>
          <div>
            <div className="item d-flex gap-2">
              <h1 className="text-gray-900 h4 lh-32 rajdhani-600 m-0 text-uppercase ls-4">SDeveloper Platform</h1>
              <img src="icon-8.png" className="w-20 mt-1 h-20" alt="icon" />
            </div>
          </div>
          <div>
            <div className="item d-flex gap-2">
              <h1 className="text-gray-900 h4 lh-32 rajdhani-600 m-0 text-uppercase ls-4">Service Development</h1>
              <img src="icon-8.png" className="w-20 mt-1 h-20" alt="icon" />
            </div>
          </div>
          <div>
            <div className="item d-flex gap-2">
              <h1 className="text-gray-900 h4 lh-32 rajdhani-600 m-0 text-uppercase ls-4">Artists Marketplace</h1>
              <img src="icon-8.png" className="w-20 mt-1 h-20" alt="icon" />
            </div>
          </div>
          <div>
            <div className="item d-flex gap-2">
              <h1 className="text-gray-900 h4 lh-32 rajdhani-600 m-0 text-uppercase ls-4">Photoghraphy Trend</h1>
              <img src="icon-8.png" className="w-20 mt-1 h-20" alt="icon" />
            </div>
          </div>
          <div>
            <div className="item d-flex gap-2">
              <h1 className="text-gray-900 h4 lh-32 rajdhani-600 m-0 text-uppercase ls-4">Rankings Collection</h1>
              <img src="icon-8.png" className="w-20 mt-1 h-20" alt="icon" />
            </div>
          </div>
          <div>
            <div className="item d-flex gap-2">
              <h1 className="text-gray-900 h4 lh-32 rajdhani-600 m-0 text-uppercase ls-4">Discusson Platform</h1>
              <img src="icon-8.png" className="w-20 mt-1 h-20" alt="icon" />
            </div>
          </div>
          <div>
            <div className="item d-flex gap-2">
              <h1 className="text-gray-900 h4 lh-32 rajdhani-600 m-0 text-uppercase ls-4">Developer Platform</h1>
              <img src="icon-8.png" className="w-20 mt-1 h-20" alt="icon" />
            </div>
          </div>
        </Slider>
      </div>
    </div>

  );
};

export default SlickCarousel;
