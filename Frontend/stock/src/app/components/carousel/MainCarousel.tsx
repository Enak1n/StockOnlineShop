import { useRef, useState } from 'react'
import Slider from 'react-slick'
import {
	IoIosArrowDroprightCircle,
	IoIosArrowDropleftCircle,
} from 'react-icons/io'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MainCarousel = () =>{
    const [canGoNext, setCanGoNext] = useState<boolean>(true)
	const [canGoPrev, setCanGoPrev] = useState<boolean>(false)

    let sliderRef = useRef<Slider>(null)

    const settings = {
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		centerMode: false,
		variableWidth: false,
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

    return(
        <>
			<Slider ref={sliderRef} {...settings}  >
				<div >
					<img src='/images/Mens_Nike-Merch-ENPrimary_Desktop_copy_18.webp'/>
				</div>
                <div >
					<img src='/images/Microsite-Week6-ENPrimary_Desktop_copy_22.webp'/>
				</div>
                <div >
					<img src='/images/Gifts_Under_200-Editorial-Phase2-ENPrimary_Desktop_copy_22.webp'/>
				</div>   
                <div >
					<img src='/images/Holiday_Accessories-Editorial-Phase2-ENPrimary_Desktop_copy_22.webp'/>
				</div>                 
			</Slider>
        </>
    )
}

export default MainCarousel