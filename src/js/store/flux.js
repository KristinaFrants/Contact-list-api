const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			contacts: []
			//Your data structures, A.K.A Entities
		},
		actions: {
			loadSomeData: () => {
				console.log("im working");

				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/kevs_agenda")
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(data => setStore({ contacts: data }))
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			}
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
		}
	};
};

export default getState;
