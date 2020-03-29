//funcão useEffect serve para disparar alguma função em algum determinado momento do componente
import React, {useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiPower, FiTrash2} from 'react-icons/fi';

import api from '../../services/api';
import logoImg from '../../assets/logo.svg';
import './styles.css';

export default function Profile(){

    const [incidents, setIncidents] = useState([]);
    //resgatando o nome da ong do history
    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');
    const history = useHistory();

    //useEffect recebe 2 parametros, 1 - qual função vai ser executada 2 - quando vai ela vai ser executada
    useEffect(() =>{
        api.get('profile',{
            headers: {
                Authorization: ongId,                
            }
        }).then(
            response =>{
                setIncidents(response.data);
            }
        ); 
    }, [ongId]);

    async function handleDeleteIncident(id){
        try {
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId,
                }
            });
            //Removendo o incident que foi deletado da pagina
            setIncidents(incidents.filter(incident => incident.id !== id));
        } catch (error) {
            alert("Erro ao deletar caso, tente novamente")
        }
    }

    function handleLogout(){
        localStorage.clear();
        history.push('/');
    }

    return(
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be the Hero"/>
                <span>Bem vindo(a), {ongName}</span>

                <Link className="button" to="/incidents/new"> Cadastrar novo caso </Link>

                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#e02041"/>
                </button>

            </header>
            <h1>Casos Cadastrados</h1>
            <ul>
                {incidents.map(incident =>(
                    <li key={incident.id}>
                        <strong>CASO:</strong>
                        <p> {incident.title} </p>

                        <strong>DESCRIÇÃO:</strong>
                        <p> {incident.description} </p>

                        <strong>VALOR:</strong>
                        <p> {Intl.NumberFormat(
                                'pt-BR', {style: 'currency', currency: "BRL"}
                            ).format(incident.value) 
                        } </p>

                        <button onClick = {() => handleDeleteIncident(incident.id)} type="button">
                            <FiTrash2 size={20} color="#e02041" />
                        </button>
                    </li> 
                ))}                               
            </ul>
        </div>
    );
}