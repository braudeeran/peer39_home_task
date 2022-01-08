import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react'
import bdImg from './img/bd.jpg'



const EpisodesList = ({episodes}) => {

    const[showImg, setShowImg] = useState(true)
    const tableRef = useRef()
    const [selectedEpisodes, setSelectedEpisodes] = useState(null);
    let SeasonList = episodes.map((val) => {return val.season}) //creating list of seasons
    let cleanSeasons = [];
    SeasonList.forEach((element) => {
        if (!cleanSeasons.includes(element)) { //Keeping only distincts values
            cleanSeasons.push(element);
        }
        let x = cleanSeasons.indexOf(' 1');
    });
    cleanSeasons.splice(cleanSeasons.indexOf(' 1'), 1);


    const showData = (val) => {
        setSelectedEpisodes(episodes.filter((element) => {return element.season === val}));
        tableRef.current.classList.remove("hide"); //removing hide class from the table by using REF
        setShowImg(false)
    }

 


    return ( 
        <div className="episodes-list">
            <h3>Choose a season:</h3>
        {cleanSeasons.map((val) => {
            return (
        <div className='buttons'>
        <button key = {val} type="button" className="btn btn-outline-danger btn-lg" onClick={() => {showData(val)}}>seasons: {val}</button>
        </div> )
            })}
            <div className="show-episodes">
                <table className='table-episodes hide' ref={tableRef}>
                    <tbody>
                    <tr>
                        <th>title</th>
                        <th>air date</th>
                    </tr>
                    {selectedEpisodes && selectedEpisodes.map(element => {
                        return (
                            <tr key={element.episode_id}>
                                <td className="title"><Link to={`/episode/${element.episode_id}`}>{element.title}</Link></td> {/*creating the episodes table*/}
                                <td>{element.air_date}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
                <div>
                    {showImg && <img src={bdImg}></img>} {/*creating cartoon to breaking dead*/}
                </div>
           
            </div>
        </div>
     );
}
 
export default EpisodesList;