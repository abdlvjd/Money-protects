import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Header.css';
import logoIMG from '../Assets/Logo.svg';
import headerIcon1 from '../Assets/Header Icon 1.svg';
import headerIcon2 from '../Assets/Header Icon 2.svg';
import headerIcon3 from '../Assets/Header Icon 3.svg';

function Header() {
  const [activeButton, setActiveButton] = useState('NewApplication');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  useEffect(() => {
    setActiveButton('NewApplication');
  }, []);

  return (
    <section className='header-main'>
      <Container>
        <Row className='align-items-center'>
          <Col lg={2}>
            <div className='logo'>
              <img src={logoIMG} alt='Logo' />
            </div>
          </Col>
          <Col lg={7} className='text-left'>
            <div className='header-buttons'>
              <a
                href='#'
                onClick={() => handleButtonClick('Dashboard')}
                className={activeButton === 'Dashboard' ? 'active' : ''}
              >
                <img src={headerIcon1} alt='Icon 1' />
                <h3>Dashboard</h3>
              </a>
              <a
                href='#'
                onClick={() => handleButtonClick('MyApplication')}
                className={activeButton === 'MyApplication' ? 'active' : ''}
              >
                <img src={headerIcon2} alt='Icon 2' />
                <h3>My Applications</h3>
              </a>
              <a
                href='#'
                onClick={() => handleButtonClick('NewApplication')}
                className={activeButton === 'NewApplication' ? 'active highlight' : ''}
              >
                <img src={headerIcon3} alt='Icon 3' />
                <h3>New Application</h3>
              </a>
            </div>
          </Col>
          <Col lg={3} className='text-right'>
            <div className='header-icons'>
              <i className='fa-regular fa-user'></i>
              <i className='fa-regular fa-envelope'></i>
              <i className='fa-solid fa-gear'></i>
            </div>
          </Col>
        </Row>
        <div className="new-appliocation">
          <h2>New Application</h2>
        </div>
      </Container>
    </section>
  );
}

export default Header;
