import React, { useEffect, useState } from "react";
import { Table } from "reactstrap"
import axios from 'axios';
import { API_BASE_URL } from "../apiConfig"

const DataGrid = ({ data }) => {
    const [gridData, setGridData] = useState([])

    useEffect(() => {
        fetchData()
    }, [data])

    const fetchData = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/api/data`)
            setGridData(response.data)
        } catch(error) {
            console.error("Error fetching data")
        }
    }

    return(
        <Table>
        <thead>
            <tr>
            <th>Year</th>
            <th>Month</th>
            <th>Product ID</th>
            <th>Product Name</th>
            </tr>
        </thead>
        <tbody>
            {gridData.map((group) => (
            <tr key={group.year + group.month}>
                <td>{group.year}</td>
                <td>{group.month}</td>
                <td>{group.data.productID}</td>
                <td>{group.data.productName}</td>
            </tr>
            ))}
        </tbody>
    </Table>
    )
}

export default DataGrid;