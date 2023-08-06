// import React from "react";
import Tipi from "../components/tipi-gallery";
import MainLayout from "../layout/MainLayout";

function About() {

    return (
        <MainLayout>
            <div className='section'>
                <h2>Tipi</h2>
                {/* add room gallery */}


                <Tipi />


                <h3>Seasonal Tipi</h3>
                <p className='info-text'>We invite you to experience sleeping under the stars in a spacious tipi and the comfort of a queen bed. </p>
                <img src="https://github.com/Star-Cat13/3BM/blob/main/public/tipi-front.jpg?raw=true" alt="" />
            </div>

        </MainLayout>
    );
}

export default About;