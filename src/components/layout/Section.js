import React from 'react';

function Section({ id, title, children }) {
    return (
        <section id={id} className="section-container">
            <div className="container">
                {title && <h2 className="section-title">{title}</h2>}
                {children}
            </div>
        </section>
    );
}
export default Section;