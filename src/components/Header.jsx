import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header className="header sticky top-0 z-50 bg-white shadow-2xl flex items-center justify-between px-8 py-02" style={{ position: 'fixed', width: '100%' }}>
        <h1 className="w-3/12">
          <Link to="/" className="text-green-500 font-bold text-2xl">
            Ecoyaan
          </Link>
        </h1>
        <nav className={`nav font-semibold text-lg ${isOpen ? 'block' : 'hidden'} md:block`}>
          <ul className={`${isOpen ? 'flex flex-col' : 'flex items-center'} md:flex-row`}>
            <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active">
              <Link to="/about">About Us</Link>
            </li>
            <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
              <Link to="/sell">Sell on Ecoyyan</Link>
            </li>
            <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
              <Link to="/careers">Careers</Link>
            </li>
          </ul>
        </nav>
        <div className="w-3/12 flex justify-end md:hidden">
          <button
            type="button"
            onClick={toggleMenu}
            className="text-green-500 hover:text-green-700 focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div className="w-3/12 flex justify-end hidden md:flex">
        </div>
      </header>
    </div>
  );
};

export default Header;
