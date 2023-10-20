import React from 'react'
import { object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import style from "../AddUser/AddUserStyle.module.scss";
import { Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateUser } from "../../../apis/userAPI"
import Swal from 'sweetalert2';

const addUserSchema = object({
    taiKhoan: string().required("Tài khoản không được để trống!"),
    matKhau: string().required("Mật khẩu không được để trống!"),
    email: string().required("Email không được để trống!"),
    soDt: string().required("Số điện thoại không được để trống!"),
    hoTen: string().required("Họ tên không được để trống!"),
    maLoaiNguoiDung: string().required("Mã loại người dùng không được để trống!"),
})

export default function UpdateUser({ item, handleCloseUpdateUser }) {
    const queryClient = useQueryClient()
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            "taiKhoan": item.taiKhoan,
            "matKhau": item.matKhau,
            "email": item.email,
            "soDt": item.soDt,
            "hoTen": item.hoTen,
            "maLoaiNguoiDung": item.maLoaiNguoiDung,
            "maNhom": "GP07",
        },
        resolver: yupResolver(addUserSchema),
        mode: 'onTouched'
    });

    const { mutate: onSubmit } = useMutation({
        mutationFn: (values) => {
            return updateUser(values)
        },
        onSuccess: () => {
            handleCloseUpdateUser()
            Swal.fire(
                'Thành Công!',
                'Đã cập nhật thông tin người dùng',
                'success'
            )
            queryClient.invalidateQueries({ queryKey: ['getUserList'] })
            queryClient.invalidateQueries({ queryKey: ['getDataSearch'] })
        }
    })

    return (
        <div className={style.jss1}>
            <h3 style={{ textAlign: 'center' }}>CẬP NHẬT THÔNG TIN</h3>
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
                    <Button type='submit' className={style.jss3}>CẬP NHẬT</Button>
                </div>
            </form>
        </div>
    )
}
