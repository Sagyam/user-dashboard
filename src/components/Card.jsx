import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import { FiMapPin } from "react-icons/fi";
import { MdEmail } from "react-icons/md";

function Card({ user }) {
	return (
		<div
			className=" bg-slate-900 rounded-xl flex flex-col justify-center items-center p-5 hover:drop-shadow-xl hover:border-blue-600 hover:border-2 hover:-translate-y-4 transition-transform"
			id="card"
		>
			<img
				className=" rounded-full ring-4 ring-offset-0 ring-blue-600 h-36 w-36 "
				src={`https://api.lorem.space/image/face?w=150&h=150&hash=${user.id}`}
				alt={user.name}
			/>
			<div className="flex flex-col text-center text-gray-200 mt-8">
				<h1 className="text-2xl font-bold mt-2">{user.name}</h1>
				<p className="text-sm font-medium text-slate-400 lowercase">
					@{user.username}
				</p>
				<p className="text-lg capitalize mt-2">{user.address.city}</p>
				<p className="text-md mt-2">{user.company.catchPhrase}</p>
			</div>
			<div className="mt-8 grid grid-flow-col gap-4">
				<a href={`tel:${user.phone}`}>
					<BsFillTelephoneFill className="text-blue-600 text-3xl hover:scale-125 transition-transform" />
				</a>
				<a href={`mailto:${user.email}`}>
					<MdEmail className="text-blue-600 text-3xl hover:scale-125 transition-transform" />
				</a>
				<a href={`https://${user.website}`}>
					<TbWorld className="text-blue-600 text-3xl hover:scale-125 transition-transform" />
				</a>
				<a
					href={`https://www.google.com/maps/@${user.address.geo.lat},${user.address.geo.lng},15z`}
				>
					<FiMapPin className="text-blue-600 text-3xl hover:scale-125 transition-transform" />
				</a>
			</div>
		</div>
	);
}

export default Card;
