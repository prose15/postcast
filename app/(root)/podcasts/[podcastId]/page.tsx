import React from 'react'

const PodCastId = ({params}: {params : {podcastId : String}}) => {
  return (
    <div className='text-orange-1'>the dynamic podcast id is {params.podcastId}</div>
  )
}

export default PodCastId