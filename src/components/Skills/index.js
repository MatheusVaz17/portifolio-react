import React, { useEffect, useState } from "react";
import api from './../../services/api';

const Skills = () => {
    return (
        <>
            <div style={{display: 'grid'}}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000000" fill-opacity="1" d="M0,96L30,90.7C60,85,120,75,180,96C240,117,300,171,360,165.3C420,160,480,96,540,96C600,96,660,160,720,165.3C780,171,840,117,900,128C960,139,1020,213,1080,213.3C1140,213,1200,139,1260,106.7C1320,75,1380,85,1410,90.7L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>

                <div style={{width: '100%', height: '200px', backgroundColor: 'black'}}>

                </div>
            </div>
        </>
    );
}

export default Skills;