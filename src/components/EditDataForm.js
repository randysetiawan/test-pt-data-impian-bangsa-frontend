import React, { useEffect, useState } from "react"
import { Form, FormGroup, Label, Input, Button } from "reactstrap"
import axios from "axios"
import { API_BASE_URL } from "../apiConfig"

const EditDataForm = ({ dataId, data, onSubmit }) => {
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
    }, [dataId])

    const fetchData = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/api/data/${dataId}`)
            setFormData(response.data)
        } catch (error) {
            console.error("Error fetching data", error)
        }
    }

    useEffect(() => {
        setFormData(data)
    }, [data]);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.put(`${API_BASE_URL}/api/data/${dataId}`, formData)
            onSubmit()
        } catch (error) {
            console.error("Error updating data:", error);
        }
    }

    return (
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
            <Button color="primary" type="submit">Update Data</Button>
        </Form>
    )
}

export default EditDataForm;