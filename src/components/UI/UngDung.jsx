import React from 'react'

const UngDung = () => {
  return (
    <div  className="absolute z-50  bg-white -bottom-0 left-0  translate-y-full   group-hover:opacity-100 flex flex-col items-center   opacity-0 w-0 group-hover:w-44 h-0 group-hover:h-auto">
        <img src="./images/qrcode.png" alt="app install link" className="w-full"/>
        <div className="grid grid-cols-2 gap-2 p-3 w-full pt-2">
            <a href="#"><img src="./images/appstore.png" alt="App Store" /></a>
            <a href="#"><img src="./images/playstore.png" alt="Google Play" /></a>
            <a href="#"><img src="./images/appgallery.png" alt="App Gallery" /></a>
        </div>
    </div>
  )
}

export default UngDung