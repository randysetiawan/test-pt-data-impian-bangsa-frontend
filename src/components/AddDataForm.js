import axios from "axios"
import React, { useState } from "react"
import { Form, FormGroup, Label, Input, Button } from "reactstrap"
import { API_BASE_URL } from "../apiConfig"

const AddDataForm = ({ onSubmit }) => {
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

    const handleInputChange = (e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post(`${API_BASE_URL}/api/data`, formData)
        } catch(error) {
            console.error('Error adding data:', error)
        }
    }

    return(
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
        </FormGroup>
        <Button color="primary" type="submit">Add Data</Button>
        </Form>
    )
}

export default AddDataForm