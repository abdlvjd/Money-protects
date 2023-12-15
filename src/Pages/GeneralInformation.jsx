import React, { useState } from 'react'
import Header from '../Components/Header'
import { Col, Container, Row } from 'react-bootstrap'
import './GeneralInformation.css';
import { Link } from 'react-router-dom';
import activeIncomeIMG from '../Assets/Active income.svg'
import loanIMG from '../Assets/Loan Details.svg'
import agreementIMG from '../Assets/Agreement.svg'
import doneIMG from '../Assets/Done.svg'

function GeneralInformation() {
    const [clientType, setClientType] = useState('individual'); // State to manage client type

    const handleClientTypeChange = (event) => {
        setClientType(event.target.value);
    }
    return (
        <>
            <Header />
            <section class="line-container">
                <div class="half-colored-line-general"></div>
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
                                <img className='normal-step active-icons' src={activeIncomeIMG} alt="" />
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

                <section className='general-information'>
                    <h3>General Information</h3>
                    <hr />
                    <div className="form-container">
                        <form>
                            <div className="input-row">
                                <div className="third-width">
                                    <label htmlFor="company">Company</label>
                                    <input type="text" id="company" name="company" placeholder="Enter company name" required />
                                </div>
                                <div className="third-width">
                                    <label htmlFor="job-title">Job Title</label>
                                    <input type="text" id="job-title" name="job-title" placeholder="Enter job title" required />
                                </div>
                                <div className="third-width">
                                    <label htmlFor="industry">Industry</label>
                                    <select id="industry" name="industry" required>
                                        <option value="">Select Industry</option>
                                        <option value="IT">Information Technology</option>
                                        <option value="Finance">Finance</option>
                                        <option value="Healthcare">Healthcare</option>
                                        {/* Add more industry options as needed */}
                                    </select>
                                </div>
                            </div>
                            <div className="input-row">
                                <div className="third-width">
                                    <label htmlFor="employment-status">Employment Status</label>
                                    <select id="employment-status" name="employment-status" required>
                                        <option value="">Select Employment Status</option>
                                        <option value="Full-time">Full-time</option>
                                        <option value="Part-time">Part-time</option>
                                        <option value="Contract">Contract</option>
                                        <option value="Freelance">Freelance</option>
                                        {/* Add more employment status options as needed */}
                                    </select>
                                </div>
                                <div className="third-width">
                                    <label htmlFor="join-date">Join Date</label>
                                    <input type="date" id="join-date" name="join-date" required />
                                </div>
                                <div className="third-width"></div>
                            </div>
                        </form>
                    </div>
                </section>

                <section className='general-information'>
                    <h3>Civil Status</h3>
                    <hr />
                    <div className="form-container">
                        <form>
                            <div className="input-row">
                                <div className="third-width">
                                    <label htmlFor="married-status">Married Status</label>
                                    <select id="married-status" name="married-status" required>
                                        <option value="">Select Married Status</option>
                                        <option value="married">Married</option>
                                        <option value="single">Single</option>
                                        <option value="divorced">Divorced</option>
                                        {/* Add more married status options as needed */}
                                    </select>
                                </div>
                                <div className="third-width">
                                    <label htmlFor="spouse-name">Spouse Name</label>
                                    <input type="text" id="spouse-name" name="spouse-name" placeholder="Enter spouse name" />
                                </div>
                                <div className="third-width">
                                    <label htmlFor="dependents">Number of Dependents</label>
                                    <select id="dependents" name="dependents" required>
                                        <option value="">Select Number of Dependents</option>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        {/* Add more dependent options as needed */}
                                    </select>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>

                <section className='general-information'>
                    <h3>Income</h3>
                    <hr />
                    <div className="form-container">
                        <form>
                            <div className="input-row">
                                <div className="third-width">
                                    <label htmlFor="monthly-income">Monthly Income</label>
                                    <select id="monthly-income" name="monthly-income" required>
                                        <option value="">Select Monthly Income</option>
                                        <option value="less-than-1000">$0 - $999</option>
                                        <option value="1000-2000">$1000 - $1999</option>
                                        <option value="2000-3000">$2000 - $2999</option>
                                        {/* Add more income range options as needed */}
                                    </select>
                                </div>
                                <div className="third-width">
                                    <label htmlFor="monthly-expense">Monthly Expense</label>
                                    <select id="monthly-expense" name="monthly-expense" required>
                                        <option value="">Select Monthly Expense</option>
                                        <option value="less-than-500">$0 - $499</option>
                                        <option value="500-1000">$500 - $999</option>
                                        <option value="1000-1500">$1000 - $1499</option>
                                        {/* Add more expense range options as needed */}
                                    </select>
                                </div>
                                <div className="third-width"></div>
                            </div>
                        </form>
                    </div>
                </section>

                <section className='general-information mb-5'>
                    <h3>Beneficiary Details</h3>
                    <hr />
                    <div className="form-container">
                        <form>
                            <div className="input-row">
                                <div className="radio-group">
                                    <div className="third-width">
                                        <div className="individual">
                                            <input
                                                type="radio"
                                                id="individual-client"
                                                name="client-type"
                                                value="individual"
                                                checked={clientType === 'individual'}
                                                onChange={handleClientTypeChange}
                                                required
                                            />
                                            <label htmlFor="individual-client">
                                                Individual Client
                                                <p>Lorem ipsum dolor sit amet.</p>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="third-width">
                                        <div className="corporate">
                                            <input
                                                type="radio"
                                                id="corporate-client"
                                                name="client-type"
                                                value="corporate"
                                                checked={clientType === 'corporate'}
                                                onChange={handleClientTypeChange}
                                                required
                                            />
                                            <label htmlFor="corporate-client">
                                                Corporate Client
                                                <p>Lorem ipsum dolor sit amet.</p>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="input-row">
                                <div className="third-width">
                                    <label htmlFor="work-phone">Work Phone Number</label>
                                    <select id="work-phone" name="work-phone" required>
                                        <option value="">Select Work Phone Number</option>
                                        <option value="phone-1">Phone 1</option>
                                        <option value="phone-2">Phone 2</option>
                                        <option value="phone-3">Phone 3</option>
                                        {/* Add more phone options as needed */}
                                    </select>
                                </div>
                                <div className="third-width">
                                    <label htmlFor="work-email">Work Email Address</label>
                                    <input
                                        type="email"
                                        id="work-email"
                                        name="work-email"
                                        placeholder="Enter work email address"
                                        required
                                    />
                                </div>
                                <div className="third-width"></div>
                            </div>
                        </form>

                    </div>
                </section>

                <section className='end-part'>
                    <Link to='/'>
                        <button className="back">Back</button>
                    </Link>
                    <div className="button-group">
                        <button className="save-draft">Save as Draft</button>
                        <Link to="/productInformation">
                            <button className="continue">Continue</button>
                        </Link>
                    </div>
                </section>
            </Container>
        </>
    )
}

export default GeneralInformation