import { Button, Divider } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import style from "./TicketStyles.module.scss";
import Swal from 'sweetalert2';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addTicket } from "../../../apis/ticketAPI";
import { purchase } from "../../../redux/movieTicketSlice"


export default function Ticket({ data }) {
    const dispatch = useDispatch();
    const queryClient = useQueryClient();

    const [dataTicket, setDataTicket] = useState({});
    let { selectedSeats, totalPrice } = useSelector((state) => {
        return state.movieTicket;
    })

    const { mutate: handleBuyTicket } = useMutation({
        mutationFn: () => addTicket(dataTicket),

        onSuccess: () => {
            Swal.fire(
                'Đặt vé thành công!',
                'Kiểm tra trong lịch sử đặt vé',
                'success'
            )
            dispatch(purchase())
            queryClient.invalidateQueries({ queryKey: ['seatItem'] })

        }
    })

    const handleSwal = () => {
        if (selectedSeats.length <= 0) {
            Swal.fire({
                icon: 'error',
                title: 'Bạn chưa chọn ghế',
                text: 'Vui lòng chọn ghế!',
            })
            return
        }
        setDataTicket({
            "maLichChieu": data?.thongTinPhim.maLichChieu,
            "danhSachVe": selectedSeats.map((seat) => {
                return ({
                    "maGhe": seat.maGhe,
                    "giaVe": seat.giaVe
                })
            })
        })
        handleBuyTicket()
    }

    return (
        <div className={style.jss1}>
            <div style={{ padding: '24px 16px' }}>
                <p className={style.jss5}>{totalPrice}VND</p>
            </div>
            <Divider variant='middle' />
            <div className={style.jss2}>
                <h3 style={{ fontSize: "16px" }}>Cụm Rạp</h3>
                <h3 className={style.jss3}>{data?.thongTinPhim.tenCumRap}</h3>
            </div>
            <Divider variant='middle' />
            <div className={style.jss2}>
                <h3 style={{ fontSize: "16px" }}>Địa chỉ</h3>
                <h3 className={style.jss3}>{data?.thongTinPhim.diaChi}</h3>
            </div>
            <Divider variant='middle' />
            <div className={style.jss2}>
                <h3 style={{ fontSize: "16px" }}>Rạp</h3>
                <h3 className={style.jss3}>{data?.thongTinPhim.tenRap}</h3>
            </div>
            <Divider variant='middle' />
            <div className={style.jss2}>
                <h3 style={{ fontSize: "16px" }}>Ngày giờ chiếu</h3>
                <h3 className={style.jss3}>{data?.thongTinPhim.ngayChieu} -
                    <span style={{ color: 'red' }}>{data?.thongTinPhim.gioChieu}</span></h3>
            </div>
            <Divider variant='middle' />
            <div className={style.jss2}>
                <h3 style={{ fontSize: "16px" }}>Tên phim</h3>
                <h3 className={style.jss3}>{data?.thongTinPhim.tenPhim}</h3>
            </div>
            <Divider variant='middle' />
            <div className={style.jss2}>
                <h3 style={{ fontSize: "16px" }}>Chọn</h3>
                <h3 className={style.jss3}>
                    {selectedSeats.map((seat) => {
                        if (seat === selectedSeats[0]) {
                            return `Ghế ${seat.tenGhe}`
                        }
                        return `, Ghế ${seat.tenGhe}`
                    })}
                </h3>
            </div>

            <Divider variant='middle' />
            <Button className={style.jss4}
                onClick={handleSwal}>ĐẶT VÉ</Button>

        </div>
    )
}
