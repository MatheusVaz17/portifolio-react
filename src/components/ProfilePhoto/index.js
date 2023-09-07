import React, { useEffect, useState } from "react";
import * as S from './styles';
import api from './../../services/api';
import Typewriter from 'typewriter-effect';
import './styles.css';
import Lottie from 'react-lottie';

const ProfilePhoto = () => {

    const [user, setUser] = useState();

    useEffect(() => {
        api
        .get("/user/get-data")
        .then((response) => setUser(response.data))
        .catch((err) => {
            console.log("Erro: " + err);
        });
    }, []);

    const name = user?.username;

    return (
        <S.Container>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <S.Photo data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" photo={user?.profilePhoto} />
            </div>
            <S.Info>
                <h1>{name}</h1>
               
                    <h2 style={{display: 'flex', justifyContent: 'center'}}>Desenvolvedor 
                    <Typewriter
                    options={{
                        strings: ['Web Full Stack', 'PHP', 'React'],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                    </h2>
                
            </S.Info>
        </S.Container>
    );
};
    
export default ProfilePhoto;