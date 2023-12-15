import React, { useState } from 'react'
import './Agreement.css'
import Header from '../Components/Header'
import { Button, Col, Container, Modal, Row } from 'react-bootstrap'
import documentIMG from '../Assets/Document.svg'
import { Link } from 'react-router-dom'
import activeAgreementIMG from '../Assets/Active Agreement.svg'
import doneIMG from '../Assets/Done.svg'
import successIMG from '../Assets/success.svg'

function Agreement() {

    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const [agreed, setAgreed] = useState(false);

    const handleAgreementChange = (event) => {
        setAgreed(event.target.checked);
    };

    const [cardInfo, setCardInfo] = useState({
        cardHolderName: '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCardInfo({
            ...cardInfo,
            [name]: value,
        });
    };
    return (
        <>
            <Header />
            <section class="line-container">
                <div class="half-colored-line-agreement"></div>
            </section>
            <Container>
                <section className='steps'>
                    <Row>
                        <Col lg={2}>
                            <div className="step1">
                                <img className='active-step done' src={doneIMG} alt="" />
                                <div className="step1-desc">
                                    <p>Step 1</p>
                                    <h4>ID Verification</h4>
                                </div>
                            </div>
                        </Col>
                        <Col lg={1}>
                            <div className="space-line"></div>
                        </Col>
                        <Col lg={2}>
                            <div className="step1">
                                <img className='normal-step done' src={doneIMG} alt="" />
                                <div className="step1-desc">
                                    <p>Step 2</p>
                                    <h4 className='normal'>Income</h4>
                                </div>
                            </div>
                        </Col>
                        <Col lg={1}>
                            <div className="space-line"></div>
                        </Col>

                        <Col lg={2}>
                            <div className="step1">
                                <img className='normal-step done' src={doneIMG} alt="" />
                                <div className="step1-desc">
                                    <p>Step 3</p>
                                    <h4 className='normal'>Loan Details</h4>
                                </div>
                            </div>
                        </Col>
                        <Col lg={1}>
                            <div className="space-line"></div>
                        </Col>
                        <Col lg={2}>
                            <div className="step1">
                                <img className='normal-step active-icons' src={activeAgreementIMG} alt="" />
                                <div className="step1-desc">
                                    <p>Step 4</p>
                                    <h4 className='normal'>Agreement</h4>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </section>
                <Row>
                    <Col lg={8}>
                        <section className='general-information'>
                            <h3>Sign Agreement</h3>
                            <hr />
                            <div className="document-desc">
                                <div className="about-document">
                                    <img src={documentIMG} alt="" />
                                    <div className="document-desc">
                                        <h6>Document Name Here</h6>
                                        <p>Document 1 line Description here</p>
                                    </div>
                                </div>

                                <hr />
                                <div className="agrmnt-btn">
                                    <a href="#">View Agreement</a>
                                </div>
                            </div>
                        </section>

                        <section className='general-information'>
                            <h6>Sign Document</h6>
                            <input type="text" placeholder='Enter your name to sign document' />

                            <form>
                                <label htmlFor="agreeCheckbox">
                                    <input
                                        type="checkbox"
                                        id="agreeCheckbox"
                                        name="agreement"
                                        checked={agreed}
                                        onChange={handleAgreementChange}
                                    />
                                    I have read & agree to the agreement
                                </label>
                            </form>
                        </section>

                        <section className='general-information mb-5'>
                            <div className="head"><h3>Payment Method</h3> <h2 className='btn'>X Cancel</h2></div>
                            <hr />
                            <form>
                                <div className="form-group">
                                    <div className="third-width">
                                        <label htmlFor="cardHolderName">Card Holder’s Name</label>
                                        <input
                                            type="text"
                                            id="cardHolderName"
                                            name="cardHolderName"
                                            value={cardInfo.cardHolderName}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="third-width">
                                        <label htmlFor="cardNumber">Card Number</label>
                                        <input
                                            type="text"
                                            id="cardNumber"
                                            name="cardNumber"
                                            value={cardInfo.cardNumber}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Expiry Date & CVV</label>
                                    <div className="flex-container">
                                        <div className="half-width">
                                            <input
                                                type="text"
                                                id="expiryDate"
                                                name="expiryDate"
                                                placeholder="MM/YY"
                                                value={cardInfo.expiryDate}
                                                onChange={handleInputChange}
                                                className="small-input"
                                            />
                                        </div>
                                        <div className="half-width">
                                            <input
                                                type="text"
                                                id="cvv"
                                                name="cvv"
                                                placeholder="CVV"
                                                value={cardInfo.cvv}
                                                onChange={handleInputChange}
                                                className="small-input"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </form>

                        </section>
                    </Col>

                    <Col lg={4}>
                        <section className='general-information'>
                            <h3>Payment Summary</h3>
                            <hr />
                            <div class="summary-item">
                                <span class="summary-text">Convenance</span>
                                <span class="summary-amount">AED 8,000</span>
                            </div>
                            <div class="summary-item">
                                <span class="summary-text">Broker Commission</span>
                                <span class="summary-amount">AED 8,000</span>
                            </div>
                            <div class="summary-item">
                                <span class="summary-text">Dubai land department fee</span>
                                <span class="summary-amount">AED 8,000</span>
                            </div>
                            <div class="summary-item">
                                <span class="summary-text">Mortgage Processing  </span>
                                <span class="summary-amount">AED 8,000</span>
                            </div>
                            <div class="summary-item">
                                <span class="summary-text">Registration Fee</span>
                                <span class="summary-amount">AED 8,000</span>
                            </div>
                            <div class="summary-item">
                                <span class="summary-text">Valuation</span>
                                <span class="summary-amount">AED 8,000</span>
                            </div>
                            <hr />
                            <div class="summary-item">
                                <span class="summary-text">Down Payment</span>
                                <span class="summary-amount">AED 8,000</span>
                            </div>
                            <div class="summary-item">
                                <span class="summary-text">Total Extra</span>
                                <span class="summary-amount">AED 8,000</span>
                            </div>
                            <hr style={{ color: "##DBA953" }} />
                            <div class="summary-item">
                                <span class="summary-text fw-bold">Total Payment</span>
                                <span class="summary-amount fw-bold">AED 8,000</span>
                            </div>
                        </section>
                    </Col>
                </Row>

                {/* Modal for Successfully Submitted Popup */}
                <Modal show={showModal} onHide={handleClose} centered>
                    <Modal.Header closeButton>
                        <Modal.Title className='modal-title'>
                            <img src={successIMG} alt="Success" className="success-image" />
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="modal-body">
                        <h2>Successfully Sumbitted</h2>
                        <p className="success-message">Your application is successfully submitted. You can track your application status from your dashboard.</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>

                <section className='end-part'>
                    <Link to='/productInformation'>
                        <button className="back">Back</button>
                    </Link>
                    <div className="button-group">
                        <button className="save-draft">Save as Draft</button>
                        <button type="button" className="continue" onClick={handleShow}>
                            Pay Now
                        </button>
                    </div>
                </section>
            </Container>
        </>
    )
}

export default Agreement