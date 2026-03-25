import React from 'react';
function Hero({ data }) {
    if (!data) return null;
    return (
        <div className="hero-container">
            <h1 className="hero-name">{data.name}</h1>
            <p style={{fontWeight:'bold'}}>{data.major}</p>
            <p style={{color:'var(--gray)'}}>{data.email}</p>
            <div className="hero-edu">
                <h3 style={{marginBottom:'10px'}}>Education</h3>
                {data.education?.map((edu, i) => (
                    <p key={i}><strong>{edu.school}</strong> ({edu.degree}) | {edu.period}</p>
                ))}
            </div>
            <h2>{data.title}</h2>
            <p style={{margin:'1rem 0'}}>{data.subtitle}</p>
            <a href="#projects" className="cta-button">{data.buttonText}</a>
        </div>
    );
}
export default Hero;