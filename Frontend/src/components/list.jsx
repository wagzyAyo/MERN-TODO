import PropTypes from 'prop-types';
import Container from './container';

function List(props){
    return (
        <div>
            {console.log(props.text)}
            <ul>
                <li><Container text={props.text} deleteTask={props.deleteTask} id={props.id}/></li>
            </ul>
        </div>
    )
}


List.propTypes = {
    text: PropTypes.string.isRequired,
    deleteTask: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired
}


export default List