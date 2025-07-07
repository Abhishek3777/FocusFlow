import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import AddStudyLog from "./pages/addStudyLog";

function App() {
  return (

    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />

      {/* Private route */}
      <Route path="/dashboard"
        element={<PrivateRoute>
          <Dashboard />
        </PrivateRoute>
        }
      />
      {/* Private route */}
      <Route path="/add"
        element={<PrivateRoute>
          <AddStudyLog />
        </PrivateRoute>
        }></Route>
    </Routes>

  );
}

export default App;
