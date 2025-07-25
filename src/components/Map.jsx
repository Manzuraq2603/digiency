import React from 'react'
import map from "../assets/map.svg";

function Map() {
  return (
    <section  className=" bg-white">
        <div className="max-w-[1250px] w-full mx-auto px-10">
            <img src={map} alt="" />
        </div>
    </section>
  )
}

export default Map