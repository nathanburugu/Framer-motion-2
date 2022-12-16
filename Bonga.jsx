/** @format */

import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Formz from '../../subcomponents/formz/Formz';
import NavBarMobileView from '../sidebar/NavBarMobileView';
import StickyNav from '../sidebar/sNav/StickyNav';
import './bonga.css';

const Bonga = ({ changeTheme, changeFont, font, theme }) => {
  const location = useLocation();
  const contactz = location.pathname;

  return (
    <>
      <motion.div
        initial={{ width: '0%' }}
        animate={{ width: '100%' }}
        exit={{ x: window.innerWidth, transition: { duration: 0.34 } }}
      >
        <NavBarMobileView
          changeTheme={changeTheme}
          theme={theme}
          changeFont={changeFont}
          font={font}
        />
        <div
          className="sNav"
          style={{
            maxWidth: '100%',
          }}
        >
          <StickyNav contactz={contactz} />
        </div>

        <div className="container talk rounded-4 shadow-lg " id="con">
          <div className="row row-talk">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 shadow-lg  talku">
              <div className="row row-ndani">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <h1 className="talk-title mt-3">Let's Talk</h1>
                  <div className="kaline">{''}</div>
                  <h6 className="mb-3 katext" style={{ lineHeight: '25px' }}>
                    Get In Touch,
                    <br />
                    We'd Love To Hear From You!
                  </h6>
                  <p className="talk-text">
                    Give us call, send us a message? or find us on social media.
                  </p>
                  <h6 className="kiong">Address</h6>

                  <p className="addy">
                    P.O. Box 25-0902,
                    <br />
                    Kikuyu, Kenya.
                    <br />
                    4th Office, Jamhuri Building
                    <br />
                    <span style={{ fontSize: '12px' }}>
                      {' '}
                      (Opposite P.C.E.A Kikuyu Township Church)
                    </span>
                    <br />
                    <span style={{ fontWeight: 'bold' }}>Email Us</span>
                    <br />
                    info@njerimariafoundation.co.ke
                    <br />
                    njerimariaf@gmail.com
                  </p>
                  {/* <div className="listz">
                <p>0704596380</p>
                <p>nathanburugu55@gmail.com</p>
                <p>6th Floor, Wetspoint Building, Mpaka Road, Parklands </p>
                <p></p>
              </div> */}
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 talku-form">
              <h2 className="mt-5 mb-3">
                Send Us a <br /> message
              </h2>
              <Formz />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Bonga;
