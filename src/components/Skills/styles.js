import styled from "styled-components";
import {Card} from "primereact/card";
import {SiJavascript, SiBootstrap, SiPhp, SiLaravel, SiMysql} from 'react-icons/si';
import {FaReact} from 'react-icons/fa';
import {DiYii} from 'react-icons/di';
import {BiGitBranch, BiChip} from 'react-icons/bi';
import {AiOutlineArrowDown} from 'react-icons/ai';
import {Button} from 'primereact/button';

export const StyledJsIcon = styled(SiJavascript)`
    fill: #03c4e8;
`;

export const StyledCardSkills = styled(Card)`
    background-color: #00000e;
`;

export const StyledBootstrapIcon = styled(SiBootstrap)`
    fill: #03c4e8;
`;

export const StyledReactIcon = styled(FaReact)`
    fill: #03c4e8;
`;

export const StyledPhpIcon = styled(SiPhp)`
    fill: #03c4e8;
`;

export const StyledYiiIcon = styled(DiYii)`
    fill: #03c4e8;
`;

export const StyledLaravelIcon = styled(SiLaravel)`
    fill: #03c4e8;
`;

export const StyledMysqlIcon = styled(SiMysql)`
    fill: #03c4e8;
`;

export const StyledGitIcon = styled(BiGitBranch)`
    fill: #03c4e8;
`;

export const StyledChipIcon = styled(BiChip)`
    fill: #03c4e8;
`;

export const StyledButtonArrow = styled(Button)`
    &:hover{
        color: white;
    }
`;

export const StyledArrowDownIcon = styled(AiOutlineArrowDown)`
`;

export const StyledTitleCard = styled.div`
    font-size: 25px;
`;

export const StyledCard = styled(Card)`
    height: auto;
    border-radius: 20px;
    box-shadow: 7px 7px gray;
    border: 1px solid darkgray;
    .description{
        justify-content: center
    }
    &:hover{
        background-color: gray;
        box-shadow: 7px 7px white;
        border: none;
        .description{
            color: white
        }
        ${StyledJsIcon}, ${StyledBootstrapIcon}, ${StyledReactIcon}, ${StyledPhpIcon}, ${StyledYiiIcon}, ${StyledLaravelIcon}, ${StyledMysqlIcon}, ${StyledGitIcon}, ${StyledChipIcon} {
            fill: white;
        }
        ${StyledButtonArrow} {
            background-color: white;
        }
        ${StyledTitleCard} {
            color: white
        }
    }
`;