import { useRef, useState } from 'react'
import Slider from 'react-slick'
import { RightCircleOutlined, LeftCircleOutlined } from '@ant-design/icons'
import {
	IoIosArrowDroprightCircle,
	IoIosArrowDropleftCircle,
} from 'react-icons/io'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Carousel = () => {
	const [canGoNext, setCanGoNext] = useState<boolean>(true)
	const [canGoPrev, setCanGoPrev] = useState<boolean>(false)
	let sliderRef = useRef<Slider>(null)
	const settings = {
		infinite: false,
		slidesToShow: 4,
		slidesToScroll: 4,
		autoplay: false,
		centerMode: false,
		variableWidth: true,
		afterChange: (index: number) => {
			setCanGoPrev(index !== 0)
			setCanGoNext(index !== 4)
		},
		beforeChange: (oldIndex: number, newIndex: number) => {
			// Set visibility before the slide changes
			setCanGoPrev(newIndex !== 0)
			setCanGoNext(newIndex !== 4)
		},
	}

	const next = () => {
		sliderRef?.current?.slickNext()
	}
	const previous = () => {
		sliderRef?.current?.slickPrev()
	}

	return (
		<>
			<div className='relative slick-initialized'>
				{canGoPrev && (
					<button
						className='w-[40px] h-[40px] flex justify-start items-center absolute z-[10] top-[148px] left-0 transform translate-x-[-50%]'
						onClick={previous}
					>
						<IoIosArrowDropleftCircle size={48} />
					</button>
				)}
				{canGoNext && (
					<button
						className='w-[40px] h-[40px] flex justify-start items-center absolute z-[10] top-[148px] right-0 transform translate-x-[50%]'
						onClick={next}
					>
						<IoIosArrowDroprightCircle size={48} />
					</button>
				)}
			</div>
			<Slider ref={sliderRef} {...settings}>
				<div className='h-[296px] w-[296px]'>
					<img src='/images/Carousel1.webp' className='h-[296px] w-[296px]' />
				</div>
				<div className='h-[296px] w-[296px]'>
					<img src='/images/Carousel2.webp' className='h-[296px] w-[296px]' />
				</div>
				<div className='h-[296px] w-[296px] pr-4'>
					<img src='/images/Carousel3.webp' className='h-[296px] w-[296px]' />
				</div>
				<div className='h-[296px] w-[296px] pr-4'>
					<img src='/images/Carousel4.webp' className='h-[296px] w-[296px]' />
				</div>
				<div className='h-[296px] w-[296px] pr-4'>
					<img src='/images/Carousel5.webp' className='h-[296px] w-[296px]' />
				</div>
				<div className='h-[296px] w-[296px] pr-4'>
					<img src='/images/Carousel6.webp' className='h-[296px] w-[296px]' />
				</div>
				<div className='h-[296px] w-[296px] pr-4'>
					<img src='/images/Carousel7.webp' className='h-[296px] w-[296px]' />
				</div>
				<div className='h-[296px] w-[296px] pr-4'>
					<img src='/images/Carousel8.webp' className='h-[296px] w-[296px]' />
				</div>
			</Slider>
		</>
	)
}

export default Carousel