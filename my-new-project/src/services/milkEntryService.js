// src/services/milkEntryService.js

const API_BASE_URL = 'http://localhost:9009/api/milk-entries';

export const createMilkEntry = async (userId, milkEntry) => {
    const response = await fetch(`${API_BASE_URL}/create/${userId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(milkEntry),
    });

    if (!response.ok) {
        throw new Error('Failed to create milk entry');
    }
    return response.json();
};

export const getAllMilkEntries = async () => {
    const response = await fetch(`${API_BASE_URL}/all`);
    if (!response.ok) {
        throw new Error('Failed to fetch milk entries');
    }
    return response.json();
};

export const getMilkEntryById = async (id) => {
    const response = await fetch(`${API_BASE_URL}/user/${id}`);
    if (!response.ok) {
        throw new Error('Milk entry not found');
    }
    return response.json();
};

export const getMilkEntriesByUserIdAndShift = async (userId, shift) => {
    const response = await fetch(`${API_BASE_URL}/user/${userId}/shift/${shift}`);
    if (!response.ok) {
        throw new Error('Failed to fetch milk entries by user and shift');
    }
    return response.json();
};

export const getMilkEntriesByDate = async (date) => {
    const response = await fetch(`${API_BASE_URL}/date?date=${date}`);
    if (!response.ok) {
        throw new Error('Failed to fetch milk entries by date');
    }
    return response.json();
};

export const getMilkEntriesByDateAndShift = async (date, shift) => {
    const response = await fetch(`${API_BASE_URL}/date/shift?date=${date}&shift=${shift}`);
    if (!response.ok) {
        throw new Error('Failed to fetch milk entries by date and shift');
    }
    return response.json();
};

export const updateMilkEntry = async (id, milkEntry) => {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(milkEntry),
    });

    if (!response.ok) {
        throw new Error('Failed to update milk entry');
    }
    return response.json();
};

export const deleteMilkEntry = async (id) => {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
        method: 'DELETE',
    });

    if (!response.ok) {
        throw new Error('Failed to delete milk entry');
    }
};
