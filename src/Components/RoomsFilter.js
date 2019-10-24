import React from 'react';
import { useContext } from 'react';
import { RoomContext } from '../Context';
import Title from './Title';

// get all the unique values from room
const getUnique = (items, value) => {
	return [...new Set(items.map((item) => item[value]))];
};

const RoomsFilter = ({ rooms }) => {
	const context = useContext(RoomContext);
	// console.log(context);
	const {
		handleChange,
		type,
		capacity,
		price,
		minPrice,
		maxPrice,
		minSize,
		maxSize,
		breakfast,
		pets,
	} = context;

	let types = getUnique(rooms, 'type');
	types = ['all', ...types];
	types = types.map((item, index) => {
		return (
			<option value={item} key={index}>
				{item}
			</option>
		);
	});
	return (
		<>
			<section className="filter-container">
				<Title title="Search Rooms" />
				<form action="" className="filter-form">
					{/* select type */}
					<div className="form-group">
						<label htmlFor="type">room Type</label>
						<select
							name="type"
							id="type"
							value={type}
							className="form-control"
							onChange={handleChange}>
							{types}
						</select>
					</div>
					{/* end select type */}
				</form>
			</section>
		</>
	);
};

export default RoomsFilter;
