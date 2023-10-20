import { useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import { getMovieShowtimes } from '../../../apis/cinemaAPI';
import dayjs from 'dayjs';
import { Container, Grid, Tab, Tabs, Typography } from '@mui/material';
import style from './ShowtimesStyle.module.scss'
import { useNavigate } from 'react-router-dom';

export default function Showtimes({ movieId }) {
  const navigate = useNavigate()
  const [cinemas, setCinemas] = useState([])
  const [valueTabs, setValueTabs] = useState(0)

  const { data, isLoading } =
    useQuery({
      queryKey: ["movieShowtimes", movieId],
      queryFn: () => getMovieShowtimes(movieId),
      enabled: !!movieId,
    });

  const cinemaSystems = data?.heThongRapChieu || [];
  const handleGetCinemaSystem = (cinemaSystemId) => {
    const found = cinemaSystems.find((item) => item.maHeThongRap === cinemaSystemId);

    setCinemas(found.cumRapChieu);
  };

  const handleChangeValueTabs = (event, newValue) => {
    setValueTabs(newValue)
  }

  useEffect(() => {
    if (cinemaSystems.length > 0) {
      setCinemas(cinemaSystems[0].cumRapChieu);
    }
  }, [cinemaSystems])

  if (cinemaSystems?.length === 0) {
    return (
      <div className={style.jss1}>
        <div style={{ textAlign: 'center', marginTop: '100px', color: 'grey' }}>
          <h1>Chưa có lịch chiếu cho phim này</h1>
        </div>
      </div>
    )
  }
  return (
    <div>
      <Grid item xs={12} className={style.jss1}>
        <div style={{ padding: '25px' }} id="showtimes"></div>
        <Container className={style.jss2} >
          <Tabs orientation="vertical"
            value={valueTabs}
            onChange={handleChangeValueTabs}
            aria-label="Vertical tabs example"
            textColor="inherit"
          >
            {cinemaSystems.map((cinemaSystem) => {
              return (
                <Tab label={<div key={cinemaSystem.maHeThongRap}>
                  <img src={cinemaSystem.logo} alt="" width={50} height={50}
                    onClick={() => handleGetCinemaSystem(cinemaSystem.maHeThongRap)} />
                </div>} className={style.jss3} />

              )
            })}

          </Tabs>

          <div className={style.jss4}>
            {cinemas.map(cinema => {
              return (
                <Grid container style={{ padding: '8px 8px 0 8px' }} >
                  <Grid item xs={12} style={{ padding: '8px 0' }}>
                    <h3 style={{ color: 'rgb(139, 195, 74)', fontSize: '16px' }}>{cinema.tenCumRap}</h3>
                  </Grid>

                  {cinema.lichChieuPhim.map((showtime) => {
                    return (
                      <Grid item xs={3} style={{ padding: '8px 0' }}>
                        <div className={style.jss5}>
                          <a className={style.jss6}
                            onClick={() => navigate(`/purchase/${showtime.maLichChieu}`)}>
                            <Typography className={style.jss7}>{dayjs(showtime.ngayChieuGioChieu).format(
                              "DD-MM-YYYY"
                            )}</Typography>
                            <Typography className={style.jss8} width='10%'> ~</Typography>
                            <Typography className={style.jss9}>{dayjs(showtime.ngayChieuGioChieu).format(
                              "HH:mm"
                            )}</Typography>
                          </a>
                        </div>
                      </Grid>
                    )
                  })}
                </Grid>
              )
            })}
          </div>

        </Container>

      </Grid >
    </div >

  )
}
