import React from 'react'
import loadingGif from "../images/gif/Loading.gif"
const Loading = () => {
  return (
    <div className="loading">
      <h4>Rooms Data Loading.......</h4>
      <img src={loadingGif} alt="Loading Images...."/>
    </div>
  )
}

export default Loading
