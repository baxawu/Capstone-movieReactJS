import { Box, CircularProgress, Container, Grid, Rating, Typography } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getMovieShowtimes } from '../../../apis/cinemaAPI'
import style from "./MovieProfileStyle.module.scss"
import dayjs from 'dayjs'

export default function MovieProfile({ movieId }) {
  const { data } = useQuery({
    queryKey: ['movieProfile', movieId],
    queryFn: () => getMovieShowtimes(movieId),
    enabled: !!movieId
  })

  const handleScroll = () => {
    const element = document.getElementById('showtimes');
    element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div>
      <Container maxWidth="md" className={style.jss1}>
        <Grid container spacing={{ xs: 4 }} className={style.jss8}>
          <Grid item xs={3}>
            <div style={{ backgroundImage: `url(${data?.hinhAnh})` }}
              className={style.jss2}></div>
          </Grid>
          <Grid item xs={6}>
            <Grid container style={{ color: '#fff' }} className={style.jss3}
              spacing={{ xs: 1 }}>
              <Grid item xs={12}>
                <h4>{dayjs(data?.ngayKhoiChieu).format("DD.MM.YYYY")}</h4>
              </Grid>
              <Grid item xs={12}>
                <h3>{data?.tenPhim}</h3>
              </Grid>
              <Grid item xs={12}>
                <h5>{data?.heThongRapChieu[0]?.cumRapChieu[0]?.lichChieuPhim[0]?.thoiLuong}phút</h5>
              </Grid>
              <Grid item xs={12} style={{ marginTop: '25px' }}>
                <a onClick={handleScroll} className={style.jss4}>Mua vé</a>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3} style={{ position: 'relative' }}>
            <Grid container className={style.jss5}>
              <Grid item >
                <CircularProgress variant='determinate' value={100} className={style.jss6} />
                <Box>
                  <Typography className={style.jss7}>
                    <h1>{data?.danhGia}</h1>
                  </Typography>
                </Box>

              </Grid>
              <Grid item>
                <Rating name="read-only" value={5} readOnly
                  style={{ color: 'rgb(251, 66, 38)', marginTop: '15px' }} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>

  )
}
