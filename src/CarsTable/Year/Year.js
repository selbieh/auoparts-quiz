import React from 'react';
import { Table } from 'reactstrap';
import classes from "./Year.module.css"

export default class Year extends React.Component {


    onYearClickHadler=(year)=>{
        console.log(year)
        this.props.history.push(this.props.location.pathname+"/"+year)
    }



  render() {
  let  listOfYeasr=["2015","2016","2017","2018","2019"]


    const carType=this.props.match.params.sub
    const carSubType= this.props.match.params.type
    
    let listOfYeasrsTr=listOfYeasr.map(el=>{
        return <tr
                onClick={()=>this.onYearClickHadler((el))}
                key={el}>
        
                <td>{el}</td>       
            </tr>
    })

    return (

      <Table className={classes.TableSIze}>
        <thead>
          <tr>
            <th>{carType}/{carSubType} </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">selcect car model</th>
          </tr>
          {listOfYeasrsTr}
        </tbody>
      </Table>

    );
  }
}