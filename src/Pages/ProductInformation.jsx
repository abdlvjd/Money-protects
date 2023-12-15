import React from 'react'
import Header from '../Components/Header'
import { Col, Container, Row } from 'react-bootstrap'
import exportIMG from '../Assets/Export.svg'
import './ProductInformation.css'
import { Link } from 'react-router-dom';
import activeLoanIMG from '../Assets/Active Loan Details.svg'
import agreementIMG from '../Assets/Agreement.svg'
import doneIMG from '../Assets/Done.svg'

function ProductInformation() {
    return (
        <>
            <Header />
            <section class="line-container">
                <div class="half-colored-line-product"></div>
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
                                <img className='normal-step active-icons' src={activeLoanIMG} alt="" />
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
                    <h3>Product Information</h3>
                    <hr />
                    <div className="form-container">
                        <form>
                            {/* Existing input */}
                            <div className="input-row">
                                <div className="third-width">
                                    <label htmlFor="what-product">What Product do you apply for?</label>
                                    <select id="what-product" name="what-product" required>
                                        <option value="">Select Product</option>
                                        <option value="Product A">Product A</option>
                                        <option value="Product B">Product B</option>
                                        <option value="Product C">Product C</option>
                                        {/* Add more product options as needed */}
                                    </select>
                                </div>
                                <div className="third-width">
                                    <label htmlFor="sleeping-period">Sleeping Period Duration</label>
                                    <select id="sleeping-period" name="sleeping-period" required>
                                        <option value="">Select Duration</option>
                                        <option value="less-than-6">Less than 6 hours</option>
                                        <option value="6-to-8">6 to 8 hours</option>
                                        <option value="more-than-8">More than 8 hours</option>
                                        {/* Add more duration options as needed */}
                                    </select>
                                </div>
                                <div className="third-width"></div>
                            </div>
                        </form>

                    </div>
                </section>

                <section className='general-information'>
                    <h3>Current Loan & Mortgage Details</h3>
                    <hr />
                    <div className="form-container">
                        <form>
                            {/* Marital Status */}
                            <div className="input-row">
                                <div className="third-width">
                                    <label htmlFor="marital-status">Marital Status</label>
                                    <select id="marital-status" name="marital-status" required>
                                        <option value="">Select Marital Status</option>
                                        <option value="married">Married</option>
                                        <option value="single">Single</option>
                                        <option value="divorced">Divorced</option>
                                        {/* Add more marital status options as needed */}
                                    </select>
                                </div>
                                {/* Spouse Name */}
                                <div className="third-width">
                                    <label htmlFor="spouse-name">Spouse Name</label>
                                    <input type="text" id="spouse-name" name="spouse-name" placeholder="Enter spouse name" required />
                                </div>
                                {/* Number of Dependents */}
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

                <section className='general-information mb-5'>
                    <h3>Upload Documents</h3>
                    <hr />
                    <Row>
                        <Col lg={6}>
                            <h5>Document 1</h5>
                            <div class="file-upload w-100">
                                <input type="file" id="upload" accept=".svg, .png, .jpg, .gif" />
                                <label for="upload">
                                    <img src={exportIMG} alt="" />
                                    <p><span>Click to upload </span>
                                        or drag and drop <br />
                                        SVG, PNG, JPG or GIF (max. 800x400px)</p>
                                </label>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <h5>Document 2</h5>
                            <div class="file-upload w-100">
                                <input type="file" id="upload" accept=".svg, .png, .jpg, .gif" />
                                <label for="upload">
                                    <img src={exportIMG} alt="" />
                                    <p><span>Click to upload </span>
                                        or drag and drop <br />
                                        SVG, PNG, JPG or GIF (max. 800x400px)</p>
                                </label>
                            </div>
                        </Col>
                    </Row>
                </section>

                <section className='end-part'>
                    <Link to='/generalinformation'>
                        <button className="back">Back</button>
                    </Link>
                    <div className="button-group">
                        <button className="save-draft">Save as Draft</button>
                        <Link to="/agreement">
                            <button className="continue">Continue</button>
                        </Link>
                    </div>
                </section>
            </Container>
        </>
    )
}

export default ProductInformation