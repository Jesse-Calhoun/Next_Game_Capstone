import axios from 'axios'
import { useState } from 'react'
import useAuth from '../../hooks/useAuth'
import './GameForm.css'

const GameForm = ({ }) => {
    const { userId } = useAuth()
    const [user, token, config] = useAuth();
    const [address, setAddress] = useState('')
    const [dateTime, setDateTime] = useState('')
    const [gameType, setGameType] = useState('')
    const [next, setNext] = useState(false)
    const [indoor, setIndoor] = useState(false)
    const [attendees, setAttendees] = useState(undefined)

    async function postNewGame(newGame){
        let url = `http://127.0.0.1:8000/api/games/create_game/`
        let response = await axios.post(url, newGame, config)
        console.log(response)
    }

    function handlePostGame(event){
        if (token){
            event.preventDefault();
            let newGame = {
                user: user,
                address: address,
                date_time: dateTime,
                game_type: gameType,
                next: next,
                indoor: indoor,
                attendees: ''
              }
            postNewGame(newGame);
        }
          else{
            alert('Incorrect input')
        }
    }

    return ( 
        <form onSubmit={handlePostGame}>
            <h4>Create Game</h4>
            <div>
                <label>Address</label>
                <input type="text" placeholder="Enter Address(location keywords(state/city))..." value={address}  onChange={(event) => setAddress(event.target.value)} />
            </div>
            <div>
                <label>Date/Time</label>
                <input type='datetime-local' className='short-input-field' value={dateTime}  onChange={(event) => setDateTime(event.target.value)}/>
            </div>
            <div>
                <label>Game Type(description/rules)</label>
                <input type="text" placeholder="Describe game rules/number of players per team..." value={gameType}  onChange={(event) => setGameType(event.target.value)}/>
            </div>
            <div>
                <label>Got Next?</label>
                <input type='checkbox' className='check-box-input' value={next}  onChange={(event) => setNext(!next)}/>
            </div>
            <div>
                <label>Indoor</label>
                <input type='checkbox' className='check-box-input' value={indoor}  onChange={(event) => setIndoor(!indoor)}/>
            </div>
            <button type='submit'>Create Game</button>
        </form>
     );
}
 
export default GameForm;