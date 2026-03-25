// src/sections/Projects.js
import React from 'react';

function Projects({ data }) {
    if (!data) return null;

    return (
        <div className="project-list">
            {data.map((p) => (
                <div key={p.id} className="project-card">
                    <h3 className="project-title">{p.title}</h3>

                    <p className="project-desc">{p.desc}</p>

                    {/* 랭크: 설명 아래, 링크 위 */}
                    <div className="project-ranks">
                        {p.ranks?.map((rank, i) => (
                            <span key={i} className="rank-badge">{rank}</span>
                        ))}
                    </div>

                    {/* 링크: 최하단 */}
                    <div className="project-links">
                        {p.links?.map((link, i) => (
                            <a key={i} href={link.url} target="_blank" rel="noreferrer" className="link-btn">
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Projects;