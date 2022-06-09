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
		<div className="grid grid-cols-4 gap-y-8 gap-x-10 m-10 ">
			{users.map((user) => (
				<Card key={user.id} user={user} />
			))}
		</div>
	);
}

export default UserList;
