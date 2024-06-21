import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/nav.css';

// The Nav component represents the navigation bar of the application.
const Nav = () => {
  // State to manage the toggle state of each navigation item.
  const [toggled, setToggled] = useState(Array(7).fill(false));

  // State to manage the text in the search input field.
  const [searchText, setSearchText] = useState('');

  // State to manage the placeholder text of the search input field.
  const [searchPlaceholder, setSearchPlaceholder] = useState('Search here...');

  // Function to handle toggling of navigation items.
  const handleToggle = (index) => {
    setToggled((prevToggled) =>
      // Toggle the clicked item, and ensure only one item is toggled at a time.
      prevToggled.map((item, i) => (i === index ? !item : false))
    );
  };

  // Function to handle changes in the search input field.
  const handleChange = (event) => {
    const value = event.target.value;
    setSearchText(value);
    // Change the placeholder text based on whether the search input is empty or not.
    setSearchPlaceholder(value === '' ? 'Search here...' : 'Leave');
  };

  // Function to handle focus event on the search input field.
  const handleFocus = () => {
    // Change the placeholder text to 'Leave' when the input is focused.
    if (searchPlaceholder === 'Search here...') {
      setSearchPlaceholder('Leave');
    }
  };

  // Function to handle blur event on the search input field.
  const handleBlur = () => {
    // Reset the placeholder text to 'Search here...' if the input is empty when blurred.
    if (searchText === '') {
      setSearchPlaceholder('Search here...');
    }
  };

  // Array of navigation items with path, icon, and text for each item.
  const navItems = [
    { path: '/dashboard', icon: 'bi bi-grid', text: 'Dashboard' },
    { path: '/employees', icon: 'bi bi-people', text: 'Employees' },
    { path: '/projects', icon: 'bi bi-card-checklist', text: 'Projects' },
    { path: '/attendance', icon: 'bi bi-calendar4', text: 'Attendance' },
    { path: '/jobs', icon: 'bi bi-person-workspace', text: 'Jobs' },
    { path: '/documents', icon: 'bi bi-file-earmark-text', text: 'Documents' },
    { path: '/finance', icon: 'bi bi-wallet', text: 'Finance' },
  ];

  return (
    <>
      <nav className='navbar'>
        {/* Brand name of the navigation bar */}
        <h3 className='navbar-brand text-white'>Smile-Tech</h3>
        {/* A static icon */}
        <i className="fa-solid fa-s text-primary fs-3"></i>
        {/* Navigation items list */}
        <ul className='d-flex me-auto'>
          {navItems.map((item, index) => (
            <li className='text-white nav-item' key={index}>
              {/* Hidden checkbox to manage toggle state */}
              <input
                type="checkbox"
                id={`nav-toggle-${index}`}
                className="nav-toggle visually-hidden"
                checked={toggled[index]}
                onChange={() => handleToggle(index)}
              />
              <label htmlFor={`nav-toggle-${index}`} className='nav-label ms-5'>
                {/* Icon for the navigation item */}
                <i className={`${item.icon} nav-icon`}></i>
                {/* Display text and link if the item is toggled */}
                {toggled[index] && <Link to={item.path} className='nav-text'>{item.text}</Link>}
              </label>
            </li>
          ))}
        </ul>
        {/* Search bar */}
        <div className='d-flex search-bar align-items-center' style={{ background: searchPlaceholder === 'Leave' ? 'white' : '#0F222D' }}>
          <i className={`fa-solid fa-magnifying-glass me-1 text-${searchPlaceholder === 'Search here...' ? 'white' : 'grey'}`}></i>
          <input
            type="search"
            value={searchText}
            placeholder={searchPlaceholder}
            className='ms-1'
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={{
              backgroundColor: searchPlaceholder === 'Leave' ? 'white' : 'transparent',
              color: searchPlaceholder === 'Leave' ? 'grey' : 'white',
              border: 'none',
              width: '100%',
              outline: 'none'
            }}
          />
        </div>
        {/* Notification bell icon */}
        <i className="fa-regular fa-bell text-white cursor-pointer"></i>
        {/* Profile image */}
        <div className='profile'>
          <img
            src="https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?cs=srgb&dl=pexels-pixabay-56866.jpg&fm=jpg"
            alt="flower"
            width={100}
            height={100}
            className='img-fluid cursor-pointer'
            style={{ borderRadius: '20px' }}
          />
        </div>
      </nav>
      {/* Horizontal line under the navigation bar */}
      <hr className='text-white w-50 ' />
    </>
  );
};

export default Nav;

