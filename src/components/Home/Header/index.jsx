import React from "react";
import logo from "../../../logo.png";
import "./styles.css";

const Header = ({
  handleFormSubmit,
  handleInputChange,
  handleHomeClicked,
  searchInputValue,
}) => (
  <header>
    {/* <div className="header-logo">
      <img src={logo} alt="logo" />
    </div>
    <div className="header-rights">
      <p>
        new name <br /> new gamil
      </p>
    </div>
    <form onSubmit={handleFormSubmit}>
      <div className='header-search'>
        <input
        type='text'
        value={searchInputValue}
          required
          onChange={handleInputChange}
        />
        <button className='search-icon'>
          <i className='fas fa-search'></i>
        </button>
      </div>
    </form>
    

    <div className="header-home">
      <i className="fas fa-home" onClick={handleHomeClicked}></i>
    </div> */}
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand home2" onClick={handleHomeClicked}>React</a>
        <form className="d-flex input-group w-50 " onSubmit={handleFormSubmit}>
          <input
            type="text"
            className="form-control rounded input1"
            placeholder="Search for photos here"
            aria-label="Search"
            aria-describedby="search-addon"
            value={searchInputValue}
            required
            onChange={handleInputChange}
          />
          <span className="input-group-text border-0" id="search-addon">
            <i className="fas fa-search"></i>
          </span>
        </form>
        <div className="header-home">
      <i className="bi bi-house-fill" onClick={handleHomeClicked}></i>
    </div>
      </div>
    </nav>
  </header>
);

export default Header;
