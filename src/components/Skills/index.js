import React, { useCallback, useEffect, useState } from "react";
import * as S from './styles.js';
import { Accordion, AccordionTab } from 'primereact/accordion';
import Lottie from 'react-lottie';
import * as animationData from '../../lotties/computer_code.json';
import "./styles.css";

const Skills = () => {

    const arrowDownIcon =(
        <>
            <S.StyledArrowDownIcon />
        </>
    );

    const handleClick = (event, cardId, cardDescription) => {
       
        var descriptionCard = document.getElementById(cardDescription);
        var btnCard = document.getElementById('btn'+cardId);

        if(descriptionCard.style.opacity > 0){
            descriptionCard.style.opacity = 0;
            descriptionCard.style.display = 'none';
        }else{
        
            descriptionCard.style.display = '';
            descriptionCard.style.opacity = 0;
            var last = +new Date();
            var tick = function() {
            descriptionCard.style.opacity = +descriptionCard.style.opacity + (new Date() - last) / 600;
            last = +new Date();
                if (+descriptionCard.style.opacity < 1) {
                    (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
                }
            };

            tick();
        }
        
        if(btnCard.children[0].style.rotate === '180deg'){
            btnCard.children[0].style.rotate = '360deg';
        }else if(btnCard.children[0].style.rotate = '360deg'){
            btnCard.children[0].style.rotate = '180deg';
        }
    }

    const titleFrontEnd = (
        <S.StyledTitleCard>FRONTEND</S.StyledTitleCard>
    );

    const titleBackEnd = (
        <S.StyledTitleCard>BACKEND</S.StyledTitleCard>
    );

    const titleOthers = (
        <S.StyledTitleCard>OUTROS</S.StyledTitleCard>
    );

    const footerCards = (cardId, descriptionId) => {
    
        return <S.StyledButtonArrow onClick={(e) => handleClick(e, cardId, descriptionId)} id={'btn'+cardId} className="btnFooterCard -close" severity="secondary" size="small" text raised rounded> {arrowDownIcon} </S.StyledButtonArrow>
        
    };

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        }
    };

    return (
        <>
            <div className="grid" style={{display: 'contents'}}>

                <div className="col-12 sm:col-12 md:col-12 lg:col-12 xl:col-12" style={{width: '100%', display: 'flex', padding: '0px'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="moveAnimation" viewBox="0 0 1440 320" style={{width: '100%', position: 'absolute', zIndex: '-2'}}><path fill="#00000e" fill-opacity="1" d="M0,64L24,96C48,128,96,192,144,218.7C192,245,240,235,288,218.7C336,203,384,181,432,154.7C480,128,528,96,576,96C624,96,672,128,720,138.7C768,149,816,139,864,117.3C912,96,960,64,1008,64C1056,64,1104,96,1152,144C1200,192,1248,256,1296,266.7C1344,277,1392,235,1416,213.3L1440,192L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="moveAnimation" viewBox="0 0 1440 320" style={{width: '100%', position: 'absolute', zIndex: '-1'}}><path fill="#273036" fill-opacity="1" d="M0,192L24,197.3C48,203,96,213,144,229.3C192,245,240,267,288,245.3C336,224,384,160,432,154.7C480,149,528,203,576,202.7C624,203,672,149,720,138.7C768,128,816,160,864,165.3C912,171,960,149,1008,149.3C1056,149,1104,171,1152,160C1200,149,1248,107,1296,128C1344,149,1392,235,1416,277.3L1440,320L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" style={{marginTop: '6%'}} viewBox="0 0 1440 320"><path fill="#00000e" d="M0,96L30,90.7C60,85,120,75,180,96C240,117,300,171,360,165.3C420,160,480,96,540,96C600,96,660,160,720,165.3C780,171,840,117,900,128C960,139,1020,213,1080,213.3C1140,213,1200,139,1260,106.7C1320,75,1380,85,1410,90.7L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
                </div>
                
                <div className="card" id="skills" style={{width: '100%', backgroundColor: '#00000e'}}>

                    <div className="card-container">

                        <div className="inline-block col-12">
                            <S.StyledCardSkills>
                            
                            <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                                <S.SkillsTitle>HABILIDADES</S.SkillsTitle>
                                <S.AnimationLottie>
                                    <Lottie options={defaultOptions} width={'250px'} style={{margin: '0px 15% 0px 0px'}} />
                                </S.AnimationLottie>
                            </div>
                            
                            <div className="col-12 sm:col-12 md:col-4 lg:col-4 xl:col-4" data-aos="fade-up" style={{display: 'inline-grid'}}>
                                <S.StyledCard className="cardFront" title={titleFrontEnd} footer={footerCards('cardFront', 'descriptionFront')}>
                                    <h1><S.StyledJsIcon /> <S.StyledBootstrapIcon /> <S.StyledReactIcon /></h1>
                                    <p className="m-0 description" id="descriptionFront" style={{display: 'none'}}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non ultricies neque. Sed eleifend est sit amet libero efficitur auctor. Aliquam eget faucibus nisl, vel varius leo. In lobortis justo risus, et tempus purus tincidunt a. Nam faucibus, mauris feugiat malesuada congue, nisl felis facilisis lacus, ut mattis nulla eros fermentum libero. Etiam blandit est vitae efficitur venenatis. Morbi in quam posuere, posuere ante ut.
                                    </p>

                                </S.StyledCard>
                            </div>

                            <div className="col-12 sm:col-12 md:col-4 lg:col-4 xl:col-4" data-aos="fade-up" style={{display: 'inline-grid'}}>
                                <S.StyledCard className="cardBack" title={titleBackEnd} footer={footerCards('cardBack', 'descriptionBack')}>
                                    <h1><S.StyledPhpIcon /><S.StyledYiiIcon /><S.StyledLaravelIcon/></h1>
                                    <p className="m-0 description" id="descriptionBack" style={{display: 'none'}}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non ultricies neque. Sed eleifend est sit amet libero efficitur auctor. Aliquam eget faucibus nisl, vel varius leo. In lobortis justo risus, et tempus purus tincidunt a. Nam faucibus, mauris feugiat malesuada congue, nisl felis facilisis lacus, ut mattis nulla eros fermentum libero. Etiam blandit est vitae efficitur venenatis. Morbi in quam posuere, posuere ante ut.
                                    </p>
                                </S.StyledCard>
                            </div>

                            <div className="col-12 sm:col-12 md:col-4 lg:col-4 xl:col-4" data-aos="fade-up" style={{display: 'inline-grid'}}>
                                <S.StyledCard className="cardOthers" title={titleOthers} footer={footerCards('cardOthers', 'descriptionOthers')}>
                                    <h1><S.StyledMysqlIcon /><S.StyledGitIcon /><S.StyledChipIcon /></h1>
                                    <p className="m-0 description" id="descriptionOthers" style={{display: 'none'}}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non ultricies neque. Sed eleifend est sit amet libero efficitur auctor. Aliquam eget faucibus nisl, vel varius leo. In lobortis justo risus, et tempus purus tincidunt a. Nam faucibus, mauris feugiat malesuada congue, nisl felis facilisis lacus, ut mattis nulla eros fermentum libero. Etiam blandit est vitae efficitur venenatis. Morbi in quam posuere, posuere ante ut.
                                    </p>
                                </S.StyledCard>
                            </div>

                            </S.StyledCardSkills>
                        </div>
                        
                    </div>

                </div>

            </div>
        </>
    );
}

export default Skills;