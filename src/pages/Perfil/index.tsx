import React from "react";
import { FiPower } from 'react-icons/fi';
import { VscError } from "react-icons/vsc";
import { AiTwotoneLike, AiTwotoneDislike } from "react-icons/ai";
import logoImg from '../../assets/logo.png';
import { Container } from './styles';



const Profile: React.FC = () => {
  
    return(
        <Container>
            <header>
                <img src={logoImg} alt="E-Vent +" />

                <span><b>Bem vindo, Usuario</b></span>

                <a href="/cadastrar">Adicionar Evento</a>

                <button>
                <FiPower size={18} color="#E02041" />  
                </button>
            </header>

            <h1>Eventos Cadastrados</h1>
            <div>
            <ul>
                    <li>
                    <img src={logoImg} alt="imagem do evento" />
                    <br></br>
                    <strong>Evento:</strong>
                    <p>Nome do Evento</p>

                    <strong>Local:</strong>
                    <p>Rua:</p>
                    <p>Numero:</p>
                    <p>Bairro:</p>
                    <p>Cidade:</p>
                    <p>Estado:</p>
                    <strong>Sobre:</strong>
                    <p>Descrição do Evento</p>
                    <br></br>

                    <div>
                        <a href="">
                            <AiTwotoneLike size={20} color="green" />
                            Gostei
                        </a>

                        <a href="">
                            <AiTwotoneDislike size={20} color="red" />
                            Não Gostei
                        </a>
                    </div>
                    <button type="button"><VscError size={20} color="red"/></button>
                </li>
            </ul>

            <ul>
                    <li>
                    <img src={logoImg} alt="imagem do evento" />
                    <br></br>
                    <strong>Evento:</strong>
                    <p>Nome do Evento</p>

                    <strong>Local:</strong>
                    <p>Rua:</p>
                    <p>Numero:</p>
                    <p>Bairro:</p>
                    <p>Cidade:</p>
                    <p>Estado:</p>

                    <strong>Sobre:</strong>
                    <p>Descrição do Evento</p>
                    <br></br>

                    <div>
                        <a href="">
                            <AiTwotoneLike size={20} color="green" />
                            Gostei
                        </a>

                        <a href="">
                            <AiTwotoneDislike size={20} color="red" />
                            Não Gostei
                        </a>
                    </div>
                    <button type="button"><VscError size={20} color="red"/></button>
                </li>
            </ul>

            <ul>
                    <li>
                    <img src={logoImg} alt="imagem do evento" />
                    <br></br>
                    <strong>Evento:</strong>
                    <p>Nome do Evento</p>

                    <strong>Local:</strong>
                    <p>Rua:</p>
                    <p>Numero:</p>
                    <p>Bairro:</p>
                    <p>Cidade:</p>
                    <p>Estado:</p>

                    <strong>Sobre:</strong>
                    <p>Descrição do Evento</p>
                    <br></br>

                    <div>
                        <a href="">
                            <AiTwotoneLike size={20} color="green" />
                            Gostei
                        </a>

                        <a href="">
                            <AiTwotoneDislike size={20} color="red" />
                            Não Gostei
                        </a>
                    </div>
                    <button type="button"><VscError size={20} color="red"/></button>
                </li>
            </ul>
        </div>
        </Container>
            
    );
}

export default Profile;