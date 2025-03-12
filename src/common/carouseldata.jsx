import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Imagesdata } from './commonimages';

export default function Caroseldata() {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);

	return (
		<>
			<Swiper
				style={{
					'--swiper-navigation-color': '#fff',
					'--swiper-pagination-color': '#fff',
				}}
				spaceBetween={10}
				navigation={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				thumbs={{ swiper: thumbsSwiper }}
				modules={[FreeMode, Navigation, Thumbs, Autoplay]}
				className="mySwiper2"
			>
				<SwiperSlide>
					<img alt="media_8" className="mb-2  w-100 rounded-5" src={Imagesdata("photos1")} /></SwiperSlide>
				<SwiperSlide>
					<img alt="media_9" className="mb-2  w-100 rounded-5" src={Imagesdata("photos2")} />
				</SwiperSlide>
				<SwiperSlide>
					<img alt="media_10" className="mb-2  w-100 rounded-5" src={Imagesdata("photos3")} />
				</SwiperSlide>
				<SwiperSlide>
					<img alt="media_8" className="mb-2  w-100 rounded-5" src={Imagesdata("photos4")} /></SwiperSlide>
				<SwiperSlide>
					<img alt="media_9" className="mb-2  w-100 rounded-5" src={Imagesdata("photos5")} />
				</SwiperSlide>
				<SwiperSlide>
					<img alt="media_10" className="mb-2  w-100 rounded-5" src={Imagesdata("photos6")} />
				</SwiperSlide>
				<SwiperSlide>
					<img alt="media_8" className="mb-2  w-100 rounded-5" src={Imagesdata("photos7")} /></SwiperSlide>
				<SwiperSlide>
					<img alt="media_9" className="mb-2  w-100 rounded-5" src={Imagesdata("photos8")} />
				</SwiperSlide>
			</Swiper>
			<Swiper
				onSwiper={setThumbsSwiper}
				spaceBetween={10}
				slidesPerView={4}
				freeMode={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				watchSlidesProgress={true}
				modules={[FreeMode, Navigation, Thumbs, Autoplay]}
				className="mySwiper"
			>
				<SwiperSlide>
					<img alt="media_8" className="mb-2  w-100 rounded-5" src={Imagesdata("photos1")} /></SwiperSlide>
				<SwiperSlide>
					<img alt="media_9" className="mb-2  w-100 rounded-5" src={Imagesdata("photos2")} />
				</SwiperSlide>
				<SwiperSlide>
					<img alt="media_10" className="mb-2  w-100 rounded-5" src={Imagesdata("photos3")} />
				</SwiperSlide>
				<SwiperSlide>
					<img alt="media_8" className="mb-2  w-100 rounded-5" src={Imagesdata("photos4")} /></SwiperSlide>
				<SwiperSlide>
					<img alt="media_9" className="mb-2  w-100 rounded-5" src={Imagesdata("photos5")} />
				</SwiperSlide>
				<SwiperSlide>
					<img alt="media_10" className="mb-2  w-100 rounded-5" src={Imagesdata("photos6")} />
				</SwiperSlide>
				<SwiperSlide>
					<img alt="media_8" className="mb-2  w-100 rounded-5" src={Imagesdata("photos7")} /></SwiperSlide>
				<SwiperSlide>
					<img alt="media_9" className="mb-2  w-100 rounded-5" src={Imagesdata("photos8")} />
				</SwiperSlide>
			</Swiper>
		</>
	);
}
