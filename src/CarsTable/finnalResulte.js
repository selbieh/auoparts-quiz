import React, { Component } from 'react';



class FinalResulte extends Component{

render(){
    let year=this.props.match.params.year;
    let carType=this.props.match.params.sub;
    let car=this.props.match.params.type;
    console.log(year,carType,car)

    const xstylee={
        color: "red"
    }
    

    

    return(
        <React.Fragment>
                <h3>now your select car is {carType} type {car} made in {year}</h3>


                <p style={xstylee}> we can fetch the data from the sever with all parms by ajax of axiox
                    Ex: axios.POST("www.exampel.com/api/find",data:is JS object)
                </p>
        </React.Fragment>
        
    )
}
}

export default FinalResulte;