import React from "react";

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
            <i className='bx bx-bulb about__icon'></i>

                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">3rd Year + Research Intern @CCNCS.</span>
            </div>

            <div className="about__box">
            <i className='bx bx-award about__icon'></i>

                <h3 className="about__title">Scholarships</h3>
                <span className="about__subtitle">3x Distinction Scholar.</span>
            </div>

            <div className="about__box">
            <i className='bx bxs-graduation about__icon'></i>

                <h3 className="about__title">CGPA</h3>
                <span className="about__subtitle">8.4</span>
            </div>
        </div>
    )
}

export default Info