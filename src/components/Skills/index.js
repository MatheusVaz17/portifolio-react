import React, { useEffect, useState } from "react";
import {Card} from 'primereact/card';
import {SiJavascript, SiBootstrap, SiPhp, SiLaravel, SiMysql} from 'react-icons/si';
import {FaReact} from 'react-icons/fa';
import {DiYii} from 'react-icons/di';
import {BiGitBranch, BiChip} from 'react-icons/bi';

const Skills = () => {

    const titleFrontEnd = (
        <>
            FRONTEND <SiJavascript /> <SiBootstrap /> <FaReact />
        </>
    );

    const titleBackEnd = (
        <>
            BACKEND <SiPhp /><DiYii/><SiLaravel/>
        </>
    );

    const titleOthers = (
        <>
            OUTROS <SiMysql /><BiGitBranch /><BiChip />
        </>
    );

    return (
        <>
            <div className="grid" style={{display: 'contents'}}>

                <div className="col-12 sm:col-12 md:col-12 lg:col-12 xl:col-12" style={{width: '100%', display: 'flex', padding: '0px'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000000" fill-opacity="1" d="M0,96L30,90.7C60,85,120,75,180,96C240,117,300,171,360,165.3C420,160,480,96,540,96C600,96,660,160,720,165.3C780,171,840,117,900,128C960,139,1020,213,1080,213.3C1140,213,1200,139,1260,106.7C1320,75,1380,85,1410,90.7L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
                </div>
                
                <div className="card" style={{width: '100%', backgroundColor: 'black'}}>

                    <div className="card-container">

                        <div className="inline-block col-12">
                            <Card>

                            <h1>HABILIDADES</h1>

                            <div className="inline-block col-12 sm:col-12 md:col-4 lg:col-4 xl:col-4">
                                <Card title={titleFrontEnd} style={{boxShadow: '7px 7px gray', border: '1px solid darkgray'}}>
                                    <p className="m-0">
                                        
                                    </p>
                                </Card>
                            </div>

                            <div className="inline-block col-12 sm:col-12 md:col-4 lg:col-4 xl:col-4">
                                <Card title={titleBackEnd} style={{boxShadow: '7px 7px gray', border: '1px solid darkgray'}}>
                                    <p className="m-0">
                                        
                                    </p>
                                </Card>
                            </div>

                            <div className="inline-block col-12 sm:col-12 md:col-4 lg:col-4 xl:col-4">
                                <Card title={titleOthers} style={{boxShadow: '7px 7px gray', border: '1px solid darkgray'}}>
                                    <p className="m-0">
                                        
                                    </p>
                                </Card>
                            </div>

                            </Card>
                        </div>
                        
                    </div>

                </div>

            </div>
        </>
    );
}

export default Skills;