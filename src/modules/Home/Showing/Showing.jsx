import React, { useEffect, useRef, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getMovies } from '../../../apis/movieAPI';
import { useNavigate } from 'react-router-dom';
import style from './ShowingStyle.module.scss'
import { Box, Container, Grid, Modal, Typography, Button } from '@mui/material';
import ReactPlayer from 'react-player';
import Slider from 'react-slick';

export default function Showing() {
  const [urlTrailer, seturlTrailer] = useState("")
  const { data = [], isLoading } = useQuery({
    queryKey: ["movie"],
    queryFn: getMovies,
  })

  const navigate = useNavigate();

  let trailer = "";
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = (movieTrailer) => {
    seturlTrailer(movieTrailer);
    return setOpenModal(true)
  }
  const handleClose = () => {
    return setOpenModal(false)
  }

  const styleModalVideo = {
    border: 'none',
    backgroundColor: 'tranferant',
    width: '640px',
    height: 'auto',
    top: '15%',
    left: '30%',
  };

  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    rows: 2,
    slidesPerRow: 4,
    dots: true,
    dotsClass: `${style.dots}`,
    responsive: [
      {
        breakpoint: 1008,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          slidesPerRow: 3,
        },
      },
      {
        breakpoint: 600,
        arrows: true,
        settings: 'unslick',
      },
    ]
  };

  return (
    <Container className={style.jss1} id='0'>
      <div>
        <div className={style.carouselItem}>
          <Container maxWidth="md">
            <Slider {...settings}>
              {data.map((movie) => {
                return (
                  <div>
                    <div style={{ margin: '10px' }}>
                      <a className={style.jss1}>
                        <Grid container spacing={{ xs: 2, sm: 0 }}>
                          <Grid item xs={4} sm={12} style={{ backgroundImage: `url(${movie.hinhAnh})` }} className={style.jss2}>
                            <Container className={style.jss6}>
                              <Button className={style.jss7}
                                onClick={() => { handleOpen(movie.trailer) }}>
                                <span>
                                  <img src="./image/buttonvideo.png" alt="" className={style.jss8} />
                                </span>
                              </Button>
                            </Container>
                          </Grid>
                          <Grid item xs={8} sm={12} className={style.jss9}>
                            <div className={style.jss11}>
                              <div className={style.jss3}>
                                <span className={style.jss4}>C18</span>
                                {movie.tenPhim}
                              </div>
                              <div>
                                <h4 className={style.jss5}>{movie.moTa}</h4>
                              </div>
                            </div>
                            <div>
                              <a onClick={() => navigate(`/movies/${movie.maPhim}`)} className={style.jss10} >Mua Vé</a>
                            </div>
                          </Grid>
                        </Grid>
                      </a>
                    </div>
                  </div>
                )
              })}
            </Slider>
          </Container>

        </div>
        <Modal sx={styleModalVideo} open={openModal} onClose={handleClose}>
          <div>
            <ReactPlayer url={`${urlTrailer}`} playing width="640px" />
          </div>
        </Modal>
      </div>
    </Container >
  )
}
