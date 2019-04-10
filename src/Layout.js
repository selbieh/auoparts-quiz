import React,{Component} from "react";
import Nav from './NavBar/NavBar';

class LayOut extends Component{


    render(){


        return (
            <React.Fragment>
                    <Nav/>
                    {this.props.children}
                    
            </React.Fragment>
        )
    }
}


export default LayOut