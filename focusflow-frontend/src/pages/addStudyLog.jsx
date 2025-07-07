import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Label } from 'recharts';
import API from '../api/api';


const addStudyLog = () => {
    const [form, setForm] = useState({ "subject": "", "duration": "", "date": "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
           await API.post("/studyLog", form);
            navigate("/dashboard");
        }
        catch (err) {
            console.log(err.message);
        }
    }


    return (
        <div>

            <h2>Add Study Log Form</h2>
            <form>
                <Label>Subject</Label>
                <input type="text" placeholder='subject' name='subject' value={form.subject} onChange={handleChange} required />
                <Label>Duration</Label>
                <input type="text" placeholder='duration' name='duration' value={form.duration} onChange={handleChange} required />
                <Label>Date</Label>
                <input type="text" placeholder='date' name='date' value={form.date} onChange={handleChange} required />



                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>

    )
}

export default addStudyLog
