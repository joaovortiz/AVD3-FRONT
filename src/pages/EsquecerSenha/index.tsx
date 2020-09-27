import React from "react";
import { FiMail, FiArrowLeft } from 'react-icons/fi';
import { Form } from '@unform/web';
import logoImg from '../../assets/logo.png';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container, Content, Background } from './styles';

const EsqueciSenha: React.FC = () => {
    function handleSubmit(data: object): void{ 
        console.log(data);
    }
    return(
        <Container>
            <Background />
            <Content>
                <img src={logoImg} alt="Party Legends" />
                <Form onSubmit={handleSubmit}>
                    <h1>Preencha seu E-mail</h1>
                    <Input name="email" icon={FiMail} placeholder="E-Mail" />
                    <Button type="submit">Enviar</Button>
                    
                </Form>
                <a href="/">
                    <FiArrowLeft />
                    Voltar para Logon
                </a>
            </Content>
            
        </Container>
    );
}

export default EsqueciSenha;