// src/sections/Contact.js
import React from 'react';

function Contact({ data }) {
    if (!data) return null;

    return (
        <div className="contact-info">
            <p style={{ marginBottom: '1rem' }}>Email: {data.email}</p>
            <div className="social-links">
                {/* target="_blank": 새 탭에서 열기 */}
                {/* rel="noreferrer": 보안 및 성능을 위한 표준 속성 */}
                <a
                    href={data.github}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-link"
                >
                    GitHub
                </a>
                <a
                    href={data.blog}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-link"
                >
                    Blog
                </a>
            </div>
        </div>
    );
}

export default Contact;