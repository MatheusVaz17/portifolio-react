import styled from "styled-components";
import { Card } from "primereact/card";

export const TitleAboutMe = styled.h1`
    display: block;
    color: var(--color-title-text-about-me);
    font-weight: 700;
    text-align: center;
`;

export const CardAboutStyle = styled(Card)`
    @media (max-width: 600px) {
        width: 60%;
    }
    @media (max-width: 768px) {
        width: 60%;
    }
    @media (min-width: 768px) {
        width: 50%;
    }
`;