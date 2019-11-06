import React from "react"

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.setState(prevState => {
            return {
                count: prevState.count +1
            }
        })
    }

    render() {
        return(
            <div>
                <div>Home Page count is {this.state.count}</div>
                <button onClick={this.handleClick}>Increment</button>
            </div>
            
            
        )
    }

}

export default Home