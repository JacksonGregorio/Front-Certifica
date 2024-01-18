import React, { useState } from 'react';
import Modal from 'react-modal';

const UserModal = ({ data, onSave, onDelete, isOpen, onRequestClose }) => {
    const [name, setName] = useState(data.name);
    const [username, setUsername] = useState(data.username);
    const [company, setCompany] = useState(data.company);
    const [password, setPassword] = useState(data.password);

    const handleSave = () => {
        const updatedData = {
            ...data,
            name,
            username,
            company,
            password
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
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border border-gray-300 rounded-md px-2 py-1 mb-2"
            />
            <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="border border-gray-300 rounded-md px-2 py-1 mb-2"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-gray-300 rounded-md px-2 py-1 mb-2"
            />
            <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Save</button>
            <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded-md">Delete</button>
        </div>
        </Modal>
    );
};

export default UserModal;