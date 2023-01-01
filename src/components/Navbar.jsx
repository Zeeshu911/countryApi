import React from "react";
import Main from "./Main";
import { BiWorld } from "react-icons/bi";

const Navbar = ({ country, items, setCountry }) => {
  return (
    <>
      {/* <div
        id="navbar"
        className='bg-secondary'
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
          alignItems: "center",
        }}
      >
        <div className="navbar-title" style={{ fontSize: "1.55rem", color: "white" }}>
          <BiWorld /> COUNTRY DATA
        </div>
        <input type="text" onChange={(e)=> setCountry(e.target.value)} style={{border: "2px solid black"}}/>
      </div>  */}

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
        <div
          className="navbar-title"
        >
          <BiWorld style={{marginRight: "7px"}}/> COUNTRY DATA
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <form className="form-inline my-2 my-lg-0">
            <input
              type="text"
              onChange={(e) => setCountry(e.target.value)}
              placeholder="Search a country..."
            />
          </form>
        </div>
      </nav>

      <Main items={items} />
    </>
  );
};

export default Navbar;
