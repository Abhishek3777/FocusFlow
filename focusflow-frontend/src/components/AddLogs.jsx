import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../css/AddLogs.css"

const AddLogs = () => {
    const navigate = useNavigate();

    const handleNav = () => {
        navigate("/add");
    }

    return (
        <div className="add-logs-container">
            <button onClick={handleNav} className="add-logs-button">
                ➕ Add Study Log
            </button>
        </div>
    )
}

export default AddLogs
