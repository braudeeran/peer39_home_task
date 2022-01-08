import { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router';
import useFetch from './useFetch';
import { useLocation } from 'react-router-dom';
import Loader from './Loader';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import BackButton from './BackButton';


const EpisodeDetails = () => {

    let history = useHistory(); // data for go-back button
    const { id } = useParams(); // the selected episode id for the api
    console.log(id);


const {data, isPending, error, statusCode} = useFetch(`https://www.breakingbadapi.com/api/episodes/${id}?series=Breaking+Bad`) //going out to the fetch API in another HOOK
console.log(data);


    return ( <div className="episode-details">
      <div className="loader">
                {isPending && <Loader />} {/*activate loader gif till the data has arrived*/}
        </div>
        <div className="error">
                {error && <div>{error}</div>} {/*activate error message in case of fetch error*/}
        </div>
        <div className="current-details">
            {data && data.map((element) => { {/*after receiving the data i am making a card with episode details*/}
                return (
                        <div className ="card" key={element.episode_id}>
                        <div className="card-body">
                            <div className='episode-card-detail'>
                            <h6>Episode name:</h6>
                            <h5 className="card-title">{element.title}</h5>
                            </div>
                            <div className="episode-card-detail">
                            <h6>Air date: </h6>
                            <h6 className="card-subtitle mb-2 text-muted">{element.air_date}</h6>
                            </div>
                            <div className="episode-card-detail">
                            <h6>The cast:</h6>
                            <ul className='hover'>
                                {element.characters.map(val => {
                                    return(<li key={val} id={val}><Link to={`/character/${val}`}>{val}</Link></li>)
                                })}
                            </ul>
                            </div>
    
                        </div>
                        </div>
                )
            })}
        </div>
        <div className='go-back'>
            <BackButton oldData={history} /> {/* calling to go back button */}
        </div>
    </div> );
}
 
export default EpisodeDetails;