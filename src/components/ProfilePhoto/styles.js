import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: block;
    position: absolute;
    margin-top: -220px;
`;

export const Photo = styled.div`
        @media (max-width: 768px) {
            width: 220px;
            height: 220px;
        }
        @media (min-width: 768px) {
            width: 278px;
            height: 270px;
        }
        background-color: #b5a7a7;
        margin: 0 auto;
        border-radius: 437px;
        background: url(${props => props.photo});
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