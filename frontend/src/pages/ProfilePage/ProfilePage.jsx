import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FriendsList from '../../components/FriendsList/FriendsList';
import GameForm from '../../components/GameForm/GameForm';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import "./ProfilePage.css"

const ProfilePage = () => {
    const { userId } = useParams()
    const [registeredPlayer, setRegisteredPlayer] = useState(null)

    async function getPlayerById(userId){
        try{
            let url = `http://127.0.0.1:8000/api/auth/users/${userId}/`
            let response = await axios.get(url)
            setRegisteredPlayer(response.data)
        } catch(ex){
            console.log(`ERROR in getAllGames EXCEPTION: ${ex}`)
        }
    }

    useEffect(() =>{
        getPlayerById(userId);
    }, [registeredPlayer])

    if (registeredPlayer){
        return ( 
            <div className='profile-body'>
                <div className='col-sm-5 align-left'>
                    <h1>{registeredPlayer.username}'s Profile</h1>
                    <h2>Player's Full Name{registeredPlayer.first_name} {registeredPlayer.last_name}</h2>
                    <h2>{registeredPlayer.email}</h2>
                    <div className='friends'>
                        <FriendsList registeredPlayer={registeredPlayer}/>
                    </div>
                </div>
                <div className='col-sm-6 align-center'>
                    <GameForm/>
                </div>
            </div>
         );
    }
    return null
}
 
export default ProfilePage;