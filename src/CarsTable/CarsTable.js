import React,{Component} from "react";
import { Table } from 'reactstrap';
import Classes from './CarsTable.module.css'

class CarsTable extends Component{

//["BMW","RENULT","MAZDA","PEGUT","FIAT"]
//        carsList:[{name:"BMW",value:"BMW"},{name:"RENULT",value:"RENULT"},{name:"PEGUT",value:"PEGUT"},{name:"FIAT",value:"FIAT"},{name:"MAZDA",value:"MAZDA"}]

    state={
        carsList:["BMW","RENULT","MAZDA","PEGUT","FIAT"]
    }
    onClickHanndler=(carName)=>{
        this.props.history.push("/"+carName)
        console.log(carName)
    }

    render(){

        let carListItem=this.state.carsList.map(el=>{
          return  <tr 
            key={el}
            onClick={()=>this.onClickHanndler(el)}
            >
                  <td>{el}</td>
            </tr>
        })


         return (
          <div class="container">
              <div class="row">
                <div class="col-sm">
                <Table className={Classes.Table}>
                  <thead>
                    <tr>
                      <th>Select Car Name</th>
                    </tr>
                  </thead>
                  <tbody>
                  {carListItem}
                  </tbody>
                </Table>
                </div>
                <div class="col-sm">
                <h3>buy now and get 20% off</h3>
                </div>
                </div>
            </div>

          );

    }
}


export default CarsTable;