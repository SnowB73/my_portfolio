import React from 'react';
function About({ data }) {
    if (!data) return null;
    return (
        <div>
            <p>{data.description}</p>
            <div style={{display:'flex', gap:'10px', marginTop:'15px', flexWrap:'wrap'}}>
                {data.skills?.map((s, i) => <span key={i} style={{background:'#eee', padding:'5px 10px', borderRadius:'15px', fontSize:'0.8rem'}}>{s}</span>)}
            </div>
        </div>
    );
}
export default About;