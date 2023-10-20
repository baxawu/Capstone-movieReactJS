import React from 'react'
import MovieProfile from './MovieProfile/MovieProfile'
import Showtimes from './Showtimes/Showtimes'
import { useParams } from 'react-router-dom'
import { Container } from '@mui/material';

export default function Details() {

  const { movieId } = useParams();
  return (
    <div style={{ position: 'relative', backgroundColor: 'rgb(10,32,41)', height: '1250px' }}>
      <MovieProfile movieId={movieId} />
      <Showtimes movieId={movieId} />
    </div>
  )
}
