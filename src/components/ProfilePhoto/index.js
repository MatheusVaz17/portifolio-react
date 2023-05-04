import React, { useEffect, useState } from "react";
import * as S from './styles';
import api from './../../services/api';

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
            <S.Photo photo={user?.profilePhoto} />
            <S.Info>
                <h1>{name}</h1>
                <h2>{'Desenvolvedor Web FullStack'}</h2>
            </S.Info>
        </S.Container>
    );
};
    
export default ProfilePhoto;