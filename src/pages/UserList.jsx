import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";

function UserList() {
	const [users, setUsers] = useState([]);
	useEffect(() => {
		axios
			.get("https://jsonplaceholder.typicode.com/users")
			.then((response) => setUsers(response.data));
	}, []);

	return (
		<div className="grid 2xl:grid-cols-6 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-y-8 gap-x-10 m-10 ">
			{users.map((user) => (
				<Card key={user.id} user={user} />
			))}
		</div>
	);
}

export default UserList;
