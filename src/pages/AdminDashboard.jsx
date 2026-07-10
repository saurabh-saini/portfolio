import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout/Layout";
import { toast } from "react-toastify";

// Helper to parse concatenated duplicate email messages
const parseMessages = (rawMessage) => {
    if (!rawMessage) return [];
    
    // Split by the divider: "\n\n---\n"
    const parts = rawMessage.split("\n\n---\n");
    
    return parts.map((part) => {
        // Check if it starts with [timestamp] header
        const match = part.match(/^\[([^\]]+)\]\n([\s\S]*)$/);
        if (match) {
            return {
                timestamp: match[1],
                text: match[2].trim()
            };
        }
        return {
            timestamp: null, // First message doesn't have an inline timestamp
            text: part.trim()
        };
    });
};

const AdminDashboard = () => {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [confirmModal, setConfirmModal] = useState({
        isOpen: false,
        title: "",
        message: "",
        onConfirm: null
    });

    const triggerConfirm = (title, message, onConfirm) => {
        setConfirmModal({
            isOpen: true,
            title,
            message,
            onConfirm
        });
    };

    const handleDeleteMessage = (id) => {
        triggerConfirm(
            "Delete Inquiry",
            "Are you sure you want to delete this message inquiry? This action cannot be undone.",
            async () => {
                try {
                    const res = await axios.delete(`/api/v1/auth/clintInfo/${id}`);
                    if (res.data.success) {
                        setMessages(prev => prev.filter(msg => msg._id !== id));
                        toast.success(res.data.message || "Inquiry deleted successfully");
                    }
                } catch (err) {
                    console.error("Error deleting message:", err);
                    toast.error(err.response?.data?.message || "Failed to delete message.");
                }
            }
        );
    };

    const handleClearAllMessages = () => {
        triggerConfirm(
            "Clear All Inquiries",
            "WARNING: Are you absolutely sure you want to clear ALL inquiry submissions? This will permanently delete all records.",
            async () => {
                try {
                    const res = await axios.delete("/api/v1/auth/clintInfo");
                    if (res.data.success) {
                        setMessages([]);
                        toast.success(res.data.message || "All inquiries cleared successfully");
                    }
                } catch (err) {
                    console.error("Error clearing messages:", err);
                    toast.error(err.response?.data?.message || "Failed to clear inquiries.");
                }
            }
        );
    };

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const messagesRes = await axios.get("/api/v1/auth/clintInfo");
                if (messagesRes.data.success) {
                    setMessages(messagesRes.data.messages || []);
                }
            } catch (err) {
                console.error("Error fetching dashboard data:", err);
                setError(err.response?.data?.message || "Failed to load dashboard data. Access denied.");
            } finally {
                setLoading(false);
            }
        };

        fetchDashboardData();
    }, []);

    return (
        <Layout>
            <section className="admin-dashboard-section min-vh-80 d-flex align-items-center">
                {/* Background Glowing Blur Orbs */}
                <div className="orb-admin-1"></div>
                <div className="orb-admin-2"></div>

                <div className="container py-4" style={{ position: "relative", zIndex: 3 }}>
                    <div className="row mb-5">
                        <div className="col text-center animate-fade-in">
                            <h2 className="fw-bold text-dark d-inline-block position-relative pb-3">
                                <span className="text-gradient">Admin Dashboard</span>
                                <div className="heading-underline"></div>
                            </h2>
                            <p className="text-muted mt-3">Monitor contact form inquiries.</p>
                        </div>
                    </div>

                    {loading ? (
                        <div className="text-center my-5">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    ) : error ? (
                        <div className="alert alert-danger shadow-sm rounded-4 text-center my-4 p-4" role="alert">
                            <i className="ri-error-warning-line me-2 fs-4 align-middle"></i>
                            {error}
                        </div>
                    ) : messages.length === 0 ? (
                        <div className="admin-card-glass text-center p-5">
                            <p className="text-muted mb-0 fs-5">No client submissions found.</p>
                        </div>
                    ) : (
                        <div className="admin-card-glass p-4 p-md-5">
                            <div className="d-flex justify-content-between align-items-center mb-4 pb-3 border-bottom border-light flex-wrap gap-2">
                                <span className="text-dark fw-bold fs-5">
                                    <i className="ri-mail-line text-primary me-2"></i> 
                                    Inquiry Submissions <span className="badge bg-primary rounded-pill ms-2">{messages.length}</span>
                                </span>
                                <button 
                                    className="btn-admin-clear"
                                    onClick={handleClearAllMessages}
                                >
                                    <i className="ri-delete-bin-line"></i> Clear All Inquiries
                                </button>
                            </div>
                            <div className="row g-4">
                                {messages.map((msg, index) => (
                                    <div className="col-12 animate-fade-in" key={msg._id || index}>
                                        <div 
                                            className={`card border-0 shadow-sm p-4 admin-item-card ${
                                                index % 2 === 0 ? "border-left-secondary" : "border-left-primary"
                                            }`}
                                        >
                                            <div className="row align-items-center">
                                                <div className="col-md-1 d-none d-md-block text-center">
                                                    <span className="badge bg-secondary-subtle text-secondary rounded-circle px-3 py-2 fs-6">{index + 1}</span>
                                                </div>
                                                <div className="col-md-11">
                                                    <div className="row g-3 mb-4">
                                                        <div className="col-sm-6">
                                                            <span className="admin-meta-label d-block">
                                                                <i className="ri-user-line me-1 text-primary"></i> Client Name
                                                            </span>
                                                            <span className="admin-meta-value">{msg.name}</span>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <span className="admin-meta-label d-block">
                                                                <i className="ri-mail-line me-1 text-primary"></i> Email Address
                                                            </span>
                                                            <a href={`mailto:${msg.email}`} className="text-primary text-decoration-none admin-meta-value">{msg.email}</a>
                                                        </div>
                                                    </div>
                                                    <div className="row g-3 mb-3">
                                                        <div className="col-12">
                                                            <span className="admin-meta-label d-block mb-2">
                                                                <i className="ri-chat-quote-line me-1 text-primary"></i> Message History
                                                            </span>
                                                            <div className="admin-messages-timeline d-flex flex-column gap-3">
                                                                {parseMessages(msg.message).map((subMsg, subIndex) => (
                                                                    <div 
                                                                        className={`admin-message-bubble ${subIndex > 0 ? "admin-message-bubble-followup" : ""}`} 
                                                                        key={subIndex}
                                                                    >
                                                                        <div className="d-flex justify-content-between align-items-center mb-2 flex-wrap gap-1">
                                                                            <span className="fw-bold text-dark small text-uppercase tracking-wider">
                                                                                {subIndex === 0 ? "Initial Inquiry" : "Additional Inquiry"}
                                                                            </span>
                                                                            <span className="text-muted small fw-medium">
                                                                                <i className="ri-time-line me-1"></i>
                                                                                {subMsg.timestamp || (msg.createdAt && new Date(msg.createdAt).toLocaleString())}
                                                                            </span>
                                                                        </div>
                                                                        <p className="mb-0 text-secondary" style={{ whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>
                                                                            {subMsg.text}
                                                                        </p>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex justify-content-between align-items-center mt-3 pt-3 border-top border-light">
                                                        <button
                                                            className="btn-admin-action-danger"
                                                            onClick={() => handleDeleteMessage(msg._id)}
                                                        >
                                                            <i className="ri-delete-bin-line"></i> Delete Inquiry Thread
                                                        </button>
                                                        {msg.createdAt && (
                                                            <span className="text-muted small d-flex align-items-center gap-1 fw-medium">
                                                                <i className="ri-calendar-line text-muted"></i>
                                                                First Received: {new Date(msg.createdAt).toLocaleDateString()}
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Custom Confirmation Modal */}
                    {confirmModal.isOpen && (
                        <div 
                            className="modal fade show" 
                            style={{ 
                                display: "block", 
                                backgroundColor: "rgba(0, 0, 0, 0.55)", 
                                backdropFilter: "blur(4px)",
                                zIndex: 1060 
                            }} 
                            tabIndex="-1"
                        >
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content border-0 shadow-lg rounded-4 p-3 bg-white">
                                    <div className="modal-header border-0 pb-0">
                                        <h5 className="modal-title fw-bold text-dark d-flex align-items-center">
                                            <i className="ri-error-warning-line text-danger me-2 fs-4"></i>
                                            {confirmModal.title}
                                        </h5>
                                        <button 
                                            type="button" 
                                            className="btn-close shadow-none" 
                                            onClick={() => setConfirmModal({ isOpen: false, title: "", message: "", onConfirm: null })}
                                            aria-label="Close"
                                        ></button>
                                    </div>
                                    <div className="modal-body py-3">
                                        <p className="text-muted mb-0">{confirmModal.message}</p>
                                    </div>
                                    <div className="modal-footer border-0 pt-0 gap-2">
                                        <button 
                                            type="button" 
                                            className="btn btn-light border rounded-3 px-3 fw-semibold text-muted" 
                                            onClick={() => setConfirmModal({ isOpen: false, title: "", message: "", onConfirm: null })}
                                        >
                                            Cancel
                                        </button>
                                        <button 
                                            type="button" 
                                            className="btn btn-danger rounded-3 px-4 fw-bold shadow-sm" 
                                            onClick={() => {
                                                if (confirmModal.onConfirm) confirmModal.onConfirm();
                                                setConfirmModal({ isOpen: false, title: "", message: "", onConfirm: null });
                                            }}
                                        >
                                            Confirm
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </Layout>
    );
};

export default AdminDashboard;
