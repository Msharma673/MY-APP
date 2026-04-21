import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import TeachWithUsPage from '../../components/TeachWithUsPage/TeachWithUsPage';

function TeachWithUsFullPage() {
    return(
        <div className="TeachWithUsFullPage-Container">
            <NavBar />
            <TeachWithUsPage />
            <Footer />

        </div>
        
    )
}

export default TeachWithUsFullPage;
