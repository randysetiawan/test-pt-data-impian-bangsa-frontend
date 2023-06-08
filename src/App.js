import './App.css'
import DataGrid from "./components/DataGrid"
import AddDataForm from "./components/AddDataForm"
import React, { useEffect, useState } from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import EditDataForm from './components/EditDataForm'
import DetailView from './components/DetailView'
import axios from 'axios'
import { API_BASE_URL } from './apiConfig'

function App() {
  const [refreshData, setRefreshData] = useState(false)
  const [currentPage, setCurrentPage] = useState('')
  const [gridData, setGridData] = useState([])
  const [selectedId, setSelectedId] = useState()
  
  useEffect(() => {
    fetchData()
  }, [refreshData])

  const fetchData = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/data`)
      setGridData(response.data)
    } catch (error) {
      console.error("Error fetching data:", error)
    }
    setRefreshData(false)
  }

  return (
    <div className='container'>

      <h1>Data Management</h1>
      <Router>
        <Routes>
          <Route path="/" element={<DataGrid gridData={gridData} setGridData={setGridData} setSelectedId={setSelectedId} setRefreshData={setRefreshData} refreshData={refreshData} />} />
          <Route path="add" element={<AddDataForm setRefreshData={setRefreshData} refreshData={refreshData}/>} />
          <Route path="edit" element={<EditDataForm selectedId={selectedId} setRefreshData={setRefreshData} refreshData={refreshData}/>} />
          <Route path="details" element={<DetailView selectedId={selectedId} setRefreshData={setRefreshData} refreshData={refreshData}/>} />
        </Routes>
      </Router>

    </div>
  )
}

export default App