import React,{Component} from "react";
import Classes from './Searche.module.css'



class Search extends Component{


    render(){

        return(
            <div className={Classes.Search}>

            <input placeholder="type searche item"/>

            </div>
        )
    }
}


export default Search;