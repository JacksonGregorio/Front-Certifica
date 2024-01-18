import React, { useState } from 'react';
import Modal from 'react-modal';

const CertificateModal = ({ certificate, onSave, onDelete, isOpen, onRequestClose  }) => {
    const [title, setTitle] = useState(certificate.title);
    const [description, setDescription] = useState(certificate.description);
    const [value, setValue] = useState(certificate.value);
    const [cpnj, setCpnj] = useState(certificate.cpnj);

    const handleSave = () => {
        const updatedCertificate = {
            ...certificate,
            title,
            description,
            value,
            cpnj
        };
        onSave(updatedCertificate);
    };

    const handleDelete = () => {
        onDelete(certificate.id);
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
        <div className="flex flex-col items-center">
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border border-gray-300 rounded-md px-2 py-1 mb-2"
            />
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="border border-gray-300 rounded-md px-2 py-1 mb-2"
            />
            <input
                type="number"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="border border-gray-300 rounded-md px-2 py-1 mb-2"
            />
            <input
                type="text"
                value={cpnj}
                onChange={(e) => setCpnj(e.target.value)}
                className="border border-gray-300 rounded-md px-2 py-1 mb-2"
            />
            <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Save</button>
            <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded-md">Delete</button>
        </div>
        </Modal>
    );
};

export default CertificateModal;
