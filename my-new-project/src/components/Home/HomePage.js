import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import cowImage from '../assets/images/3.avif';
import cowImage1 from '../assets/images/5.jpg';

const HomePage = () => {
    return (
        <main className="home" style={{ padding: '0', paddingTop: '60px',paddingBottom: '60px' }}>

            <section className="intro">
                <div className="bg-img" style={{ 
                    backgroundImage: `url(${cowImage})`, 
                    position: 'relative', 
                    width: '100%', 
                    height: '100vh', 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center'
                }}>
                    <div className="overlay" style={{
                        position: 'absolute', 
                        top: 0, 
                        left: 0, 
                        right: 0, 
                        bottom: 0, 
                        background: 'rgba(0, 0, 0, 0.477)', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center'
                    }}>
                        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px', textAlign: 'left' }}>
                            <div className="intro-content" style={{ color: 'white', padding: '20px', borderRadius: '5px' }}>
                                <h1 style={{ animation: 'bounce 5s infinite' }}>Complete Solution for Dairy Business</h1>
                                <p>Welcome to DairySync, your ultimate partner in revolutionizing the dairy industry.
                                    Our comprehensive suite of tools and services is designed to streamline every aspect of your dairy business, from herd management to product distribution.
                                    With DairySync, you gain real-time insights, optimize operations, and enhance productivity, ensuring the highest quality of dairy products for your customers. Join us in transforming your dairy business into a modern, efficient, and profitable enterprise.
                                    Experience the future of dairy management with DairySync.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="features">
            <div className="container">
                <h3>Features</h3>
                <ul className="feature-list">
                    <li>
                        <h4>Daily Milk Intake Recording</h4>
                        <p>Access your customer's complete profile.</p>
                        <p>Record Milk Intake Entry.</p>
                        <p>Create FAT and SNF Charts.</p>
                        <p>View Milk Intake History with detailed logs for each customer.</p>
                    </li>
                    <li>
                        <h4>Billing and Payments</h4>
                        <p>Automated Billing: Generate bills based on the quantity and quality of milk supplied by each customer over a specified period.</p>
                        <p>Payment Tracking: Record and track payments, including due amounts and payment dates.</p>
                        <p>Invoice Generation: Automatically create and send invoices and receipts to customers.</p>
                    </li>
                    <li>
                        <h4>Employee Management</h4>
                        <p>Maintain details of employees involved in milk collection, quality testing, and administrative tasks.</p>
                        <p>Assign daily tasks to employees and track their performance.</p>
                    </li>
                    <li>
                        <h4>Notifications and Alerts</h4>
                        <p>Provide customers with comprehensive reports and regular notifications about the collected milk.</p>
                        <p>Payment Reminders: Send automated reminders to customers about upcoming or overdue payments.</p>
                    </li>
                </ul>
            </div>
            <style jsx>{`
                .features {
                    background-color: #fff;
                    padding: 50px 0;
                }

                .features h3 {
                    text-align: center;
                    margin-bottom: 40px;
                }

                .feature-list {
                    list-style-type: disc;
                    padding: 0;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    margin: 0;
                }

                .feature-list li {
                    flex: 1 1 calc(50% - 20px);
                    background-color: #f1f1f1;
                    margin: 10px;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                    display: flex;
                    flex-direction: column;
                }

                .feature-list h4 {
                    margin-top: auto;
                    margin-bottom: 15px;
                }
            `}</style>
        </section>

            <section className="about" style={{ padding: '50px 0', backgroundColor: '#f9f9f9' }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px', textAlign: 'left' }}>
                    <div className="bg-img" style={{ 
                        backgroundImage: `url(${cowImage1})`, 
                        position: 'relative', 
                        width: '100%', 
                        height: '100vh', 
                        backgroundSize: 'cover', 
                        backgroundPosition: 'center'
                    }}>
                        <div className="overlay" style={{
                            position: 'absolute', 
                            top: 0, 
                            left: 0, 
                            right: 0, 
                            bottom: 0, 
                            background: 'rgba(0, 0, 0, 0.477)', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center'
                        }}>
                            <h3 style={{ color: 'white', textAlign: 'center', padding: '20px', marginBottom: '20px' }}>About Us</h3>
                            <p style={{ color: 'white', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                                At DairySync, we are passionate about revolutionizing the dairy industry with innovative solutions...
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Contact US            */}
            <section className="contact" style={{ padding: '50px 0', backgroundColor: '#f9f9f9' }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px', textAlign: 'left' }}>
                    <h2 className="text-center" style={{ paddingTop: '2px', paddingBottom: '2px' }}>Have questions? Get in touch with us</h2>
                    <div className="row">
                        <div className="col-xl-6" style={{ paddingBottom: '2px' }}>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email Address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1"
                                        aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                        <div className="col-xl-6" style={{ paddingBottom: '2px' }}>
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Email ID
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            example@example.com
                                        </div>
                                    </div>
                                </div>
                                {/* Other accordion items */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container">
                <div className="row">
                {/* Company Information */}
                    <div className="col-md-4 mb-2">
                        <h3>Dairy Sync</h3>
                        <p>Enim minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis sed aute irure.</p>
                        <p><strong>Phone:</strong> +91 1111111111</p>
                        <p><strong>Email:</strong> example@example.com</p>
                        <p><strong>Address:</strong> Example, Example 413801 </p>
                    </div>
                {/* Quick Links */}
                    <div className="col-md-4 mb-2 text-center">
                        <h3>Quick Links</h3>
                        <ul className="list-unstyled">
                        <li><a href="home" className="text-white">Home</a></li>
                        <li><a href="#about" className="text-white">About Us</a></li>
                        <li><a href="#properties" className="text-white">Properties</a></li>
                        <li><a href="contact" className="text-white">Contact</a></li>
                        </ul>
                    </div>
                {/* Social Media Links */}
                    <div className="col-md-4 mb-2 text-center">
                        <h3>Follow Us</h3>
                        <a href="#" className="text-white mr-3"><i className="fab fa-facebook-f"></i> Facebook</a><br />
                        <a href="#" className="text-white mr-3"><i className="fab fa-twitter"></i> Twitter</a><br />
                        <a href="#" className="text-white mr-3"><i className="fab fa-instagram"></i> Instagram</a><br />
                        <a href="#" className="text-white"><i className="fab fa-linkedin-in"></i> LinkedIn</a>
                    </div>
                </div>
            </div>
            {/* <footer style={{
                backgroundColor: '#f1f1f1', 
                padding: '10px', 
                position: 'fixed', 
                bottom: 0, 
                width: '100%'
            }}>
                <p className="text-center">DairySync &copy; 2023</p>
            </footer> */}
        </main>
    );
};

export default HomePage;
