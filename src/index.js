import App from './App'
import './index.css';
import React from 'react'
import ReactDOM from 'react-dom/client'
import { apiSlice } from "./features/apiSlice"
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ApiProvider api={apiSlice}>
            <App />
        </ApiProvider>
    </React.StrictMode >
);