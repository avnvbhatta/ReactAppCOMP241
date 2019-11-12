/*
Data access layer.
*/
import axios from 'axios';
const getEndpoint = "http://localhost:3001/todos";
const addEndpoint = "http://localhost:3001/addtodo";
const editEndpoint = "http://localhost:3001/edittodo";
const deleteEndpoint = "http://localhost:3001/deletetodo";

class Data{
    //Get todos 
    async getTodos(){
        try{
            let res = await axios.get(getEndpoint);
            return res.data;
        }
        catch(err){
            console.log("Error in todos endpoint")
            return(err)
        }
        
    }

    //Add a todo
    async addTodo(todo){
        try{
            let res  = await axios.post(addEndpoint,{
                todo: todo
            });
        }
        catch(err){
            console.log("Error in addtodo endpoint")
            return(err)
        }

    }


    //Edit a todo by toggling completed bit.
    async editTodo(todo){
        try{
            let res  = await axios.post(editEndpoint,{
                todo: todo.todo,
                completed: todo.completed === 1 ? 0 : 1
            });
        }
        catch(err){
            console.log("Error in edittodo endpoint")
            return(err)
        }
    }

    //Delete todo
    async deleteTodo(todo){
        try{
            let res = await axios.post(deleteEndpoint,{
                todo: todo
            });
        }
        catch(err){
            console.log("Error in deletetodo endpoint")
            return(err)
        }
        
    }

}


export default new Data()