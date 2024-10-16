// src/components/AdminInicio.jsx
import React from 'react';

const AdminInicio = () => {
    // Datos de ejemplo para la tabla
    const data = [
        { nombre: "Juan Pérez", rut: "12345678-9", numero: "123456789" },
        { nombre: "María González", rut: "98765432-1", numero: "987654321" },
        { nombre: "Carlos López", rut: "11223344-5", numero: "112233445" },
    ];

    return (
        <div className="admin-inicio">
            <h2>Registro de Usuarios</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>RUT</th>
                        <th>Número</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((user, index) => (
                        <tr key={index}>
                            <td>{user.nombre}</td>
                            <td>{user.rut}</td>
                            <td>{user.numero}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminInicio;
