import React from "react";

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
            <i className='bx bx-bulb about__icon'></i>

                <h3 className="about__title">Club Activity</h3>
                <span className="about__subtitle">Technical Member @NeuralHive, the AIML club of PESU-ECC</span>
            </div>


            <div className="about__box">
            <i className='bx bx-briefcase-alt-2 about__icon'></i>

                <h3 className="about__title">Internships</h3>
                <span className="about__subtitle">Research Intern @CCNCS & @C3I + Data Engineer @BigBasket</span>
            </div>

            <div className="about__box">
            <i className='bx bx-medal about__icon'></i>

                <h3 className="about__title">Scholarships</h3>
                <span className="about__subtitle">6x Distinction Scholar</span>
            </div>

            <div className="about__box">
            <i className='bx bxs-graduation about__icon'></i>

                <h3 className="about__title">CGPA</h3>
                <span className="about__subtitle">8.57</span>
            </div>
        </div>
    )
}

export default Info