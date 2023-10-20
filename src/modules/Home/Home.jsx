import React from 'react'
import Banner from './Banner'
import Showing from './Showing'
import Cinema from './Cinema'
import { useParams } from 'react-router-dom'
import News from './News/News'
import Application from './Application/Application'
import Footer from './Footer/Footer'

export default function Home() {
  const { movieId } = useParams()
  return (
    <div>
      <Banner movieId={movieId} />
      <Showing />
      <Cinema />
      <News />
      <Application />
      <Footer />
    </div>
  )
}
