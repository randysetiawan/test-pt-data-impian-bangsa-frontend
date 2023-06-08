import axios from "axios"
import React, { useEffect, useState } from "react"
import { Form, FormGroup, Label, Input, Button } from "reactstrap"
import { API_BASE_URL } from "../apiConfig"
import { useNavigate } from "react-router-dom"
import PropTypes from 'prop-types'

const EditDataForm = (props, {onSubmit}) => {
    
    const navigate = useNavigate()
    const [selectedData, setSelectedData] = useState()

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

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/api/data/${props.selectedId}`);
            setSelectedData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        props.setRefreshData(true)
    }
    console.log(selectedData)

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
            <h3>Edit Data Form</h3>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="productID">Product ID</Label>
                    <Input
                        type="text"
                        name="productID"
                        id="productID"
                        value={selectedData?.productID}
                        onChange={handleInputChange}
                    />
                    <Label for="productID">Product Name</Label>
                    <Input
                        type="text"
                        name="productName"
                        id="productName"
                        value={selectedData?.productName}
                        onChange={handleInputChange}
                    />
                    <Label for="productID">Amount</Label>
                    <Input
                        type="number"
                        name="amount"
                        id="amount"
                        value={selectedData?.amount}
                        onChange={handleInputChange}
                    />
                    <Label for="productID">Customer Name</Label>
                    <Input
                        type="text"
                        name="customerName"
                        id="customerName"
                        value={selectedData?.customerName}
                        onChange={handleInputChange}
                    />
                    <Label for="productID">Transaction Date</Label>
                    <Input
                        type="date"
                        name="transactionDate"
                        id="transactionDate"
                        value={selectedData?.transactionDate}
                        onChange={handleInputChange}
                    />
                    <Label for="productID">Create By</Label>
                    <Input
                        type="text"
                        name="createBy"
                        id="createBy"
                        value={selectedData?.createBy}
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


EditDataForm.propTypes = {
    refreshData: PropTypes.any,
    setRefreshData: PropTypes.any,
    selectedId: PropTypes.any,
}


export default EditDataForm