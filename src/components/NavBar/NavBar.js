import React, { useState, useEffect, useRef } from 'react';
import './NavBar.css';
import { IonIcon } from '@ionic/react';
import { closeOutline, menuOutline } from 'ionicons/icons';
import logo from '../../assets/images/logo-main.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy';
import ContactModal from "../ContactModal/ContactModal";
import { color } from 'framer-motion';
import EnrolmentForm from '../EnrollmentForm/EnrolmentForm';

function NavBar() {
    const [isActive, setIsActive] = useState(false);
    const [isFixed, setisFixed] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState(false);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false); // Modal state
    const dropdownRef = useRef(null);
    const navigate = useNavigate();

    const [dialogOpen, setDialogOpen] = useState(false);
    
    const handleOpen = () => setDialogOpen(true);
    const handleClose = () => setDialogOpen(false);

    const toggleDropdown = (dropdownName) => {
        setActiveDropdown((prevDropdown) => (prevDropdown === dropdownName ? null : dropdownName));
    };

    const closeAllMenus = () => {
        setActiveDropdown(null);
        setIsActive(false);
    };

    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop,
                behavior: 'smooth',
            });
        }
    };

    const togglePrivacyPolicy = () => {
        setIsPrivacyPolicyOpen(!isPrivacyPolicyOpen);
    };

    const handleAcceptPrivacyPolicy = () => {
        setIsPrivacyPolicyOpen(false);
    };

    const toggleContactModal = () => {
        setIsContactModalOpen(!isContactModalOpen);
        closeNavbar(); // Close the navbar when the modal is opened
    };

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector(".header");
            if (header && window.scrollY > 100) {
                setisFixed(true);
            } else {
                setisFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                closeAllMenus();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

    const toggleNavbar = () => {
        setIsActive(!isActive);
    };

    const closeNavbar = () => {
        setIsActive(false);
    };

    const navigateToFreeCourses = () => {
        navigate('/maintainance');
    };

    const handleDownloadBrochure = () => {
        const brochureUrl = 'https://accentaura.com/asset/Accent_Aura_brochure.pdf';
        window.open(brochureUrl, '_blank');
    };

    return (
        <header className={`header ${isFixed ? 'fixed' : ''}`} data-header>
            <div className="container">
                <Link to="/" className="logo">
                    <img src={logo} width="120" height="10" alt="EduWeb logo" />
                </Link>
                <nav className={`navbar ${isActive ? "active" : ""}`} data-navbar ref={dropdownRef}>
                    <div className="wrapper">
                        <Link to="/" className="logo">
                            <img src={logo} width="162" height="50" alt="EduWeb logo" />
                        </Link>
                        <button className="nav-close-btn" aria-label="close menu" onClick={toggleNavbar} data-nav-toggler>
                            <IonIcon icon={closeOutline} />
                        </button>
                    </div>
                    <ul className="navbar-list">
                        <li className="navbar-item">
                            <Link className="navbar-link" onClick={closeNavbar} data-nav-link to="/">Home</Link>
                        </li>
                        <li className="navbar-item">
                            <Link className="navbar-link" onClick={closeNavbar} data-nav-link to="/courses">Courses</Link>
                        </li>
                        <li className="navbar-item dropdown">
                            <button className="navbar-link" onClick={() => toggleDropdown('resources')}>
                                Resources<i className="ri-arrow-down-s-line dropdown__arrow"></i>
                            </button>
                            <ul className={`dropdown-menu ${activeDropdown === 'resources' ? 'open' : ''}`}>
                                <li>
                                    <button className="navbar-link" onClick={handleDownloadBrochure}>
                                        Download Brochure
                                    </button>
                                </li>
                                <hr />
                                <li>
                                    <button className="navbar-link" onClick={togglePrivacyPolicy} data-nav-link>
                                        Privacy Policy
                                    </button>
                                </li>
                            </ul>
                        </li>
                        <li className="navbar-item">
                            <button
                                className="navbar-link"
                                onClick={toggleContactModal}
                                data-nav-link
                            >
                                Contact Us
                            </button>
                        </li>
                        <li className="navbar-item dropdown">
                            <button className="navbar-link" onClick={() => toggleDropdown('more')}>
                                More<i className="ri-arrow-down-s-line dropdown__arrow"></i>
                            </button>
                            <ul className={`dropdown-menu ${activeDropdown === 'more' ? 'open' : ''}`}>
                                <li><Link className="navbar-link" onClick={closeAllMenus} data-nav-link to="/about">About Us</Link></li>
                                <hr />
                                <li><Link className="navbar-link" onClick={closeAllMenus} data-nav-link to="/career">Teach with us</Link></li>
                                <hr />
                            </ul>
                        </li>
                    </ul>
                </nav>
                <div className="header-actions">
                    <button style={{color: 'white'}} className='btn-auth signup' onClick={handleOpen}>
                        Enroll Now
                    </button>
                    <EnrolmentForm open={dialogOpen} onClose={handleClose} />
                    <button className="header-action-btn" aria-label="open menu" onClick={toggleNavbar} data-nav-toggler>
                        <IonIcon icon={menuOutline} aria-hidden="true" />
                    </button>
                </div>
                <div className={`overlay ${isActive ? "active" : ""}`} onClick={closeNavbar} data-nav-toggler data-overlay></div>
            </div>

            {/* Privacy Policy Modal */}
            {isPrivacyPolicyOpen && (
                <PrivacyPolicy
                    onClose={togglePrivacyPolicy}
                    onAccept={handleAcceptPrivacyPolicy}
                />
            )}

            {/* Contact Modal */}
            {isContactModalOpen && (
                <ContactModal
                    isOpen={isContactModalOpen} 
                    onClose={toggleContactModal} 
                />
            )}
        </header>
    );
}

export default NavBar;
