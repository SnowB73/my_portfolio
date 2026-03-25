import React from 'react';
import { siteData } from '../../content/site';

export default function Hero() {
    const { name, major, email, education, title, subtitle, buttonText } = siteData.hero;

    return (
        <section id="home">
            <div className="hero-info">
                <h1 className="hero-name">{name}</h1>
                <p className="hero-major">{major}</p>
                <p className="text-gray">{email}</p>

                <div className="hero-edu" style={{ marginTop: '1rem' }}>
                    {education?.map((edu, i) => (
                        <p key={i}>{edu.school} ({edu.degree}) | {edu.period}</p>
                    ))}
                </div>
            </div>

            {/* education과 title 사이의 공백 */}
            <div style={{ height: '3rem' }}></div>

            <div className="hero-content">
                <h2 className="hero-title">{title}</h2>
                <p className="hero-subtitle text-gray">{subtitle}</p>
                <a href="#projects" className="cta-button">{buttonText}</a>
            </div>
        </section>
    );
}