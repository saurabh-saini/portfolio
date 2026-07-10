import React from 'react'
import Layout from '../components/Layout/Layout'

const PageNotFound = () => {
  return (
    <Layout>
        <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '60vh' }}>
        <h1 className="display-1 fw-bold text-danger">404</h1>
        <h2 className="mb-3">Page Not Found</h2>
        <p className="text-muted text-center mb-4">Oops! The page you're looking for doesn't exist.</p>
        <a href="/" className="btn btn-primary">Go Home</a>
      </div>
    </Layout>
  )
}

export default PageNotFound