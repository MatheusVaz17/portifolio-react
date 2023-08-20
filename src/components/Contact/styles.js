import styled from "styled-components";
import { Card } from "primereact/card";
import {IoLogoWhatsapp} from 'react-icons/io';

export const TitleContact = styled.h1`
    display: block;
    color: var(--color-title-text-about-me);
    font-weight: 700;
    text-align: center;
`;

export const CardContact = styled(Card)`
    @media (max-width: 600px) {
        width: 80%;
    }
    @media (max-width: 768px) {
        width: 80%;
    }
    @media (min-width: 768px) {
        width: 70%;
    }
`;

export const contactDiv = styled.a`
    border: 1px solid darkgray;
    box-shadow: 1px 1px 5px;
    border-radius: 2px;
    display: flex;
    align-items: center;
    gap: 12px;
    height: 60px;
    margin-top: 3%;
    text-decoration: none;
    color: inherit;
    word-wrap: break-word;

    &::before{
        content: '';
        width: 5px;
        height: 100%;
        background-color: #00000e;
    }
`;

export const StyledWhatsappIcon = styled(IoLogoWhatsapp)`
    fill: #05b00e;
`;