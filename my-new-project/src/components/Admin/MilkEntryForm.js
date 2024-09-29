import React, { useState, useEffect } from 'react';

const MilkEntryForm = () => {
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        shiftType: 'MORNING',
        milkType: 'COW',
        quantity: '',
        fat: '',
        snf: '',
        degree: '',
        todaysPrice: '',
        totalPrice: '0.00'
    });

    useEffect(() => {
        // Retrieve the selected client information from localStorage
        const selectedClient = JSON.parse(localStorage.getItem('selectedClient'));
        if (selectedClient) {
            setFormData(prevState => ({
                ...prevState,
                id: selectedClient.id,
                name: selectedClient.name
            }));
        }
    }, []);

    useEffect(() => {
        const quantity = parseFloat(formData.quantity) || 0;
        const todaysPrice = parseFloat(formData.todaysPrice) || 0;
        const totalPrice = (quantity * todaysPrice).toFixed(2);
        setFormData(prevState => ({
            ...prevState,
            totalPrice: totalPrice
        }));
    }, [formData.quantity, formData.todaysPrice]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const milkEntry = {
            milkType: formData.milkType,
            quantity: parseFloat(formData.quantity),
            fat: parseFloat(formData.fat),
            snf: parseFloat(formData.snf),
            degree: parseFloat(formData.degree),
            price: parseFloat(formData.todaysPrice),
            shift: formData.shiftType,
        };

        try {
            const response = await fetch(`http://localhost:9009/api/milk-entries/create/${formData.id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(milkEntry),
            });

            if (response.ok) {
                setFormData(prevState => ({
                    ...prevState,
                    id: '',
                    name: '',
                    quantity: '',
                    fat: '',
                    snf: '',
                    degree: '',
                    todaysPrice: '',
                    totalPrice: '0.00'
                }));
                alert('Milk entry created successfully!');
            } else {
                alert('Error creating milk entry.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while creating the milk entry.');
        }
    };

    const containerStyle = {
        fontFamily: "sans-serif",
        margin: 0,
        padding: 0,
        backgroundColor: "#f4f4f4",
        display: "flex",
        flexDirection: "row",
    };

    const sidebarStyle = {
        backgroundColor: "#fff",
        width: "200px",
        padding: "20px",
        boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
    };

    const contentStyle = {
        flex: 1,
        padding: "20px",
    };

    const h3Style = {
        marginBottom: "20px",
        fontSize: "1.2rem",
        color: "#333",
    };

    const ulStyle = {
        listStyle: "none",
        padding: 0,
    };

    const liStyle = {
        marginBottom: "10px",
    };

    const aStyle = {
        display: "block",
        padding: "10px",
        textDecoration: "none",
        color: "#333",
        borderRadius: "5px",
        transition: "background-color 0.3s ease",
    };

    const aHoverStyle = {
        backgroundColor: "#eee",
    };

    const styles = {
        formContainer: {
            flex: 1,
            padding: '20px',
        },
        form: {
            width: '400px',
            margin: '20px auto',
        },
        div: {
            marginBottom: '10px',
        },
        label: {
            display: 'block',
            marginBottom: '5px',
        },
        input: {
            width: '100%',
            padding: '8px',
            boxSizing: 'border-box',
        },
        select: {
            width: '100%',
            padding: '8px',
            boxSizing: 'border-box',
        },
        button: {
            padding: '10px 20px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
        }
    };

    return (
        <div style={containerStyle}>
            {/* Sidebar Menu */}
            <div style={sidebarStyle}>
                <h3 style={h3Style}>Admin Panel</h3>
                <ul style={ulStyle}>
                    <li style={liStyle}>
                        <a href="/admin" style={aStyle}>Dashboard</a>
                    </li>
                    <li style={liStyle}>
                        <a href="/read" style={aStyle}>Clients List</a>
                    </li>
                    <li style={liStyle}>
                        <a href="#" style={aStyle}>Milk Collection</a>
                    </li>
                    <li style={liStyle}>
                        <a href="/create" style={aStyle}>Register Admin</a>
                    </li>
                    <li style={liStyle}>
                        <a href="#" style={aStyle}>Report</a>
                    </li>
                    <li style={liStyle}>
                        <a href="/login" style={aStyle}>Logout</a>
                    </li>
                </ul>
            </div>
            <div style={styles.formContainer}>
                <h1>Milk Entry</h1>
                <form onSubmit={handleSubmit} style={styles.form}>
                    <div style={styles.div}>
                        <label htmlFor="id" style={styles.label}>ID:</label>
                        <input
                            type="text"
                            id="id"
                            name="id"
                            value={formData.id}
                            readOnly
                            style={styles.input}
                        />
                    </div>

                    <div style={styles.div}>
                        <label htmlFor="name" style={styles.label}>Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            readOnly
                            style={styles.input}
                        />
                    </div>

                    <div style={styles.div}>
                        <label htmlFor="shiftType" style={styles.label}>Shift:</label>
                        <select
                            id="shiftType"
                            name="shiftType"
                            value={formData.shiftType}
                            onChange={handleInputChange}
                            style={styles.select}
                        >
                            <option value="MORNING">Morning</option>
                            <option value="EVENING">Evening</option>
                        </select>
                    </div>

                    <div style={styles.div}>
                        <label htmlFor="milkType" style={styles.label}>Milk Type:</label>
                        <select
                            id="milkType"
                            name="milkType"
                            value={formData.milkType}
                            onChange={handleInputChange}
                            style={styles.select}
                        >
                            <option value="COW">Cow</option>
                            <option value="BUFFALO">Buffalo</option>
                        </select>
                    </div>

                    <div style={styles.div}>
                        <label htmlFor="quantity" style={styles.label}>Quantity (liters):</label>
                        <input
                            type="number"
                            id="quantity"
                            name="quantity"
                            value={formData.quantity}
                            onChange={handleInputChange}
                            required
                            style={styles.input}
                        />
                    </div>

                    <div style={styles.div}>
                        <label htmlFor="fat" style={styles.label}>Fat (%):</label>
                        <input
                            type="number"
                            id="fat"
                            name="fat"
                            value={formData.fat}
                            onChange={handleInputChange}
                            required
                            style={styles.input}
                        />
                    </div>

                    <div style={styles.div}>
                        <label htmlFor="snf" style={styles.label}>SNF (%):</label>
                        <input
                            type="number"
                            id="snf"
                            name="snf"
                            value={formData.snf}
                            onChange={handleInputChange}
                            required
                            style={styles.input}
                        />
                    </div>

                    <div style={styles.div}>
                        <label htmlFor="degree" style={styles.label}>Degree:</label>
                        <input
                            type="number"
                            id="degree"
                            name="degree"
                            value={formData.degree}
                            onChange={handleInputChange}
                            required
                            style={styles.input}
                        />
                    </div>

                    <div style={styles.div}>
                        <label htmlFor="todaysPrice" style={styles.label}>Today's Price (per liter):</label>
                        <input
                            type="number"
                            id="todaysPrice"
                            name="todaysPrice"
                            value={formData.todaysPrice}
                            onChange={handleInputChange}
                            required
                            style={styles.input}
                        />
                    </div>

                    <div style={styles.div}>
                        <label htmlFor="totalPrice" style={styles.label}>Total Price:</label>
                        <input
                            type="text"
                            id="totalPrice"
                            name="totalPrice"
                            value={formData.totalPrice}
                            readOnly
                            style={styles.input}
                        />
                    </div>

                    <button type="submit" style={styles.button}>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default MilkEntryForm;

