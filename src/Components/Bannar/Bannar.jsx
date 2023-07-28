import Image from 'next/image'
import React from 'react'

const Bannar = () => {
  return (
    <div className=" container mx-auto">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <Image
            alt=""
            width={500}
            height={500}
            layout="responsive"
            src="https://www.startech.com.bd/image/cache/catalog/home/banner/express-delivery-home-banner-june-982x500.webp"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <Image
            alt=""
            width={500}
            height={500}
            layout="responsive"
            src="https://www.startech.com.bd/image/cache/catalog/home/banner/free-delivery-on-app-may-home-banner-982x500.webp  "
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <Image
            alt=""
            width={500}
            height={500}
            layout="responsive"
            src="https://www.startech.com.bd/image/cache/catalog/home/banner/express-delivery-home-banner-june-982x500.webp"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <Image
            alt=""
            width={500}
            height={500}
            layout="responsive"
            src="https://www.startech.com.bd/image/cache/catalog/home/banner/desktop-deal/desktop-deal-live-now-home-banner-982x500.webp"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bannar
