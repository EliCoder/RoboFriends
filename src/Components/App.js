import CardList from "./CardList";
import {robots} from "./Robots";
import SearchBar from "./SearchBar";
import React, {Component} from "react";


class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: robots,
            searchBar: ""
            } 
        }

    onSearchButtonClick = (event) => {
        this.setState({searchBar: event.target.value});
        const filterRobots = this.state.robots.filter(robots => {
            return robots.name.toLocaleLowerCase().includes(this.state.SearchBar.toLocaleLowerCase());
        }) 
    }

    render () {
        return (
            <div className="tc">
                <h1>RoboFriends</h1>
                <SearchBar searchChange={this.onSearchButtonClick}/>
                <CardList robots={this.state.robots}/>
            </div>
        );
    }
};

export default App
