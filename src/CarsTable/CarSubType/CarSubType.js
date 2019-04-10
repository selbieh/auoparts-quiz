import React,{Component} from 'react';
//"BMW","RENULT","MAZDA","PEGUT","FIAT"
import { Table } from 'reactstrap';





class CarSubType extends Component{
    state={
        carSubTypeList:{
            BMW:["520","320","720"],
            AUDI:["Q5","A13","Bs240"],
            RENULT:["LOGAN","SANDERO","KADJAR"],
            MAZDA:["Mz3","Mz4","Mz8"],
            PEGUT:["404","505","406"],
            FIAT:["RIMO","TIMBRA","PUNTO"]

        }
    }

    onClickTypeHandler=(name)=>{
        console.log(this.props)
        this.props.history.push(this.props.location.pathname+"/"+name)
    }
    render(){
        const carType=this.props.match.params.sub;
        const carTypeList=this.state.carSubTypeList[carType].map(el=>{
            return (
                <tr 
                key={el}
                onClick={()=>this.onClickTypeHandler(el)}
                >
                      <td>{el}</td>
                </tr>
            )
        })
       return(
        
        <div >
        <Table>
          <thead>
            <tr>
              <th>select {carType} type</th>
            </tr>
          </thead>
          <tbody>
           {carTypeList}
          </tbody>
        </Table>
        </div>

       );

        }

}

export default CarSubType;