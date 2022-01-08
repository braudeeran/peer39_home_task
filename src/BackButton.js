
import { useHistory } from "react-router-dom";


const BackButton = ({oldData}) => {

    const goback = (history) => {
        history.goBack(history);
    }

    return (
        <div className="back-button">
            <button type="button" className="btn btn-outline-secondary" onClick={() => {goback(oldData)}}>go-back</button>
        </div>
      );
}
 
export default BackButton;