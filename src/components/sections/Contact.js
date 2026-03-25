import React from 'react';
import { siteData } from '../../content/site';

export default function Contact() {
    const { email, github, blog } = siteData.contact;
    return (
        <section id="contact" className="container py-20">
            <h2 className="section-title">Contact Me</h2>
            <div className="contact-info">
                <p>Email: {email}</p>
                <div className="social-links">
                    <a href={github} target="_blank" rel="noreferrer" className="contact-link">GitHub</a>
                    <a href={blog} target="_blank" rel="noreferrer" className="contact-link">Blog</a>
                </div>
            </div>
        </section>
    );
}