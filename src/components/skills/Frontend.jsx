import React from "react";

const Frontend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Subjects</h3>
            
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                    <i className = 'bx bx-badge-check'></i>

                    <div>
                        <h3 className="skills__name">DSA</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                    </div>

                    <div className="skills__data">
                    <i className = 'bx bx-badge-check'></i>

                    <div>
                        <h3 className="skills__name">DAA</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                    </div>

                    <div className="skills__data">
                    <i className = 'bx bx-badge-check'></i>

                    <div>
                        <h3 className="skills__name">MPCA</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                    </div>
                </div>

                <div className="skills__group">
                    <div className="skills__data">
                    <i className = 'bx bx-badge-check'></i>

                    <div>
                        <h3 className="skills__name">CN</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                    </div>

                    <div className="skills__data">
                    <i className = 'bx bx-badge-check'></i>

                    <div>
                        <h3 className="skills__name">OS</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                    </div>

                    <div className="skills__data">
                    <i className = 'bx bx-badge-check'></i>

                    <div>
                        <h3 className="skills__name">ML/DL</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Frontend