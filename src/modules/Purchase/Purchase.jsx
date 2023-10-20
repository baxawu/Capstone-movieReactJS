import React from 'react'
import SeatList from './SeatList/SeatList'
import Ticket from './Ticket/Ticket'
import { Grid } from '@mui/material'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getTicketRoomList } from '../../apis/ticketAPI'

export default function Purchase() {
    const { showtimeId } = useParams();
    const { data } = useQuery({
        queryKey: ['seatItem', showtimeId],
        queryFn: () => getTicketRoomList(showtimeId),

    })
    const seats = data?.danhSachGhe;
    return (
        <Grid container>
            <Grid item xs={8}><SeatList seats={seats} /></Grid>
            <Grid item xs={4}><Ticket data={data} /></Grid>
        </Grid>
    )
}
