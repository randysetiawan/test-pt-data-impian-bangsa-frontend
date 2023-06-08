import { Table, Button } from "reactstrap"
import axios from 'axios'
import { API_BASE_URL } from "../apiConfig"
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

const DataGrid = (props) => {
    const navigate = useNavigate()

    const handleEditClick = (e) => {
        navigate(`/edit`)
        props.setSelectedId(e)
        // props.setSelectedData({
        //     id: e, productID: props.gridData?.data.productID, productName: props.gridData?.data.productName, amount: props.gridData?.data.amount, 
        //     customerName: props.gridData?.data.customerName, 'status': props.gridData?.data.status, transactionDate: props.gridData?.data.transactionDate, 
        //     createBy: props.gridData?.data.createBy, createOn: props.gridData?.data.createOn
        // })
    }

    const handleViewDetailsClick = (e) => {
        navigate(`/details/`)
        props.setSelectedId(e)      
    }

    const handleDeleteClick = async (e) => {
        try {
            await axios.delete(`${API_BASE_URL}/api/data/${e}`)
            props.setRefreshData(true)
        } catch (error) {
            console.error("Error deleting data:", error)
        }
        props.setRefreshData(true)
    }

    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Month</th>
                        <th>Product ID</th>
                        <th>Product Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {props.gridData.map((data) => (
                        <tr key={data.year + data.month}>
                            <td>{data.year}</td>
                            <td>{data.month}</td>
                            <td>{data.productID}</td>
                            <td>{data.productName}</td>
                            <td>
                                <div>
                                    <Button className="mx-2" color="success" onClick={() => handleEditClick(data.id)}>Edit</Button>
                                    <Button className="mx-2" color="primary" onClick={() => handleViewDetailsClick(data.id)}>Details</Button>
                                    <Button className="mx-2" color="danger" onClick={() => handleDeleteClick(data.id)}>Delete</Button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Button color="primary" onClick={() => navigate('/add')}>Add</Button>
        </div>
    )
}

DataGrid.propTypes = {
    gridData: PropTypes.any,
    setGridData: PropTypes.any,
    setSelectedId: PropTypes.any,
    refreshData: PropTypes.any,
    setRefreshData: PropTypes.any,
    // setSelectedData: PropTypes.any,
}

export default DataGrid
