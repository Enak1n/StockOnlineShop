import { Link } from 'react-router-dom'
import Nav from '../app/components/Nav'
import { QuestionCircleOutlined } from '@ant-design/icons'
import ItemGrid from '../app/components/ItemGrid'
import { useEffect, useState } from 'react'
import ItemService from '../services/ItemService'
import { IItem } from '../types/IItem'
import { TbArrowNarrowRight } from 'react-icons/tb'
import Carousel from '../app/components/carousel/Carousel'
import MainCarousel from '../app/components/carousel/MainCarousel'

const MainPage = () => {
	const [recommendSneakers, setRecommendSneakers] = useState<IItem[]>([])
	const [trendingSneakers, setTrendingSneakers] = useState<IItem[]>([])

	useEffect(() => {
		try {
			const fetchData = async () => {
				const response = await ItemService.getAll()
				setRecommendSneakers([...recommendSneakers, ...response.data])
			}
			const fetchTrending = async () => {
				const response = await ItemService.getTrendingSneakers()
				setTrendingSneakers([...trendingSneakers, ...response.data])
			}
			fetchData()
			fetchTrending()
		} catch (e) {
			console.log(e)
		}
	}, [])
	return (
		<div className='mx-auto pt-4 w-[1264px]'>
			<Nav />

			<div className='pt-3'>
				<MainCarousel/>
			</div>

			<div>
				<h2 className='flex font-lobster w-[225px] text-[18px]'>
					Recommend For You
					<QuestionCircleOutlined className='ml-2 cursor-pointer' />
				</h2>
			</div>
			<div className='flex flex-row space-x-4 pt-4'>
				{recommendSneakers.map(item => (
					<ItemGrid key={item.id.toString()} item_data={item} sold={false} />
				))}
			</div>

			<div className='pt-5'>
				<h2 className='flex font-lobster w-[225px] text-[18px]'>
					Popular Brands
				</h2>
				<div className='flex flex-row space-x-5 pt-4'>
					<img src='images/Jordan.webp' />
					<img src='images/Supreme.webp' />
					<img src='images/Louis_Vuitton.webp' />
					<img src='images/Nike.webp' />
					<img src='images/Sp5der.webp' />
				</div>
			</div>

			<div className='pt-8 flex justify-between items-center mt-6 mb-4'>
				<h2 className='flex font-lobster w-[225px] text-[18px]'>
					Trending Sneakers
					<QuestionCircleOutlined className='ml-2 cursor-pointer' />
				</h2>
				<div className='flex items-center ml-auto'>
					<span className='w-[70px] font-lobster text-green-700'>See All</span>
					<TbArrowNarrowRight />
				</div>
			</div>

			<div className='flex flex-row space-x-4 pt-4'>
				{trendingSneakers.map(item => (
					<ItemGrid key={item.id.toString()} item_data={item} sold={true} />
				))}
			</div>

			<div className='pt-7 flex justify-between items-center mt-6 mb-4'>
				<h2 className='flex font-lobster w-[240px] text-[18px]'>
					Most Popular Around You
					<QuestionCircleOutlined className='ml-2 cursor-pointer' />
				</h2>
				<Link to='/sneakers'>
					<div className='flex items-center ml-auto'>
						<span className='w-[70px] font-lobster text-green-700'>
							See All
						</span>
						<TbArrowNarrowRight />
					</div>
				</Link>
			</div>
			<div className='flex flex-row space-x-4 pt-4'>
				{trendingSneakers.map(item => (
					<ItemGrid key={item.id.toString()} item_data={item} sold={true} />
				))}
			</div>

			<div className='pt-8'>
				<h2 className='flex font-lobster w-[240px] h-[24px] text-[18px]'>
					As Seen On Instaram
				</h2>
				<h3 className='flex font-light h-[20px]'>
					Use #GotItOnStockX and you could be featured.
				</h3>
				<div className='pt-5'>
					<Carousel />
				</div>
			</div>
		</div>
	)
}

export default MainPage
