import React from 'react';
import { siteData } from '../../content/site';

export default function About() {
    const { description, skills } = siteData.about;
    return (
        <section id="about" className="container py-20">
            <h2 className="section-title">About Me</h2>
            <div className="card">
                <p className="about-desc">{description}</p>
                <div className="skill-tags">
                    {skills?.map((skill, i) => (
                        <span key={i} className="skill-badge">{skill}</span>
                    ))}
                </div>
            </div>
        </section>
    );
}