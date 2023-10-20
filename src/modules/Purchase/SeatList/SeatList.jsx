import React from 'react'
import style from "./SeatListStyle.module.scss"
import SeatItem from './SeatItem/SeatItem'

export default function ({ seats }) {
    return (
        <div className={style.jss1}>
            <SeatItem seats={seats} />
            <div className={style.jss2}>
                <div className={style.jss3}>
                    <button className={style.jss5}>X</button>
                    <p>Đã đặt</p>
                </div>
                <div className={style.jss3}>
                    <button className={style.jss4}> </button>
                    <p>Thường</p>
                </div>
                <div className={style.jss3}>
                    <button className={style.jss6}> </button>
                    <p>Vip</p>
                </div>
            </div>
        </div>
    )
}
