import logo from './logo.svg';
import './App.css';
import DataGrid from "./components/DataGrid";
import AddDataForm from "./components/AddDataForm";
import EditDataForm from "./components/EditDataForm";
import DetailView from "./components/DetailView";

function App() {
  return (
    <div>
        <h1>Your App</h1>
        <DataGrid/>
        <AddDataForm />
        <EditDataForm />
        <DetailView />
    </div>
  );
}

export default App;
