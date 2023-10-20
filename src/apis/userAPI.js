import React from 'react'
import fetcher from "./fetcher"

export const signin = async (payload) => {
    try {
        const response = await fetcher.post("/QuanLyNguoiDung/DangNhap", payload);
        return response.data?.content;
    } catch (error) {
        throw error.response.data?.content;
    }
}
export const signup = async (payload) => {
    try {
        const response = await fetcher.post("/QuanLyNguoiDung/DangKy", payload);
        return response.data?.content;
    } catch (error) {
        alert(error.response.data?.content)
        throw error.response.data?.content;
    }
}

export const getUserInfor = async (taiKhoan) => {
    try {
        const response = await fetcher.get("/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang", {
            params: {
                MaNhom: "GP07",
                tuKhoa: taiKhoan,
            }
        });
        return response.data?.content

    } catch (error) {
        throw error.response.data
    }
}
export const getUserList = async (page) => {
    try {
        const response = await fetcher.get("/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang", {
            params: {
                soTrang: page,
                MaNhom: "GP07",
                soPhanTuTrenTrang: 3,
            }
        });
        return response.data?.content

    } catch (error) {
        throw error.response.data
    }
}
export const addUser = async (payload) => {
    try {
        const response = await fetcher.post("/QuanLyNguoiDung/ThemNguoiDung", payload);
        return response.data.content;
    } catch (error) {
        alert(error.response.data.content)
        throw error.response.data.content
    }
}
export const deleteUser = async (taiKhoan) => {
    try {
        const response = await fetcher.delete("/QuanLyNguoiDung/XoaNguoiDung", {
            params: {
                TaiKhoan: taiKhoan
            }
        })
    } catch (error) {
        throw error.response.data
    }
}

export const updateUser = async (taiKhoan) => {
    try {
        const response = await fetcher.post("/QuanLyNguoiDung/CapNhatThongTinNguoiDung", taiKhoan)
        return response.data.content
    } catch (error) {
        alert(error.response.data.content)
        throw error.response.data.content
    }
}

export const updateUserInfor = async (taiKhoan) => {
    try {
        const response = await fetcher.put("/QuanLyNguoiDung/CapNhatThongTinNguoiDung", taiKhoan)
        return response.data.content
    } catch (error) {
        alert(error.response.data.content)
        throw error.response.data.content
    }
}

export const searchUserList = async (searchTerm, page) => {
    try {
        const response = await fetcher.get("QuanLyNguoiDung/TimKiemNguoiDungPhanTrang", {
            params: {
                soTrang: page,
                MaNhom: "GP07",
                tuKhoa: searchTerm,
                soPhanTuTrenTrang: 3
            }
        })
        return response.data.content
    } catch (error) {
        throw error.response.data
    }
}