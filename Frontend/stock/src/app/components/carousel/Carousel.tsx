import { useRef } from 'react'
import Slider from 'react-slick'
import { RightCircleOutlined, LeftCircleOutlined } from '@ant-design/icons'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Carousel = () => {
	let sliderRef = useRef<Slider>(null)
	const settings = {
		infinite: false,
		slidesToShow: 4,
		slidesToScroll: 4,
		autoplay: false,
	}

	const next = () => {
		sliderRef.current?.slickNext() // Access the slickNext method using current property
	}
	const previous = () => {
		sliderRef.current?.slickPrev() // Access the slickPrev method using current property
	}

	return (
		<>
			<div className='relative slick-initialized'>
				<button
					className='w-[40px] h-[40px] flex justify-start items-center absolute z-[10]  top-[148px] '
					onClick={previous}
				>
					<LeftCircleOutlined />
				</button>
				<button
					className='w-[40px] h-[40px] flex justify-center items-center absolute z-[10] right-[1px] top-[148px]'
					onClick={next}
				>
					<RightCircleOutlined className='' />
				</button>
			</div>
			<Slider ref={sliderRef} {...settings}>
				<div className='h-[296px] w-[296px]'>
					<img src='/images/Carousel1.webp' className='h-[296px] w-[296px]' />
				</div>
				<div className='h-[296px] w-[296px]'>
					<img src='/images/Carousel2.webp' className='h-[296px] w-[296px]' />
				</div>
				<div className='h-[296px] w-[296px]'>
					<img src='/images/Carousel3.webp' className='h-[296px] w-[296px]' />
				</div>
				<div className='h-[296px] w-[296px]'>
					<img src='/images/Carousel4.webp' className='h-[296px] w-[296px]' />
				</div>
				<div className='h-[296px] w-[296px]'>
					<img src='/images/Carousel5.webp' className='h-[296px] w-[296px]' />
				</div>
				<div className='h-[296px] w-[296px]'>
					<img src='/images/Carousel6.webp' className='h-[296px] w-[296px]' />
				</div>
				<div className='h-[296px] w-[296px]'>
					<img src='/images/Carousel7.webp' className='h-[296px] w-[296px]' />
				</div>
				<div className='h-[296px] w-[296px]'>
					<img src='/images/Carousel8.webp' className='h-[296px] w-[296px]' />
				</div>
			</Slider>
		</>
	)
}

export default Carousel
