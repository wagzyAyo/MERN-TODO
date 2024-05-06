import EditIcon from '@mui/icons-material/Edit';
import PropTypes from 'prop-types';
import DeleteIcon from '@mui/icons-material/Delete';

function Container(props){
const pointer = {
    cursor: "pointer",
    fontSize: "20px",
}

    return (
        <div style={{
            width: '300px',
            minHeight: '30px',
            border: "none",
            borderRadius: "5px",
            backgroundColor: "#fff",
            color: "#000",
        }} className='mt-4 mb-4 '>
            <p className='flex justify-around items-center'>{props.text} 
            <div>
                <EditIcon style={pointer} /> 
                <DeleteIcon style={pointer}  onClick={()=>{props.deleteTask(props.id)}}/>
            </div>
            </p> 
        </div>
    )
}

Container.propTypes = {
    text: PropTypes.string.isRequired,
    deleteTask: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired
}

export default Container