import React,{Component} from 'react';
// import the logo as compoete 
import logo from '../../asseste/logo.jpg';
//Css moudle styling
import Class from "./Logo.module.css";


class Logo extends Component{


    render(){


        return(
            <div className={Class.Logo}>
            <img src={logo} alt="LOGO"/>
            </div>
        )
    }
}

export default Logo;


