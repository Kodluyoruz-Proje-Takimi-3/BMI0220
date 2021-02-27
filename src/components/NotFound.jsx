import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import cookieMonster from '../img/cookieMonster.png'
import '../styles.css'

function NotFound() {
  useEffect(() => {
    document.getElementById("root").style.backgroundColor = "#fff";

    return () => {
      document.getElementById("root").style.backgroundColor = "#1d2d50";
    };
  }, []);
  return (
    <>
      <div className="d-flex container   flex-wrap">
        <div className="d-flex flex-column col-md-6 col-sm-12">
          <img className="w-75 mx-auto mt-5" src={cookieMonster} alt="" />
          <p className=" mt-5 text-center fw-700 text-lightgreen ls-2 fs-35">YOU FOUND <br /> THE COOKIE <br />MONSTER !</p>
        </div>

        <div className="d-flex flex-column justify-content-center align-items-center col-md-6 col-sm-12">
          <h1 className='fs-200 text-darkblue '>404</h1>
          <h5 className='fs-50 text-darkblue'>NOT FOUND</h5>
          <Link to='/'>    <button className='btn bg-lightgreen rounded-pill px-4 fs-25 mt-5 text-light ls-5 fw-600'>HOME</button></Link>
        </div>
      </div>
    </>
  );
}

export default NotFound;
