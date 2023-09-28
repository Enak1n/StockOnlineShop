import { Link } from 'react-router-dom'

const Nav = () => {
	return (
		<div>
			<nav>
				<ul className='flex justify-center font-lobster'>
					<Link to='/sneakers'>
						<li className='flex items-center pr-10'>
							<a>Sneakers</a>
						</li>
					</Link>
					<Link to='/shoes'>
						<li className='flex items-center pr-10'>
							<a>Shoes</a>
						</li>
					</Link>
					<Link to='/apparel'>
						<li className='flex items-center pr-10'>
							<a>Apparel</a>
						</li>
					</Link>
					<Link to='/electronics'>
						<li className='flex items-center pr-10'>
							<a>Electronics</a>
						</li>
					</Link>
					<Link to='/tradingCards'>
						<li className='flex items-center pr-10'>
							<a>Trading Cards</a>
						</li>
					</Link>
					<Link to='/collectibles'>
						<li className='flex items-center pr-10'>
							<a>Collectibles</a>
						</li>
					</Link>
					<Link to='/accessories'>
						<li className='flex items-center pr-10'>
							<a>Accessories</a>
						</li>
					</Link>
					<Link to='/trendingDeals'>
						<li className='flex items-center pr-6'>
							<a>Trending Deals</a>
						</li>
					</Link>
				</ul>
			</nav>
		</div>
	)
}

export default Nav