import React, { useState } from 'react';
import Modal from 'react-modal';

const CompanyModal = ({ data, onSave, onDelete, isOpen, onRequestClose }) => {
    const [name, setName] = useState(data.name);
    const [cnpj, setCnpj] = useState(data.cnpj);
    const [email, setEmail] = useState(data.email);

    const handleSave = () => {
        const updatedData = {
            ...data,
            name,
            cnpj,
            email
        };
        onSave(updatedData);
    };

    const handleDelete = () => {
        onDelete(data.id);
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
        <div className="flex flex-col items-center">
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-gray-300 rounded-md px-2 py-1 mb-2"
            />
            <input
                type="text"
                value={cnpj}
                onChange={(e) => setCnpj(e.target.value)}
                className="border border-gray-300 rounded-md px-2 py-1 mb-2"
            />
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 rounded-md px-2 py-1 mb-2"
            />
            <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Save</button>
            <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded-md">Delete</button>
        </div>
        </Modal>
    );
};

export default CompanyModal;