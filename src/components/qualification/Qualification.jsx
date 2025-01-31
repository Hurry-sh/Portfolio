import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (
        <section className="qualification section" id = "qualification">
            <h2 className="section__title">My Journey</h2>
            <span className="section__subtitle">Here is my personal journey 📈</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification__icon"></i>{" "} Education
                    </div>

                    <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i>{" "} Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">B.Tech CSE</h3>
                                <span className="qualification__subtitle">PES University</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2022 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">12th PUC</h3>
                                <span className="qualification__subtitle">Sri Chaitanya</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2020 - 2022
                                </div>
                            </div>  
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">10th CBSE</h3>
                                <span className="qualification__subtitle">BGS-NPS</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2016 - 2020
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">ICSE</h3>
                                <span className="qualification__subtitle">Clarence Public School</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2009 - 2016
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>



                <div className="qualification__sections">
                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">3rd year</h3>
                                <span className="qualification__subtitle">CGPA : 8.49</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> August 2024 - Present
                                </div>
                            </div>  
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Research Intern</h3>
                                <span className="qualification__subtitle">CCNCS</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> June 2024 - July 2024
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">2nd year</h3>
                                <span className="qualification__subtitle">CGPA : 8.4</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2023 - 2024
                                </div>
                            </div>  
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">1st year</h3>
                                <span className="qualification__subtitle">CGPA : 8.43</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2022 - 2023
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">11th - 12th</h3>
                                <span className="qualification__subtitle">Grade : 96.25% 12th PUC</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2020 - 2022
                                </div>
                            </div>  
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">7th - 10th</h3>
                                <span className="qualification__subtitle">Grade : 91% 10th CBSE</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2016 - 2020
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Qualification;