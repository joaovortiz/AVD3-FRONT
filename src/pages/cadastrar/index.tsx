import React, { useState, useEffect, useCallback, ChangeEvent } from "react";
import { FiPower, FiArrowLeft } from 'react-icons/fi';
import { FaStreetView } from 'react-icons/fa';
import { AiOutlineFieldNumber } from 'react-icons/ai';
import { GiStreetLight } from 'react-icons/gi';
import { MdLocalBar } from 'react-icons/md';
import logoImg from '../../assets/logo.png';
import Button from "../../components/Button";
import Input from '../../components/Input'
import { Container } from './styles';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import TextArea from "../../components/TextArea";


const Cadastrar: React.FC = () => {
  const handleSubmit = useCallback(async (data: object) => { 
      try{
          const schema = Yup.object().shape({
              name: Yup.string().required('Nome do evento obrigatório'),
          });

          await schema.validate(data, {
              abortEarly: false
          });
      } catch ( error ) {
          console.log(error)
      }
  }, []);

    return(
        <Container>
            <header>
                <img src={logoImg} alt="E-Vent +" />

                <span>Cadastro de Eventos</span>

                <a href="/perfil">
                <FiArrowLeft />
                    Voltar
                </a>

                <button>
                <FiPower size={18} color="#E02041" />  
                </button>
            </header>

        <Form onSubmit={handleSubmit}>

       
        <fieldset>
          <legend>
            <h2>Dados do Evento</h2>
          </legend>
           <Input name="name" icon={MdLocalBar} placeholder="Nome do evento" />
          
        </fieldset>

        <fieldset>
          <legend>
            <h2>Insira a imagem do evento</h2>
           </legend>
          <input type="file" id="myfile" name="myfile"></input>
        </fieldset>

        <fieldset>
        <legend>
            <h2>Sobre o evento</h2>
          </legend>
          <TextArea name="sobre" />
        </fieldset>

        <fieldset>
          <legend>
            <h2>Endereço</h2>
          </legend>
              <Input name="bairro" icon={FaStreetView} placeholder="Bairro" /> 
              <Input name="rua" icon={GiStreetLight} placeholder="Rua"/>
              <Input name="numero" icon={AiOutlineFieldNumber} placeholder="Número" />
        </fieldset>

        <Button type="submit">
          Cadastrar Evento
        </Button>
      </Form>
        </Container>
            
    );
}

export default Cadastrar;