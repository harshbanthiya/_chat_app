import styled from 'styled-components';
import { PageProps } from './styleTypes';

export const SIDEBAR_WIDTH = 450; 
export const InputField = styled.input`
font-family: 'Inter';
background-color: inherit;
outline: none;
border: none;
color: #fff;
font-size: 18px;
width: 100%;
box-sizing: border-box;
padding: 0px;
margin: 4px 0;
` ; 

export const InputContainer = styled.div `
    background-color: #131313;
    padding: 12px 16px;
    border-radius: 10px;
    width: 100%;
    box-sizing: border-box;
`;

export const InputLabel = styled.label`
    display: block;
    color: #8f8f8f;
    font-size: 14px;
    margin: 4px 0;
`;

export const Button = styled.button ` 
    width: 100%;
    outline: none;
    border: none;
    font-family: 'Inter';
    font-size: 15px;
    background-color:  #53adb0;
    color: #ffff;
    border-radius: 10px;
    padding: 25px 0;
    transition: 250ms background-color ease;
    transition: 500ms border ease;
    box-sizing: border-box;
    &:focus{
        background-color:  #428a8c;
        border: 2px solid #ffffff;
    }
    &:hover{
        cursor: pointer;
        background-color: #428a8c;
    }
    &:active
    {
        background-color: #428a8c;
    }
`;

export const Page = styled.div<PageProps> ` 
    background-color: #1a1a1a; 
    height: 100%;
    display: ${(props) => props.display};
    justify-content: ${(props) => props.justifyContent};
    align-items:  ${(props) => props.alignItems};
`;

export const ConversationSidebarStyle = styled.aside `
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${SIDEBAR_WIDTH}px;
    background-color: #1a1a1a;
    border-right: 1px solid #5454543d;
    overflow-y: scroll;
`;

export const ConversationChannelPageStyle = styled.div`
    height: 100%;
    margin-left: ${SIDEBAR_WIDTH}px;
`;

export const ConversationSidebarHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 32px;
    background-color: #151515;
    height: 100px;
    border-bottom: 1px solid #5454543d;
    & h1
    {
        font-weight: 400;
    }
`;


export const ConversationSidebarContainer = styled.div`

`;

export const ConversationSidebarItem = styled.div`
    display: flex;
    align-items: center;    
    gap: 20px;
    padding: 18px 32px;
    box-sizing: border-box;
    border-bottom: 1px solid #5454543d;
    background-color: #131313;
`;