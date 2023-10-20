import { useQuery } from '@tanstack/react-query'
import React from 'react'
import style from './SeatItemStyle.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { selectedSeat } from '../../../../redux/movieTicketSlice'

export default function SeatItem({ seats }) {

    const { selectedSeats } = useSelector((state) => {
        return state.movieTicket;
    })

    const dispatch = useDispatch();
    const handleSelecteSeat = (seat, isSelected, giaVe) => {
        dispatch(selectedSeat({ ...seat, isSelected: !isSelected, giaVe }))
    }

    return (
        <div>
            {seats?.map((seat) => {
                const isSelected = selectedSeats.find((item) => {
                    return item.stt === seat.stt
                })

                let stylejss = `${style.jss1}`
                if (seat.loaiGhe === "Vip") {
                    stylejss = `${style.jss3}`;
                }
                if (seat.daDat === true) {
                    stylejss = `${style.jss2}`
                }
                if (isSelected) {
                    stylejss = `${style.jss4}`
                }

                let i = 16;
                if (seat.stt === i || seat.stt % i === 0) {
                    return (
                        <div style={{ display: 'inline' }}>
                            <button key={seat.stt}
                                className={stylejss}
                                onClick={() => handleSelecteSeat(seat, !!isSelected, +seat.giaVe)}
                                disabled={seat.daDat}
                            >
                                {seat.daDat ? "X" : `${seat.tenGhe}`}</button>
                            <br />
                        </div>
                    )
                }
                return (
                    <button key={seat.stt}
                        disabled={seat.daDat}
                        className={stylejss}
                        onClick={() => handleSelecteSeat(seat, !!isSelected, +seat.giaVe)}>
                        {seat.daDat ? "X" : `${seat.tenGhe}`}</button>
                )
            })}
        </div >
    )
}
