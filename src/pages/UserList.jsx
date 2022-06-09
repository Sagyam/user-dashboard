import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";

function UserList() {
	const [users, setUsers] = useState([]);
	const [originalUsers, setOriginalUsers] = useState([]);
	const [serachQuery, setSerachQuery] = useState("");
	useEffect(() => {
		axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
			setUsers(response.data);
			setOriginalUsers(response.data);
		});
	}, []);

	const handleSerachQuery = (e) => {
		setSerachQuery(e.target.value.trim());
		setTimeout(() => {
			if (serachQuery.length > 0) {
				const filteredUsers = originalUsers.filter(
					(user) =>
						// Filter by name and username and city and email and telephone
						user.name.toLowerCase().includes(serachQuery.toLowerCase()) ||
						user.username.toLowerCase().includes(serachQuery.toLowerCase()) ||
						user.address.city
							.toLowerCase()
							.includes(serachQuery.toLowerCase()) ||
						user.email.toLowerCase().includes(serachQuery.toLowerCase()) ||
						user.phone.toLowerCase().includes(serachQuery.toLowerCase())
				);
				setUsers(filteredUsers);
			} else {
				setUsers(originalUsers);
			}
		}, 500);
	};

	return (
		<>
			{/* SearchBox */}
			<div className="flex flex-col items-center justify-center">
				<input
					className=" appearance-none rounded-lg leading-tight border-2 focus:outline-none  bg-slate-900 text-white focus:border-blue-600 py-2 px-4 mt-5 xl:w-1/3 w-1/2"
					type="text"
					placeholder="Filter by Name Username City Email Telephone"
					value={serachQuery}
					onChange={(e) => handleSerachQuery(e)}
				/>
			</div>
			<div className="grid 2xl:grid-cols-6 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-y-8 gap-x-10 m-10 ">
				{users.map((user) => (
					<Card key={user.id} user={user} />
				))}
			</div>
		</>
	);
}

export default UserList;
