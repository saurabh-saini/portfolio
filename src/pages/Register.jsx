import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [otp, setOtp] = useState("");
    const [submitting, setSubmitting] = useState(false);
    
    const { loginStep, setLoginStep, register, verifyRegister } = useAuth();
    const navigate = useNavigate();

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        if (!name || !email || !password) return;
        setSubmitting(true);
        const success = await register(name, email, password);
        setSubmitting(false);
    };

    const handleVerifySubmit = async (e) => {
        e.preventDefault();
        if (!otp) return;
        setSubmitting(true);
        const loggedInUser = await verifyRegister(email, otp);
        setSubmitting(false);
        if (loggedInUser) {
            if (loggedInUser.role === "admin") {
                navigate("/admin");
            } else {
                navigate("/");
            }
        }
    };

    return (
        <Layout>
            <section className="py-5 bg-light d-flex align-items-center" style={{ minHeight: "80vh", paddingTop: "15vh" }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-5">
                            <div className="card shadow-lg border-0 rounded-4">
                                <div className="card-body p-5">
                                    <h2 className="text-center mb-4 fw-bold text-dark">
                                        {loginStep === 1 ? "Create Account" : "Verify Email"}
                                    </h2>
                                    <p className="text-center text-muted mb-4 small">
                                        {loginStep === 1
                                            ? "Register a new profile to get full access to the portfolio."
                                            : `A 6-digit verification code has been sent to ${email}.`}
                                    </p>

                                    {loginStep === 1 ? (
                                        <form onSubmit={handleRegisterSubmit}>
                                            <div className="mb-3">
                                                <label htmlFor="nameInput" className="form-label fw-semibold">Your Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control form-control-lg rounded-3"
                                                    id="nameInput"
                                                    placeholder="John Doe"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                    required
                                                />
                                            </div>

                                            <div className="mb-3">
                                                <label htmlFor="emailInput" className="form-label fw-semibold">Email Address</label>
                                                <input
                                                    type="email"
                                                    className="form-control form-control-lg rounded-3"
                                                    id="emailInput"
                                                    placeholder="name@example.com"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    required
                                                />
                                            </div>

                                            <div className="mb-4">
                                                <label htmlFor="passwordInput" className="form-label fw-semibold">Password</label>
                                                <input
                                                    type="password"
                                                    className="form-control form-control-lg rounded-3"
                                                    id="passwordInput"
                                                    placeholder="•••••••• (Min. 6 chars)"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    minLength={6}
                                                    required
                                                />
                                            </div>

                                            <button
                                                type="submit"
                                                className="btn btn-primary btn-lg w-100 rounded-3 mb-4"
                                                disabled={submitting}
                                            >
                                                {submitting ? (
                                                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                ) : null}
                                                Register
                                            </button>

                                            <div className="text-center">
                                                <span className="text-muted small">Already have an account? </span>
                                                <Link to="/login" className="text-primary text-decoration-none small fw-bold">Login here</Link>
                                            </div>
                                        </form>
                                    ) : (
                                        <form onSubmit={handleVerifySubmit}>
                                            <div className="mb-4">
                                                <label htmlFor="otpInput" className="form-label fw-semibold">Enter OTP Code</label>
                                                <input
                                                    type="text"
                                                    className="form-control form-control-lg text-center rounded-3 fw-bold"
                                                    id="otpInput"
                                                    placeholder="123456"
                                                    maxLength={6}
                                                    pattern="\d{6}"
                                                    value={otp}
                                                    onChange={(e) => setOtp(e.target.value)}
                                                    required
                                                />
                                            </div>

                                            <button
                                                type="submit"
                                                className="btn btn-primary btn-lg w-100 rounded-3 mb-3"
                                                disabled={submitting}
                                            >
                                                {submitting ? (
                                                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                ) : null}
                                                Verify & Activate
                                            </button>

                                            <button
                                                type="button"
                                                className="btn btn-link w-100 text-decoration-none text-muted btn-sm"
                                                onClick={() => setLoginStep(1)}
                                                disabled={submitting}
                                            >
                                                <i className="ri-arrow-left-line me-1"></i> Back to Register
                                            </button>
                                        </form>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Register;
