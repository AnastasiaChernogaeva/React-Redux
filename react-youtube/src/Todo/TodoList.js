import React from 'react'
import PropTypes  from 'prop-types'
import TodoItem from './TodoItem'

//один из способов добавления стилей
//продолжение в коде jsx  <ul style={styles.ul}></ul>
const styles = {
    ul:{
        listStyle:'none',
        margin:0,
        padding:0,
    }
}

 function TodoList(props){
    return(
        <ul style={styles.ul}>
           {props.todos.map((todo, idx)=>{
               return  <TodoItem todo={todo} key={todo.id} index={idx} onChange={props.onToggle}/>
           })}
          

        </ul>
    )
}

TodoList.propTypes={
    todos:PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle:PropTypes.func.isRequired,
}

export default TodoList