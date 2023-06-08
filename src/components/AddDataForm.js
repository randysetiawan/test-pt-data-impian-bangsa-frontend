import axios from "axios"
import React, { useState } from "react"
import { Form, FormGroup, Label, Input, Button } from "reactstrap"
import { API_BASE_URL } from "../apiConfig"
import { useNavigate } from "react-router-dom"
import PropTypes from 'prop-types'

const AddDataForm = (props, {onSubmit}) => {
    
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        productID: "",
        productName: "",
        amount: "",
        customerName: "",
        status: "",
        transactionDate: "",
        createBy: "",
        createOn: "",
    })

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post(`${API_BASE_URL}/api/data`, formData)
            onSubmit(formData) 
        } catch (error) {
            console.error('Error adding data:', error)
        }
        props.setRefreshData(true)
    }

    return (
        <div>
            <h3>Add Data Form</h3>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="productID">Product ID</Label>
                    <Input
                        type="text"
                        name="productID"
                        id="productID"
                        value={formData.productID}
                        onChange={handleInputChange}
                    />
                    <Label for="productID">Product Name</Label>
                    <Input
                        type="text"
                        name="productName"
                        id="productName"
                        value={formData.productName}
                        onChange={handleInputChange}
                    />
                    <Label for="productID">Amount</Label>
                    <Input
                        type="number"
                        name="amount"
                        id="amount"
                        value={formData.amount}
                        onChange={handleInputChange}
                    />
                    <Label for="productID">Customer Name</Label>
                    <Input
                        type="text"
                        name="customerName"
                        id="customerName"
                        value={formData.customerName}
                        onChange={handleInputChange}
                    />
                    <Label for="productID">Transaction Date</Label>
                    <Input
                        type="date"
                        name="transactionDate"
                        id="transactionDate"
                        value={formData.transactionDate}
                        onChange={handleInputChange}
                    />
                    <Label for="productID">Create By</Label>
                    <Input
                        type="text"
                        name="createBy"
                        id="createBy"
                        value={formData.createBy}
                        onChange={handleInputChange}
                    />
                </FormGroup>
                <Button color="danger" onClick={()=> navigate('/')}>Back</Button>
                &nbsp;&nbsp;
                <Button color="primary" type="submit">Add Data</Button>
            </Form>
        </div>
    )
}


AddDataForm.propTypes = {
    refreshData: PropTypes.any,
    setRefreshData: PropTypes.any,
    // selectedData: PropTypes.any,
}


export default AddDataForm