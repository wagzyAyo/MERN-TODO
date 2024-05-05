import PropTypes from 'prop-types'

function List(props){
    return (
        <div>
            <ul>
                <li><p>{props.text}</p></li>
            </ul>
        </div>
    )
}

List.propTypes = {
    text: PropTypes.string.isRequired
}


export default List