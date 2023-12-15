import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import verificationIMG from '../Assets/Verification.svg'
import incomeIMG from '../Assets/Income.svg'
import loanIMG from '../Assets/Loan Details.svg'
import agreementIMG from '../Assets/Agreement.svg'
import exportIMG from '../Assets/Export.svg'
import './PersonalInformation.css'
import { useNavigate } from 'react-router-dom'
import Header from '../Components/Header'

function PersonalInformation() {

    const [formFilled, setFormFilled] = useState(false); // State to track form completion

    const navigate = useNavigate();

    const checkFormFilled = () => {
        const firstName = document.getElementById('first-name').value;
        const isFormFilled = !!firstName; // Checking if the 'First Name' field is filled

        setFormFilled(isFormFilled); // Update formFilled state based on the condition
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        checkFormFilled();

        // If the form is filled, navigate to the 'GeneralInformation' page
        if (formFilled) {
            navigate('/generalinformation'); // Replace '/generalinformation' with your actual route
        } else {
            console.log('Please fill in all required fields.');
        }
    }

    return (
        <>
        <Header/>
            <section class="line-container">
                <div class="half-colored-line"></div>
            </section>

            <Container>
                <section className='steps'>
                    <Row>
                        <Col lg={2}>
                            <div className="step1">
                                <img className='active-step' src={verificationIMG} alt="" />
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
                                <img className='normal-step' src={incomeIMG} alt="" />
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
                                <img className='normal-step' src={loanIMG} alt="" />
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
                                <img className='normal-step' src={agreementIMG} alt="" />
                                <div className="step1-desc">
                                    <p>Step 4</p>
                                    <h4 className='normal'>Agreement</h4>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </section>

                <section className='main-part'>
                    <Row>
                        <Col lg={4}>
                            <div className="upload-part">
                                <h3>Upload Emirates ID</h3>
                                <hr />
                                <div class="file-upload">
                                    <input type="file" id="upload" accept=".svg, .png, .jpg, .gif" />
                                    <label for="upload">
                                        <img src={exportIMG} alt="" />
                                        <p><span>Click to upload </span>
                                            or drag and drop <br />
                                            SVG, PNG, JPG or GIF (max. 800x400px)</p>
                                    </label>
                                </div>
                            </div>
                        </Col>

                        <Col lg={8}>
                            <div className="information-part">
                                <h3>Personal Information</h3>
                                <hr />
                                <div className="form-container">
                                    <form>
                                        <div className="input-row">
                                            <div className="half-width">
                                                <label htmlFor="first-name">First Name</label>
                                                <input type="text" id="first-name" name="first-name" placeholder="Enter your first name" required />
                                            </div>
                                            <div className="half-width">
                                                <label htmlFor="last-name">Last Name</label>
                                                <input type="text" id="last-name" name="last-name" placeholder="Enter your last name" required />
                                            </div>
                                        </div>
                                        <div className="input-row">
                                            <div className="half-width">
                                                <label htmlFor="residency-status">Residency Status</label>
                                                <select id="residency-status" name="residency-status" required>
                                                    <option value="">Select Residency Status</option>
                                                    <option value="citizen">Citizen</option>
                                                    <option value="resident">Resident</option>
                                                    <option value="visitor">Visitor</option>
                                                </select>
                                            </div>
                                            <div className="half-width">
                                                <label htmlFor="emirate-id">Emirate ID Number</label>
                                                <input type="text" id="emirate-id" name="emirate-id" placeholder="Enter Emirate ID Number" required />
                                            </div>
                                        </div>
                                        <div className="input-row">
                                            <div className="half-width">
                                                <label htmlFor="nationality">Nationality</label>
                                                <select id="nationality" name="nationality" required>
                                                    <option value="">Select Nationality</option>
                                                    <option value="uae">UAE</option>
                                                    <option value="usa">USA</option>
                                                    <option value="uk">UK</option>
                                                </select>
                                            </div>
                                            <div className="half-width">
                                                <label htmlFor="phone-number">Phone Number</label>
                                                <input type="tel" id="phone-number" name="phone-number" placeholder="Enter Phone Number" required />
                                            </div>
                                        </div>
                                        <div className="input-row">
                                            <div className="half-width">
                                                <label htmlFor="date-of-birth">Date of Birth</label>
                                                <input type="date" id="date-of-birth" name="date-of-birth" required />
                                            </div>
                                            <div className="half-width">
                                                <label htmlFor="email-address">Email Address</label>
                                                <input type="email" id="email-address" name="email-address" placeholder="Enter Email Address" required />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </section>

                <section className='end-part'>
                    <button className="save-draft">Save as Draft</button>
                    <button type="submit" className="continue" onClick={handleSubmit}>Continue</button>
                </section>
            </Container>
        </>
    )
}

export default PersonalInformation