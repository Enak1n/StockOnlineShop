import { FC, useEffect, useState } from 'react'
import { IItem } from '../../types/IItem'

interface IItemProps {
	item_data: IItem
	sold: boolean
}

const ItemGrid: FC<IItemProps> = ({ item_data: item, sold: isSold }) => {
	return (
		<div className='w-[196px]'>
			<div className='mt-3 ml-6'>
				<img
					src={item.photoPath}
					className='w-[140px] h-[75px]'
					alt={item.name}
				/>
			</div>
			<div className='flex flex-col text-left relative p-0.5 w-[180px] h-[145px] mt-2'>
				<div className='break-all overflow-hidden h-[40px] w-[172px]'>
					<p className='font-lobster text-[14px]'>{item.name}</p>
				</div>
				<div className='flex flex-col justify-center mt-3'>
					<p className='font-lobster text-xs text-zinc-500'>Lowest Ask</p>
					<div className='flex items-center'>
						<p className='font-bold text-xl font-lobster'>€{item.price}</p>
					</div>
				</div>
				{isSold ? (
					<div className=''>
						<span>
							<span className='font-lobster text-xs'>
								{item.sold} sold
							</span>
						</span>
					</div>
				) : (
					<div className=''>
						<span>
							<span className='font-lobster text-xs'>
								Last Sale: €{item.lastPrice}
							</span>
						</span>
					</div>
				)}
			</div>
		</div>
	)
}

export default ItemGrid
