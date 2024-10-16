// src/components/Dashboard.js
import React from 'react';
import './Dashboard.css';

const Dashboard = ({ children }) => {
    return (
        <div className="dashboard">
            <div className="logo">
                <img src="./logo.png" alt="Logo" />
            </div>
            <h1 className="title">Panel de Administración</h1>
            <div className="admin-options">
                <button className="admin-button">Gestión de Libros</button>
                <button className="admin-button">Gestión de Usuarios</button>
                <button className="admin-button">Reportes</button>
                <button className="admin-button">Configuraciones</button>
            </div>
            <div className="content">
                {children}
            </div>
        </div>
    );
};

export default Dashboard;
