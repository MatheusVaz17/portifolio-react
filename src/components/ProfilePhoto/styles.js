import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: block;
    position: absolute;
    margin-top: -270px;
`;

export const Photo = styled.div`
        width: 278px;
        height: 270px;
        background-color: #b5a7a7;
        margin: 0 auto;
        border-radius: 437px;
        background: url(https://cf.workana.com/logos/09cf6f06ded4aba223b232dd2dfb0631/cj/56823274_787204115006311_8794291962032160768_n_192_192.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        border: 3px solid white;
`;

export const Info = styled.div`
    width: 100%;
    display: blck;
    
    h1{
        text-align: center;
        color: white;
        font-weight: 700;
    }
    h2{
        text-align: center;
        color: white;
        font-weight: 700;
    }
`;