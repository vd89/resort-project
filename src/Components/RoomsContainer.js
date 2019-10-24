import React from 'react';
import { withRoomConsumer } from '../Context';
import Loading from './Loading';
import RoomsList from './RoomsList';
import RoomsFilter from './RoomsFilter';

const RoomContainer= ({ context })=>
{
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <RoomsFilter rooms={rooms}/>
      <RoomsList rooms={sortedRooms} />
    </>
  );
}

export default withRoomConsumer(RoomContainer);

// import React from 'react';
// import RoomsFilter from './RoomsFilter';
// import RoomsList from './RoomsList';
// import { RoomConsumer } from '../Context';
// import Loading from "./Loading"

// const RoomContainer = () => {
// 	return (
// 		<RoomConsumer>
// 			{(value) => {
// 				console.log(value);
// 				const { loading, sortedRooms, rooms } = value;
// 				if (loading) {
// 					return <Loading />;
// 				}
// 				return (
// 					<div>
// 						This is the rooms RoomsContainer
// 						<RoomsFilter rooms={rooms} />
// 						<RoomsList rooms={sortedRooms} />
// 					</div>
// 				);
// 			}}
// 		</RoomConsumer>
// 	);
// };

// export default RoomContainer;
