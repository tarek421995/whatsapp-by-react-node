import React, { useEffect, useState } from "react";
import "./App.css";
import SideBar from "./Sidebar";
import Chat from "./Chat";
import Pusher from "pusher-js";
import axios from "./axios";

const App = () => {
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		axios.get("/messages/sync").then((response) => {
			setMessages(response.data);
		});
	}, []);

	useEffect(() => {
    var pusher = new Pusher('f99803e6c3cb026e4c3b', {
      cluster: 'eu'
    });


		const channel = pusher.subscribe("message");
		channel.bind("inserted", (newMessage) => {
			setMessages([...messages, newMessage]);
		});

		// Clean up function
		return () => {
			channel.unbind_all();
			channel.unsubscribe("message");
		};
	}, [messages]);

	return (
		<div className="app">
			<div className="app__body">
				<SideBar />
				<Chat messages={messages} />
			</div>
		</div>
	);
};

export default App;