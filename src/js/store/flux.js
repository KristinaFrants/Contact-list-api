const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			contacts: [
				{
					fullname: "",
					phone: "",
					email: "",
					address: ""
				}
			]
			//Your data structures, A.K.A Entities
		},
		actions: {
			loadContact() {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/kevs_agenda")
					.then(response => response.json())
					.then(result => {
						console.log("Get Contact", result),
							setStore({
								contacts: result
							});
					})
					.catch(e => console.error(e));
			},
			addContact: (myObj, props) => {
				// console.log(myObj);
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						full_name: myObj.full_name,
						phone: myObj.phone,
						address: myObj.address,
						email: myObj.email,
						agenda_slug: myObj.agenda_slug
					})
				}).then(() => {
					fetch("https://assets.breatheco.de/apis/fake/contact/agenda/kevs_agenda")
						.then(response => response.json())
						.then(result => {
							console.log("result", result),
								setStore({
									contacts: result
								});
							props.history.push("/");
						})
						.catch(e => console.error(e));
				});
			},
			editContact(id, name, phone, email, address, props) {
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "PUT",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						full_name: name,
						phone: phone,
						address: address,
						email: email,
						agenda_slug: "kevs_agenda"
					})
				}).then(() => {
					fetch("https://assets.breatheco.de/apis/fake/contact/agenda/kevs_agenda")
						.then(response => response.json())
						.then(result => {
							console.log("update", result),
								setStore({
									contacts: result
								});
							props.history.push("/");
						})
						.catch(e => console.error(e));
				});
			},
			deleteContact(id) {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/kevs_agenda" + id, {
					method: "delete"
				}).then(() => {
					fetch("https://assets.breatheco.de/apis/fake/contact/agenda/kevs_agenda")
						.then(response => response.json())
						.then(result => {
							console.log("result", result),
								setStore({
									contacts: result
								});
						})
						.catch(e => console.error(e));
				});
			}
		}
	};
};

export default getState;
