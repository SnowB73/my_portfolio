import React from 'react';
import { siteData } from '../../content/site';

export default function Projects() {
    return (
        <section id="projects" className="container py-20">
            <h2 className="section-title">Projects</h2>
            <div className="project-list">
                {siteData.projects.map((p) => (
                    <div key={p.id} className="card project-card">
                        <h3>{p.title}</h3>
                        <p style={{color: 'var(--gray)', margin: '15px 0'}}>{p.desc}</p>
                        <div className="project-ranks">
                            {p.ranks.map((rank, i) => (
                                <span key={i} className="rank-badge">{rank}</span>
                            ))}
                        </div>
                        <div className="project-links">
                            {p.links.map((link, i) => (
                                <a key={i} href={link.url} target="_blank" rel="noreferrer" className="link-btn">{link.label}</a>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}