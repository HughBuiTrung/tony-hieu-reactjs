import React from 'react'
import { useParams } from 'react-router-dom'

function AboutDetail() {
  const params = useParams();

  console.log('params: ', params)

  return (
    <div>
      AboutDetail</div>
  )
}

export default AboutDetail