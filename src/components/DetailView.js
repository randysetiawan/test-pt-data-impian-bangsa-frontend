import React, { useEffect, useState } from "react"
import PropTypes from 'prop-types'
import axios from "axios"
import { API_BASE_URL } from "../apiConfig"
import { Button } from "reactstrap"
import { useNavigate } from "react-router-dom"

const DetailView = (props) => {

    const navigate = useNavigate()
    const [selectedData, setSelectedData] = useState()

    useEffect(() => {
        fetchData()
    }, [])


    const fetchData = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/api/data/${props.selectedId}`)
            setSelectedData(response.data)
        } catch (error) {
            console.error("Error fetching data:", error)
        }
        props.setRefreshData(true)
    }
    console.log(selectedData)

    return (
        <div>
            <div style={{ display: props.selectedId === undefined ? "block" : "none" }}>
                <h3>NO DATA, PLEASE GO BACK</h3>
                <Button color="danger" onClick={() => navigate('/')}>Back</Button>
            </div>
            <div style={{ display: props.selectedId === undefined ? "none" : "block" }}>
                <h2>Data Details</h2>
                <p>Product ID: {selectedData?.productID}</p>
                <p>Product Name: {selectedData?.productName}</p>
                <p>Amount: {selectedData?.amount}</p>
                <p>Customer Name: {selectedData?.customerName}</p>
                <p>Status: {selectedData?.status}</p>
                <p>Transaction Date: {selectedData?.transactionDate}</p>
                <p>Create By: {selectedData?.createBy}</p>
                <p>Create On: {selectedData?.createOn}</p>
                <Button color="danger" onClick={() => navigate('/')}>Back</Button>
            </div>
        </div >
    )
}

DetailView.propTypes = {
    selectedId: PropTypes.any,
    refreshData: PropTypes.any,
    setRefreshData: PropTypes.any,
    // selectedData: PropTypes.any,
}

export default DetailView