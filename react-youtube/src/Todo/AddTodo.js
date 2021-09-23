import React, {useState} from "react";
import PropTypes from 'prop-types';

function useInputValue(defaultValue = ''){
    const [value, setValue] = useState(defaultValue)
    return{
        bind:{
         value,
         onChange: ev => setValue(ev.target.value) ,
        },
        clear: ()=>setValue(''),
        value:() =>value,
    }
}

function AddTodo({onCreate}){
    // const [value, setValue] = useState('')
    const input = useInputValue('')
    function submitHandler(ev){
        ev.preventDefault();
        // if(value.trim()){
        //     onCreate(value)
        //     setValue('')
        // }
        if(input.value().trim()){
            onCreate(input.value())
            input.clear()
            // setValue('')
        }
    }

return(
    <form style={{marginBottom:'1rem',}} onSubmit={submitHandler}>
        {/* <input type="text" value={value} onChange={ev=>setValue(ev.target.value)}/> */}
        <input type="text" {...input.bind}/>
        <button type="submit">
            Add todo
        </button>
    </form>
)
}

AddTodo.propTypes ={
    onCreate:PropTypes.func.isRequired,
}

export default AddTodo