import { Button, TextField } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import style from './AddUserStyle.module.scss'
import { object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addUser } from '../../../apis/userAPI'
import Swal from 'sweetalert2'

const addUserSchema = object({
    taiKhoan: string().required("Tài khoản không được để trống!"),
    matKhau: string().required("Mật khẩu không được để trống!"),
    email: string().required("Email không được để trống!"),
    soDt: string().required("Số điện thoại không được để trống!"),
    hoTen: string().required("Họ tên không được để trống!"),
    maLoaiNguoiDung: string().required("Mã loại người dùng không được để trống!"),
})

export default function AddUser({ handleCloseAddUser }) {
    const queryClient = useQueryClient();

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            "taiKhoan": "",
            "matKhau": "",
            "email": "",
            "soDt": "",
            "hoTen": "",
            "maLoaiNguoiDung": "",
            "maNhom": "GP07",
        },
        resolver: yupResolver(addUserSchema),
        mode: 'onTouched'
    });
    const { mutate: onSubmit } = useMutation({
        mutationFn: (values) => {
            return addUser(values)
        },
        onSuccess: () => {
            Swal.fire(
                'Thành Công!',
                'Đã thêm người dùng mới',
                'success'
            )
            handleCloseAddUser()
            queryClient.invalidateQueries({ queryKey: ['getUserList'] })
        }
    })

    return (
        <div className={style.jss1}>
            <h3 style={{ textAlign: 'center' }}>THÊM NGƯỜI DÙNG MỚI</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <TextField error={errors.taiKhoan} className={style.jss2} label="Tài Khoản" variant="standard" {...register("taiKhoan")} helperText={errors.taiKhoan?.message} />
                </div>
                <div>
                    <TextField error={errors.matKhau} className={style.jss2} label="Mật Khẩu" variant="standard" {...register("matKhau")} helperText={errors.matKhau?.message} />
                </div>
                <div>
                    <TextField error={errors.email} label="Email" className={style.jss2} variant="standard" {...register("email")} helperText={errors.email?.message} />
                </div>
                <div style={{ display: 'flex' }}>
                    <TextField error={errors.hoTen} label="Họ tên" className={style.jss2} variant="standard" {...register("hoTen")} helperText={errors.hoTen?.message} />
                    <TextField error={errors.soDt} label="Số điện thoại" className={style.jss2} variant="standard" {...register("soDt")} helperText={errors.soDt?.message} />
                </div>
                <div style={{ display: 'flex' }}>
                    <TextField error={errors.maLoaiNguoiDung} label="Mã loại (KhachHang hoặc QuanTri)" className={style.jss2} variant="standard" {...register("maLoaiNguoiDung")} helperText={errors.maLoaiNguoiDung?.message} />
                    <Button type='submit' className={style.jss3}>Thêm</Button>
                </div>
            </form>
        </div>
    )
}
