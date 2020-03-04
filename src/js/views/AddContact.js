import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const AddContact = props => {
	const { store, actions } = useContext(Context);
	const [newfullname, SetNewFullname] = useState("");
	const [newemail, SetNewEmail] = useState("");
	const [newphone, SetNewPhone] = useState("");
	const [newaddress, SetNewAddress] = useState("");
	const [objContact, setObjContact] = useState();

	useEffect(
		() => {
			setObjContact({
				agenda_slug: "kevs_agenda",
				full_name: newfullname,
				email: newemail,
				phone: newphone,
				address: newaddress
			});
		},
		[newfullname, newemail, newphone, newaddress]
	);

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							value={newfullname}
							className="form-control"
							placeholder="Enter Name"
							onChange={event => SetNewFullname(event.target.value)}
						/>
					</div>

					<div className="form-group">
						<label>Email</label>
						<input
							type="text"
							value={newemail}
							className="form-control"
							placeholder="Enter Email"
							onChange={event => SetNewEmail(event.target.value)}
						/>
					</div>

					<div className="form-group">
						<label>Phone</label>
						<input
							type="text"
							value={newphone}
							className="form-control"
							placeholder="Enter Phone #"
							onChange={event => SetNewPhone(event.target.value)}
						/>
					</div>

					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							value={newaddress}
							className="form-control"
							placeholder="Enter Address"
							onChange={event => SetNewAddress(event.target.value)}
						/>
					</div>

					<button
						type="button"
						className="btn btn-primary form-control"
						onClick={() => actions.addContact(objContact, props)}>
						save
					</button>

					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
export default AddContact;
