import React, { useState } from 'react';
import data from "../userData";
import { Table, Button } from 'react-bootstrap';

export const columns = [
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
        columns: columns,
        filteredEmps: []
    })

    const [sorted, setSorted] = useState(
        {
            alphabetical: true,
            ascending: true,
            sortedEmployees: [],
            employees: []
        }
    );

    const handleInput = (e) => {
        e.preventDefault();
        let newFiltered = [];

        //loop 
        // have an if in the loop says if ur name starts with v then .push into newFilted
        employee.empsArray.map( (emp) => {
            if(emp.name.last.substr(0, e.target.value.length).toUpperCase() === e.target.value.toUpperCase()) {
                newFiltered.push(emp);
            } 
        })
        // console.log('This is the new filted array of just the ppl we want', newFiltered)
        setEmployee({...employee, filteredEmps: newFiltered});

    }

    // let empsToDisplay = employee.empsArray;
    let filteredEmps = employee.empsArray;
    // console.log("Unfiltered empsToDisplay", empsToDisplay)
    // console.log("filteredEmps", employee.filteredEmps)

    //if any emps in filteredEmps array, add to empsToDisplay array
    // console.log("newFilteredEmps", newFilteredEmps)
    // empsToDisplay.map((singleEmp) => {
    //     let newFilteredEmps = employee.filteredEmps;
    //     if (newFilteredEmps.length > 0) {
    //         // console.log("newFilteredEmps", newFilteredEmps)
    //         empsToDisplay = newFilteredEmps;
    //     } else {
    //         empsToDisplay = employee.empsArray;
    //     } 
    // }) ;
    // console.log("Filtered empsToDisplay", empsToDisplay)
    
    // function handleSortByLastName() {
    //     // sort array ascending or descending by last name
    //     if (employee.columns == setSorted(false)) {
    //         setEmployee(filteredEmps.sort((a, b) => (a.last > b.last) ? 1 : -1));
    //         setSorted(true);
    //     } else {
    //         setEmployee(filteredEmps.sort((a, b) => (a.last > b.last) ? -1 : 1));
    //         setSorted(false);
    //     }
    // }

    function handleSortByLastName() {
        let sortEmp = [];
        if (sorted.alphabetical) {
            sortEmp = this.props.empList.sort((a, b) => {
                let nameA = a.name.last.toLowerCase(), nameB = b.name.last.toLowerCase();
                if (nameA < nameB)
                    return -1
                if (nameA > nameB)
                    return 1
                return 0
            })
        } else {
            sortEmp = this.props.empList.sort((a, b) => {
                var nameA = a.name.last.toLowerCase(), nameB = b.name.last.toLowerCase();
                if (nameA > nameB)
                    return -1
                if (nameA < nameB)
                    return 1
                return 0
            })
        }
        setSorted({
            alphabetical: !this.state.alphabetical,
            sortedEmployees: sortEmp

        })
    }

    return (
        <div>
            <div className="search-container">
                <h1>Employee Directory</h1>
                <div>
                    <input onChange={handleInput}></input>
                    <Button className="search-button" onClick={handleInput}>Search</Button>
                </div>
            </div>
            <Table striped bordered hover variant="dark">
                <thead>
                    < >
                        <tr>
                            <th></th>
                            <th>User Name</th>
                            <th >First Name</th>
                            <th onClick={() => handleSortByLastName}>Last Name</th>
                            <th>Email</th>
                        </tr>
                    </>
                </thead>
                <tbody>
                    {filteredEmps.map((singleEmp) => {
                        return (
                            < >
                                <tr>
                                    <td><img src={singleEmp.picture.medium} /></td>
                                    <td>{singleEmp.login.username}</td>
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
    );
}

export default Directory;