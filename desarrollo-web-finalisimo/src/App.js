import React from 'react';
import Dashboard from './components/Dashboard';
import AdminInicio from './components/AdminInicio';
import Footer from './components/Footer';
import './styles.css';

function App() {
    return (
        <div className="App">
            <Dashboard />
            <AdminInicio />
            <Footer />
        </div>
    );
}

export default App;
