import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import './Home.css'
const AutoplaySlider = withAutoplay(AwesomeSlider);

const Home = () => {
  const slides = [
    {
      id: 1,
      backgroundImage: 'https://ecoyaan.com/images/carousel-1.png',
      title: 'Buy Less, Buy Better!',
      description: 'Authentic source of truth for your sustainability needs.',
      buttonText: 'About us',
      buttonColor: 'bg-green-500',
    },
    {
      id: 2,
      backgroundImage: 'https://ecoyaan.com/images/carousel-2.png',
      title: 'Follow us on Instagram',
      description: 'For climate news, lifestyle tips, & updates',
      buttonText: 'Follow us',
      buttonColor: 'bg-purple-500',
    },
  ];

  return (
    <div>
      <Header />
      <div className="slider-container">
        <AutoplaySlider
          play={true}
          cancelOnInteraction={false}
          interval={6000}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              data-src={slide.backgroundImage}
              className="relative"
            >
              <div className="text-black mr-96">
                <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                <p className="text-lg mb-8">{slide.description}</p>
                <button
                  className={`${slide.buttonColor} text-white px-6 py-3 rounded-full hover:opacity-75 transition-opacity duration-300`}
                >
                  {slide.buttonText}
                </button>
              </div>
            </div>
            
          ))}
        </AutoplaySlider>
        </div>

      {/* Content section */}
      <div className="relative">
        <div className="container mx-auto px-4 py-20">
          <div className="text-left max-w-3xl">
            <h2 className="text-4xl font-bold mb-6">
              Join our community in creating a more sustainable future for everyone
            </h2>
            <p className="text-lg mb-8">
              At Ecoyaan, we are more than just a platform. Our vision is to build an eco-conscious community for people
              and products.
            </p>
            <p className="text-lg mb-8">
              Consider us your partner for all things sustainable. To keep you motivated on the journey, we will provide
              you with engaging information about climate change, the latest updates on climate policies and lifestyle
              tips that you can adopt to reduce your impact on the environment.
            </p>
          </div>
        </div>
        <div className="waves">
          <svg
            className="waves"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="moving-waves">
              <use xlinkHref="#gentle-wave" x="48" y="-1" fill="rgba(42,187,155,0.7)" />
              <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(42,187,155,0.5)" />
              <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(42,187,155,0.3)" />
              <use xlinkHref="#gentle-wave" x="48" y="8" fill="#2ABB9B" />
            </g>
          </svg>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
