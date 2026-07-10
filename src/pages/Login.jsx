import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) return;
        setSubmitting(true);
        const loggedInUser = await login(email, password);
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
                                    <h2 className="text-center mb-4 fw-bold text-dark">Sign In</h2>
                                    <p className="text-center text-muted mb-4 small">
                                        Enter your email and password to access your account.
                                    </p>

                                    <form onSubmit={handleLoginSubmit}>
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
                                            <div className="position-relative">
                                                <input
                                                    type={showPassword ? "text" : "password"}
                                                    className="form-control form-control-lg rounded-3"
                                                    id="passwordInput"
                                                    placeholder="••••••••"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    required
                                                    style={{ paddingRight: "45px" }}
                                                />
                                                <button
                                                    type="button"
                                                    className="position-absolute top-50 end-0 translate-middle-y border-0 bg-transparent pe-3 text-muted"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    style={{ zIndex: 10, outline: "none", cursor: "pointer" }}
                                                >
                                                    <i className={showPassword ? "ri-eye-off-line" : "ri-eye-line"} style={{ fontSize: "1.2rem" }}></i>
                                                </button>
                                            </div>
                                        </div>

                                        <button
                                            type="submit"
                                            className="btn btn-primary btn-lg w-100 rounded-3 mb-4"
                                            disabled={submitting}
                                        >
                                            {submitting ? (
                                                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                            ) : null}
                                            Sign In
                                        </button>

                                        <div className="text-center">
                                            <span className="text-muted small">Don't have an account? </span>
                                            <Link to="/register" className="text-primary text-decoration-none small fw-bold">Register here</Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Login;
