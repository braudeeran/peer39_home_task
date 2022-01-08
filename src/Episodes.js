import { useState, useEffect, useRef } from 'react'
import EpisodesList from './EpisodesList';
import Loader from './Loader';
import useFetch from './useFetch';


const Episodes = () => {

    const {data, isPending, error, statusCode} = useFetch('https://www.breakingbadapi.com/api/episodes?series=Breaking+Bad'); //bringing data from custom Hook

    return (
        <div className="episodes">
            <div className="loader">
                {isPending && <Loader />} {/*activate loader gif till the data has arrived*/}
            </div>
            <div className="error">
                {error && <div>{error}</div>} {/*activate error message in case of fetch error*/}
            </div>
            <div className="episodes-list">
                {data && <EpisodesList episodes={data} />}
            </div>
        </div>
      );
}
 
export default Episodes;