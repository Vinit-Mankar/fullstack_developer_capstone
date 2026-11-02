
import React, { useState } from "react";

function Register() {
    const [formData, setFormData] = useState({
        username: "",
        first_name: "",
        last_name: "",
        email: "",
        password: ""
    });

    const [message, setMessage] = useState("");

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setMessage("");

        try {
            const response = await fetch("/djangoapp/register/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                setMessage("Registration successful!");
                setFormData({
                    username: "",
                    first_name: "",
                    last_name: "",
                    email: "",
                    password: ""
                });
            } else {
                setMessage(data.error || "Registration failed.");
            }
        } catch (error) {
            setMessage("Unable to connect to the server.");
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h2 style={styles.heading}>Create Your Account</h2>
                <p style={styles.subtitle}>
                    Sign up to Cars Dealership
                </p>

                <form onSubmit={handleSubmit}>
                    <div style={styles.formGroup}>
                        <label>Username</label>
                        <input
                            type="text"
                            name="username"
                            placeholder="Enter Username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                            style={styles.input}
                        />
                    </div>

                    <div style={styles.formGroup}>
                        <label>First Name</label>
                        <input
                            type="text"
                            name="first_name"
                            placeholder="Enter First Name"
                            value={formData.first_name}
                            onChange={handleChange}
                            required
                            style={styles.input}
                        />
                    </div>

                    <div style={styles.formGroup}>
                        <label>Last Name</label>
                        <input
                            type="text"
                            name="last_name"
                            placeholder="Enter Last Name"
                            value={formData.last_name}
                            onChange={handleChange}
                            required
                            style={styles.input}
                        />
                    </div>

                    <div style={styles.formGroup}>
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            style={styles.input}
                        />
                    </div>

                    <div style={styles.formGroup}>
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            style={styles.input}
                        />
                    </div>

                    <button type="submit" style={styles.button}>
                        Register
                    </button>
                </form>

                {message && (
                    <p style={styles.message}>{message}</p>
                )}
            </div>
        </div>
    );
}

const styles = {
    container: {
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f2f5f9",
        padding: "25px"
    },
    card: {
        width: "100%",
        maxWidth: "450px",
        padding: "35px",
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        boxShadow: "0 4px 18px rgba(0,0,0,0.12)"
    },
    heading: {
        textAlign: "center",
        color: "#123e68",
        marginBottom: "8px"
    },
    subtitle: {
        textAlign: "center",
        color: "#777",
        marginBottom: "25px"
    },
    formGroup: {
        display: "flex",
        flexDirection: "column",
        marginBottom: "17px",
        gap: "7px"
    },
    input: {
        padding: "12px",
        border: "1px solid #ccc",
        borderRadius: "6px",
        fontSize: "15px"
    },
    button: {
        width: "100%",
        padding: "13px",
        backgroundColor: "#123e68",
        color: "white",
        border: "none",
        borderRadius: "6px",
        fontSize: "16px",
        fontWeight: "bold",
        cursor: "pointer"
    },
    message: {
        textAlign: "center",
        marginTop: "15px",
        color: "#1769aa"
    }
};

export default Register;

