import { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router';
import useFetch from './useFetch';
import Loader from './Loader';
import { useHistory } from "react-router-dom";
import BackButton from './BackButton';

const CharacterDetails = () => {

    let history = useHistory();
    const {name} = useParams(); // the selected character name for the api
    const {data, isPending, error, statusCode} = useFetch(`https://www.breakingbadapi.com/api/characters?name=${name}`) //going out to the fetch API in another HOOK
    console.log(data);


    return (
        <div className="character-details">
           <div className="loader">
                {isPending && <Loader />} {/*activate loader gif till the data has arrived*/}
        </div>
        <div className="error">
                {error && <div>{error}</div>} {/*activate error message in case of fetch error*/}
        </div>
        <div className="current-details">
            {(data) ? data.map(element => { {/*after receiving the data i am making a card with character details*/}
                return (
                    <div className="card" key = {element.char_id}>
                    <img src={element.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{element.name}</h5>
                        {/* <p className="card-text">Birthdate: {(element.birthday !== 'Unknown') ? element.birthday : ''}</p> */}
                        {(element.birthday !== 'Unknown') ? <p className="card-text">Birthdate: {element.birthday}</p> : <></>} {/*if the character doesn't have birthday data in api I dont bring that category*/}
                        {/* <p className="card-text">Birthdate: {element.birthday}</p> */}
                        <p className="card-text">Nickname: {element.nickname}</p>
                        <p className="card-text">Status: {element.status}</p>
                        <ul>List of occupation:</ul>
                        {element.occupation && element.occupation.map(element => {
                            return (<li key = {element.char_id}>{element}</li>)
                        })}
                    </div>
                    </div>
                )
            } 
            ) : <></>}
        </div>
        <div className='go-back'>
            <BackButton oldData={history} /> {/* calling to go back button */}
        </div>
       
        </div>
        
      );
}
 
export default CharacterDetails;