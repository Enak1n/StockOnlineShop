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
	const [items, setItems] = useState<IItem[]>([])

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
			const fetchByFilter = async () => {
				const response = await ItemService.getByFilter(1)
				setItems([...items, ...response.data])
			}
			fetchData()
			fetchTrending()
			fetchByFilter()
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

			<div className='pt-4'>
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

			<div className='flex justify-between items-center mt-6 mb-4'>
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

			<div className='flex justify-between items-center mt-6 mb-4'>
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

			<div className='pt-4'>
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

			<div className='flex justify-between items-center mt-6 mb-4'>
				<h2 className='flex font-lobster w-[240px] text-[18px]'>
					Hot Electronics
					<QuestionCircleOutlined className='ml-2 cursor-pointer' />
				</h2>
				<Link to=''>
					<div className='flex items-center ml-auto'>
						<span className='w-[70px] font-lobster text-green-700'>
							See All
						</span>
						<TbArrowNarrowRight />
					</div>
				</Link>
			</div>

			<div className='flex flex-row space-x-4 pt-4'>
				{items.map(item => (
					<ItemGrid key={item.id.toString()} item_data={item} sold={true} />
				))}
			</div>

			<div className='pt-4'>
				<MainCarousel/>
			</div>

			
			<div className='flex justify-between items-center mt-6 mb-4'>
				<h2 className='flex font-lobster w-[240px] text-[18px]'>
					Featured Collectibles
					<QuestionCircleOutlined className='ml-2 cursor-pointer' />
				</h2>
				<Link to=''>
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

			<div className='pt-5'>
				<h2 className='flex font-lobster w-[225px] text-[18px]'>
				Popular Footwear Brands
				</h2>
				<div className='flex flex-row space-x-5 pt-4'>
					<img src='images/newbalancemay.webp' />
					<img src='images/nikemay.webp' />
					<img src='images/crocsmay.webp' />
					<img src='images/adidasmay.webp' />
					<img src='images/jordanmay2.webp' />
				</div>
			</div>

			<div className='flex justify-between flex-row-reverse pt-8'>
				<div className='relative w-8/12'>
					<img src ='images/UGG-Tazz-Slippers_SecondaryA_EN.webp' className='w-full h-full'/>
				</div>
				<div className='relative w-4/12'>
					<img src='images/Gifts_For_Luxe-Editorial-Phase3-ENSecondaryB_copy.webp'/>
				</div>
			</div>

			<div className='flex justify-between items-center mt-6 mb-4'>
				<h2 className='flex font-lobster w-[240px] text-[18px]'>
					Top Trading Cards
					<QuestionCircleOutlined className='ml-2 cursor-pointer' />
				</h2>
				<Link to=''>
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

			<div className='flex justify-between items-center mt-6 mb-4'>
				<h1 className='flex w-[240px] text-[25px]'>
					From The Magazine
				</h1>
				<Link to=''>
					<div className='flex items-center ml-auto'>
						<span className='w-full text-green-700'>
							View All News Articles
						</span>
					</div>
				</Link>			
			</div>
		</div>	 
	)
}

export default MainPage
