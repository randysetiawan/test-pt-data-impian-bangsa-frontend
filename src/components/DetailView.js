import React, { useState } from "react"

const DetailView = ({ data }) => {
    return(
        <div>
            <h2>Data Details</h2>
            <p>Product ID: {data.productID}</p>
            <p>Product Name: {data.productName}</p>
            <p>Amount: {data.amount}</p>
            <p>Customer Name: {data.customerName}</p>
            <p>Status: {data.status}</p>
            <p>Transaction Date: {data.transactionDate}</p>
            <p>Create By: {data.createBy}</p>
            <p>Create On: {data.createOn}</p>
        </div>
    )
}

export default DetailView