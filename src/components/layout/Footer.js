import React from 'react';
import { siteData } from '../../content/site';

export default function Footer() {
    return (
        <footer className="main-footer">
            <div className="container">
                <p>© {new Date().getFullYear()} {siteData.hero.name}. All rights reserved.</p>
            </div>
        </footer>
    );
}