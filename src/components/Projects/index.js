import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';
import getProjectsData from '../../services/ProjectsService';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    const responsiveOptions = [
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    useEffect(() => {
        getProjectsData().then((data) => setProjects(data));
    }, []);

    const productTemplate = (project) => {
        return (
            <div className="border-1 surface-border border-round m-2 text-center py-5 px-3" style={{backgroundColor: "white"}}>
                <div className="mb-3">
                    <img src={project.image_url} alt={project.name} className="w-6 shadow-2" />
                </div>
                <div>
                    <h4 className="mb-1">{project.name}</h4>
                    <p className="m-0">{project.description}</p>
                </div>
            </div>
        );
    }
    return (
        <div className="card" style={{backgroundColor: "rgb(0, 0, 14)"}}>

            <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                <h1 style={{color: 'white', marginTop: '5%'}}>PROJETOS</h1>
            </div>
            <Carousel numScroll={1} autoplayInterval={5000} numVisible={3} value={projects} itemTemplate={productTemplate} responsiveOptions={responsiveOptions} />

        </div>
    )

}

export default Projects;