import React, { useState } from 'react';
import data from "../userData";
import {Table, Button} from 'react-bootstrap';

export const dataColumns = [
    {
        text: '',
        dataField: 'picture' 
    },
    {
        text: 'ID',
        dataField: 'id' 
    },
    {
        text: 'User Name',
        dataField: 'username'
    },
    {
        text: 'First Name',
        dataField: 'first'
    },
    {
        text: 'Last Name',
        dataField: 'last',
        sort: true
    },
    {
        text: 'Email',
        dataField: 'email'
    }
];

function Directory(props) {

    const [employee, setEmployee] = useState({
        empsArray: data,
        columns: dataColumns,
        filteredEmps: [],
    })

    // const [ sorted, setSorted] = useState({
    //     sortColumn: dataColumns[4].dataField.value
    // });

    let newFiltered = [];

    const handleInput = (e) => {
        e.preventDefault();
        // have an if in the loop says if ur name starts with v then .push into newFilted
        employee.empsArray.map( (emp) => {
            if(emp.name.last.substr(0, e.target.value.length).toLowerCase() === e.target.value.toLowerCase()) {
                newFiltered.push(emp);
            } 
        })
        // console.log('This is the new filted array just the ppl we want', newFiltered)
        setEmployee({...employee, filteredEmps: newFiltered})
    }
    console.log("filteredEmps", employee.filteredEmps)

    let empsToDisplay = employee.empsArray;
    //If there are any EEs in the filteredEmps array, display in table view
   
    if (employee.filteredEmps.length > 0) {
        empsToDisplay = employee.filteredEmps;
    } else{
        empsToDisplay = employee.empsArray;
    }
   
    
    // function handleSortByLastName() {
    //     // sort array ascending or descending by last name
    //     if (employee.empsArray !== sorted) {
    //         // console.log(dataColumns)
    //         setEmployee(employee.empsArray.sort((a, b) => (a.name.last > b.name.last) ? 1 : -1));
    //         setSorted(true);
    //     } else {
    //         setEmployee(employee.empsArray.sort((a, b) => (a.name.last > b.name.last) ? -1 : 1));
    //         setSorted(false);
    //     }
    // }

    return (
        <div>
            <div className="search-container">
                <h1>Employee Directory</h1>
                <div>
                    <input onChange={handleInput}></input>
                    <Button className="search-button" onClick={handleInput}>Search</Button>
                </div>
            </div>
            <div>
                {/* <strong>Sort by: </strong>
                <Button onClick={handleSortByLastName} className="sort-button">Last Name</Button> */}
                <Table striped bordered hover variant="dark">
                    <thead>
                        < >
                            <tr>
                                <th></th>
                                <th>Employee ID</th>
                                <th>User Name</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                            </tr>
                        </>
                    </thead>
                    <tbody>
                        {empsToDisplay.map((singleEmp) => {
                            return (
                                < >
                                    <tr>
                                        <td><img src={singleEmp.picture.medium} /></td>
                                        <td>{singleEmp.id.value}</td>
                                        <td key={singleEmp.login.username}>{singleEmp.login.username}</td>
                                        <td>{singleEmp.name.first}</td>
                                        <td>{singleEmp.name.last}</td>
                                        <td>{singleEmp.email}</td>
                                    </tr>
                                </>
                            )
                        })
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default Directory;
