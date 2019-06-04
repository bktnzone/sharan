import React from "react";
import ReactExport from "../../libs/react-data-export";
import {Button} from 'reactstrap';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const regDataSet = [
    {
        centre: "Annanagar",
        name: "Arun",
        gender: 'M',
        age: 23,
        category:"Kumar",
        gyan_years:23,
        amt_paid:"Y"
    },
    {
      centre: "Annanagar",
      name: "Ambika",
      gender: 'F',
      age: 26,
      category:"Kumari",
      gyan_years:23,
      amt_paid:"N"
  }
];

var optionDataSet = [
    {
        gender: "M",
        category: "Kumar"
    },
    {
      gender: "F",
      category: "Kumari"
  }, {
    gender: "",
    category: "OKumar"
}, {
  gender: "",
  category: "Matha"
},
];

export default class RegTpl extends React.Component {
    render() {
        return (
            <ExcelFile element={<Button size="sm" color="primary">Download Excel Template</Button>}>
                <ExcelSheet data={regDataSet} name="Registration">
                    <ExcelColumn label="Centre" value="centre"/>
                    <ExcelColumn label="FullName" value="name"/>
                    <ExcelColumn label="Gender" value="gender"/>
                    <ExcelColumn label="Age" value="age"/>
                    <ExcelColumn label="Category" value="category"/>
                    <ExcelColumn label="Gyan_Years" value="gyan_years"/>
                    <ExcelColumn label="Paid" value="amt_paid"/>
                    <ExcelColumn label="MobileNo" value=""/>

                </ExcelSheet>
                <ExcelSheet data={optionDataSet} name="Allowed Values">
                    <ExcelColumn label="Gender" value="gender"/>
                    <ExcelColumn label="Category" value="category"/>

                </ExcelSheet>
            </ExcelFile>
        );
    }
}
