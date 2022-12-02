import React, { useState } from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const App = () => {
   const columnDefs = [
    { headerName: "ID", field: "id" },
    { headerName: "Name", field: "name",}, 
    {headerName: "Email",field: "email",},
    { headerName: "Body", field: "body" },
    ]
    // const columnDefs = [
    //     { headerName: "ID", field: "id" },
    //     { headerName: "Name", field: "name",}, 
    //     {headerName: "Age",field: "age",},
    //     { headerName: "Phone", field: "phoneNumber" },
    //     { headerName: "DOB", field: "birthYear" },
    //     ]
    const rowData = [
        { id : 1, name: "Rahul", age: 19, phoneNumber: 9876543210, birthYear:2001}, 
        { id  : 2, name: "David", age: 17, phoneNumber: 9827654310,birthYear:2003}, 
        { id  : 3, name: "Dan", age: 25, phoneNumber: 9765438210,birthYear:1995 }]

    const defaultColDef = {
        sortable:true,
        editable:true,
        flex:1,filter:true,
        floatingFilter:true
    }

    const onGridReady=(params)=>{
        // console.log("hello, this is nithya")
        fetch("https://jsonplaceholder.typicode.com/comments").then(resp=>resp.json())
        .then(resp=>params.api.applyTransaction({add:resp}))

    }

   return (
    <div className="App">
        <br></br><br></br><br></br>
       <div className="ag-theme-alpine" style={{height: '400px'}}>
           <AgGridReact
                columnDefs={columnDefs}
                // rowData={rowData}
                defaultColDef={defaultColDef}
                onGridReady = {onGridReady}>
           </AgGridReact>
       </div>
    </div>
   );
};

render(<App />, document.getElementById('root'));

export default App;