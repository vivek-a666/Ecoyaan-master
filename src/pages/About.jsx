import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
      <div className="bg-green-50">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="bg-green-200 rounded-lg shadow-lg p-8 text-center mb-8">
            <h1 className="text-3xl font-semibold mt-8 mb-4 text-green-800">About Ecoyaan</h1>
            <p className="mb-8 text-lg text-green-900">
              At Ecoyaan, we are more than just a platform. Our goal is to build a community of eco-conscious people who share a common vision and passion for a more sustainable world.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-center">Our Values</h2>
            <div className="flex flex-wrap justify-center">
              <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0 px-2">
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <h3 className="font-semibold text-green-600 text-xl mb-4">Trust</h3>
                  <p className="text-gray-700">We value the trust of our community. We strive to be transparent and honest in everything we do, from the content we share today to sourcing our products in the future.</p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0 px-2">
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <h3 className="font-semibold text-green-600 text-xl mb-4">Trust</h3>
                  <p className="text-gray-700">We value the trust of our community. We strive to be transparent and honest in everything we do, from the content we share today to sourcing our products in the future.</p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0 px-2">
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <h3 className="font-semibold text-green-600 text-xl mb-4">Trust</h3>
                  <p className="text-gray-700">We value the trust of our community. We strive to be transparent and honest in everything we do, from the content we share today to sourcing our products in the future.</p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0 px-2">
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <h3 className="font-semibold text-green-600 text-xl mb-4">Trust</h3>
                  <p className="text-gray-700">We value the trust of our community. We strive to be transparent and honest in everything we do, from the content we share today to sourcing our products in the future.</p>
                </div>
              </div>
            </div>
          </div>
          {/* Our Story Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-xl font-semibold mb-2 text-center">Our Story</h2>
            <p className="mb-4 text-center text-green-900">
              We started Ecoyaan after watching an episode of “Our Planet II”, where we saw the devastating impact of plastic pollution and climate change on the albatross birds. That moment ignited our mission.
            </p>
            {/* Add more content */}
          </div>
          {/* Meet the Team Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-xl font-semibold mb-4 text-center">Meet the Team</h2>
            <div className="flex flex-wrap justify-center mb-4">
              {/* Team Member Cards */}
              {/* Replace the placeholders with actual team member details and images */}
              <div className="w-full md:w-1/2 lg:w-1/4 mb-4 px-2 text-center">
                <img src="https://winaero.com/blog/wp-content/uploads/2018/08/Windows-10-user-icon-big.png" alt="Shruthi" className="mx-auto rounded-full w-24 h-24 mb-2" />
                <h3 className="font-semibold">SHRUTHI</h3>
                <p className="mb-2">SOCIAL MEDIA</p>
                <p>Shruthi is in charge of our Instagram. She is a practicing Vegan and cares deeply about sustainability. Follow her small business <a href="#" className="underline">here</a>.</p>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 mb-4 px-2 text-center">
                <img src="https://winaero.com/blog/wp-content/uploads/2018/08/Windows-10-user-icon-big.png" alt="Shruthi" className="mx-auto rounded-full w-24 h-24 mb-2" />
                <h3 className="font-semibold">SHRUTHI</h3>
                <p className="mb-2">SOCIAL MEDIA</p>
                <p>Shruthi is in charge of our Instagram. She is a practicing Vegan and cares deeply about sustainability. Follow her small business <a href="#" className="underline">here</a>.</p>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 mb-4 px-2 text-center">
                <img src="https://winaero.com/blog/wp-content/uploads/2018/08/Windows-10-user-icon-big.png" alt="Shruthi" className="mx-auto rounded-full w-24 h-24 mb-2" />
                <h3 className="font-semibold">SHRUTHI</h3>
                <p className="mb-2">SOCIAL MEDIA</p>
                <p>Shruthi is in charge of our Instagram. She is a practicing Vegan and cares deeply about sustainability. Follow her small business <a href="#" className="underline">here</a>.</p>
              </div>
               <div className="w-full md:w-1/2 lg:w-1/4 mb-4 px-2 text-center">
                <img src="https://winaero.com/blog/wp-content/uploads/2018/08/Windows-10-user-icon-big.png" alt="Shruthi" className="mx-auto rounded-full w-24 h-24 mb-2" />
                <h3 className="font-semibold">SHRUTHI</h3>
                <p className="mb-2">SOCIAL MEDIA</p>
                <p>Shruthi is in charge of our Instagram. She is a practicing Vegan and cares deeply about sustainability. Follow her small business <a href="#" className="underline">here</a>.</p>
              </div>
            </div>
            <p className="mb-4 text-center text-green-900">
              Ecoyaan is constantly growing and evolving. This spot awaits you. <a href="#" className="underline">Check out our open positions</a>.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;
