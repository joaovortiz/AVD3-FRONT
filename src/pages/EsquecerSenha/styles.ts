import styled from 'styled-components';
import { shade } from 'polished';
import signInBackgroundImg from '../../assets/sign-in-background.jpg';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    place-content: center;
    align-items: center;

    width: 100%;
    max-width: 700px;

    img{
        height: 300px;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }

    form {
        margin: 80px 0;
        width: 340px;
        text-align: center;
    }

    h1 {
        margin-bottom: 24px;
    }

    a{
        color: #F4EDE8;
        display: block;
        margin-top: 24px;
        transition: color 0.2s;

        &:hover{
            color: ${shade(0.2, '#F4EDE8')};  
        }
    }

    > a {
        color: #7F25FC;
        display: block;
        margin-top: 24px;
        transition: color 0.2s;

        display: flex;
        align-items: center;

        svg{
            margin-right: 16px;
        }

        &:hover {
            color: ${shade(0.2, '#7F25FC')};  
        }
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${signInBackgroundImg}) no-repeat center;
    background-size: cover;
`;
