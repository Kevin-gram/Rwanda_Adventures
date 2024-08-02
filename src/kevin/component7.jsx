// import Swiper core and required modules
import React from 'react';
import {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Autoplay,
} from 'swiper/modules';
import './comp7.css'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {

    const breakpoints = {

        1280:{
            slidesPerView: 3.5,
            spaceBetween: 30,
        },
        1024:{
            slidesPerView: 2.5,
            spaceBetween: 30,
        },
        
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
            slideHeight:50,
        },
        720: {
            slidesPerView: 2,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        540:{
            slidesPerView: 2,
            spaceBetween: 10, 
        },
        400:{
            slidesPerView: 1,
            spaceBetween: 2, 
        },
        320: {
            slidesPerView: 1,
        },
        280:{
            slidesPerView: 1,  
        },
        250:{
            slidesPerView: 1,  
        }
    };
    const images = [
        {
            img: '../public/portrait-4568762_1280.jpg',
            Name: 'Ngabo John',
            title: 'Founder and CEO',
            description:
                'lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum',
        },
        {
            img: '../public/images (4).jpeg',
            Name: 'Gisubizo Petience',
            title: 'Cheif executive officer',
            description:
                'lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum',
        },
        {
            img: '../public/portrait-4568762_1280.jpg',
            Name: 'Habimana Fancis',
            title: 'lorem Ipsum',
            description:
                'lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum',
        },
        {
            img: '../public/man-2442565_1280.jpg',
            Name: 'Muhoza Patrick',
            title: ' CEO',
            description:
                'lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum',
        },
        {
            img: '../public/smile-2072907_1280.jpg',
            Name: 'Mugeni Jeanne',
            title: 'Deputy CEO',
            description:
                'lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum',
        },
        {
            img: '../public/woman-657753_1280.jpg',
            Name: 'Mbabazi Faith',
            title: 'IT Manager',
            description:
                'lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum',
        },
        {
            img: '../public/henry.png',
            Name: 'Manzi Henry',
            title: 'Head of Marketing',
            description:
                'lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum',
        },
        {
            img: '../public/man-2442565_1280.jpg',
            Name: 'Kagabo Fabrice',
            title: 'Head of Operations',
            description:
                'lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum',
        },
        {
            img: '../public/woman-657753_1280.jpg',
            Name: 'Mukamana Alice',
            title: 'Head of Finance',
            description:
                'lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum',
        },
    ];
    return (
        <div className="h-full mt-4  latest" id="Team">
            <div className='flex flex-col lg:flex-row'>
                <div className="lg:w-1/2 ml-10">
                    <div>
                        <p className="border-b w-1/2 border-gray-500 sm:w-full pt-4 pb-4"></p>
                    </div>
                    <h1 className="text-3xl font-bold pt-4">OUR TEAM</h1>
                </div>
                <div className="lg:w-1/2 px-10">
                    <p className="pt-10 text-sm">At Explorer Rwanda, our team is the heart and soul of everything we do. Comprised of passionate individuals with diverse backgrounds and expertise, we come together to achieve one common goal: delivering exceptional results for our clients..</p>
                </div>
            </div>

            <hr className="w-72" />


            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={40}
                slidesPerView={3.2}
                breakpoints={breakpoints}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                autoplay={{ delay: 3000 }}
            >
                {images.map((image) => {
                    return (
                        <SwiperSlide className="mt-5">
                            <img src={image.img} alt="" className="rounded-t-xl"  style={{width: '100vh', height: '50vh',objectFit:'contain'}}/>
                            <h3 className="ml-1">{image.Name}</h3>
                            <h4 className="ml-1">{image.title}</h4>
                            <p className="font-sans text-sm ml-1">{image.description}</p>
                        </SwiperSlide>
                    );
                })}
        
            </Swiper>
  </div>
    );
            }