import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FriendsList from '../../components/FriendsList/FriendsList';
import GameForm from '../../components/GameForm/GameForm';
import GameList from '../../components/GameList/GameList';
import "./ProfilePage.css"

const ProfilePage = () => {
    const { userId } = useParams()
    const [registeredPlayer, setRegisteredPlayer] = useState(null)
    const [games, setGames] = useState([])

    async function getPlayerById(userId){
        try{
            let url = `http://127.0.0.1:8000/api/auth/users/${userId}/`
            let response = await axios.get(url)
            setRegisteredPlayer(response.data)
        } catch(ex){
            console.log(`ERROR in getAllGames EXCEPTION: ${ex}`)
        }
    }

    async function getAllGames(){
        let url = 'http://127.0.0.1:8000/api/games/'
        let response = await axios.get(url)
        setGames(response.data)
    }

    useEffect(() =>{
        getAllGames()
    }, [games])

    useEffect(() =>{
        getPlayerById(userId);
    }, [registeredPlayer])

    if (registeredPlayer){
        return ( 
            <div className='profile-body'>
                <div className='col-sm-5 align-left'>
                    <div className='player-info'>
                        <div className='underline'>
                            <h1>{registeredPlayer.username}'s Profile</h1>
                        </div>
                        <h2>Player's Full Name: {registeredPlayer.first_name} {registeredPlayer.last_name}</h2>
                        <h2>Email: {registeredPlayer.email}</h2>
                    </div>
                    <div className='friends'>
                        <FriendsList registeredPlayer={registeredPlayer}/>
                    </div>
                    <GameList games={games}/>
                </div>
                <div className='col-sm-6 align-center'>
                    <GameForm getAllGames={getAllGames}/>
                </div>
            </div>
         );
    }
    return null
}
 
export default ProfilePage;