import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminNavBar from '../../AdminNavBar/AdminNavBar';
import style from './AdminLayoutStyle.module.scss'
import AdminHeader from '../../AdminHeader';

export default function AdminLayout() {
    return (
        <div style={{ position: 'relative' }}>
            <AdminNavBar />
            <div>
                <AdminHeader />
                <Outlet />
            </div>

        </div>
    )
}
