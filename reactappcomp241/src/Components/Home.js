import React from "react"
import Data from "../Helpers/Data"
import List from "./List"
import './Home.scss';

class Home extends React.Component{
    constructor(props){
        super(props)
        //State consists of todos populated from database, and string to add to database
        this.state = {
            todoList: [],
            addTodo: ""
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.updateInput = this.updateInput.bind(this);
    }
  
    //Get todos from database
    async componentDidMount(){
        let res = await Data.getTodos();
        this.setState({
            todoList: res
        })
    }
    
    //When add button is clicked, insert to database
    onSubmit() {
        let todo = this.state.addTodo;
        Data.addTodo(todo);
        window.location.reload();
    }

    //Handler for input
    updateInput(event){
        this.setState({
            addTodo: event.target.value
            }
        )
    }

    render() {
        return(
            <div className="container">
                <h1>My Todo List</h1>
                <div className="search">
                    <form>
                        <input type="text" 
                        id="addTodo" 
                        name="addTodo" 
                        placeholder="Type todo here"
                        onChange={this.updateInput}
                        />
                    </form>
                    <button onClick={this.onSubmit}><i class="fa fa-plus fa-2x"></i></button>
                    
                </div>
                <div>
                    <List todoList={this.state.todoList} />
                </div>
            </div>            
        )
    }

}

export default Home