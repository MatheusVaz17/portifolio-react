import React, { useEffect, useState } from "react";
import api from './../../services/api';
import Lottie from 'react-lottie';
import {Card} from 'primereact/card';
import * as animationData from '../../lotties/programming.json';
import * as S from './styles';
import { useMediaQuery } from 'react-responsive';


const AboutMe = () => {

    const [user, setUser] = useState();

    useEffect(() => {
        api
        .get("/user/get-data")
        .then((response) => setUser(response.data))
        .catch((err) => {
            console.log("Erro: " + err);
        });
    }, []);

    const style_about = {
        width: '100%'
    };

    const style_content = {
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
    }

    const screenWidth = window.innerWidth;

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
            <div style={style_about}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000000" fill-opacity="1" d="M0,288L30,256C60,224,120,160,180,138.7C240,117,300,139,360,170.7C420,203,480,245,540,245.3C600,245,660,203,720,202.7C780,203,840,245,900,266.7C960,288,1020,288,1080,256C1140,224,1200,160,1260,154.7C1320,149,1380,203,1410,229.3L1440,256L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path></svg>
            </div>

            <div id="aboutMe">
                <Lottie data-aos="fade-right"  options={defaultOptions} width={screenWidth < 760 ? '195px' : '400px'} height={screenWidth < 760 ? '155px' : '300px'} />
           
                <div style={style_content} >
                    <S.CardAboutStyle data-aos="zoom-in" data-aos-once="true" data-aos-offset="300" data-aos-easing="ease-in-sine" className="md:w-25rem" style={{boxShadow: '7px 7px'}}>
                    <S.TitleAboutMe>SOBRE MIM ☕</S.TitleAboutMe>
                        <p className="m-0">
                            {user?.description}
                        </p>
                    </S.CardAboutStyle>
                </div>
            </div>
            
        </>
        
    );

}

export default AboutMe