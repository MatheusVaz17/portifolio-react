import React from "react";
import Lottie from 'react-lottie';
import {Card} from 'primereact/card';
import * as animationData from '../../lotties/programming.json';
import * as S from './styles';
import { useMediaQuery } from 'react-responsive';

const AboutMe = () => {

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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000000" d="M0,224L30,213.3C60,203,120,181,180,197.3C240,213,300,267,360,261.3C420,256,480,192,540,160C600,128,660,128,720,149.3C780,171,840,213,900,229.3C960,245,1020,235,1080,202.7C1140,171,1200,117,1260,117.3C1320,117,1380,171,1410,197.3L1440,224L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path></svg>
            </div>

            
            <Lottie options={defaultOptions} width={screenWidth < 760 ? '195px' : '400px'} height={screenWidth < 760 ? '155px' : '300px'} />
           

            <div style={style_content}>
                <Card  className="md:w-25rem" style={{width: '50%'}}>
                {/* title="Sobre Mim" */}
                <S.TitleAboutMe>Sobre Mim</S.TitleAboutMe>
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
                        numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                    </p>
                </Card>
            </div>
        </>
        
    );

}

export default AboutMe