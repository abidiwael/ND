import React from "react";
import List from "../List/List";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPersonneData } from "../../Redux/personneActions/personneActions";

const PersonneList = ({ searchTitle }) => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getPersonneData());
	}, []);

	const [proShow, setproShow] = useState(false);
	const [editShow, seteditShow] = useState(false);
	const personnes = useSelector((state) => state.personneReducer.personnes);

	return (
		<div className='bodyList'>
			<div className='page-content container'>
				<div className='container px-0'>
					<div className='row mt-4'>
						<div className='col-12 col-lg-10 offset-lg-1'>
							<div className='mt-4'>
								<div className='row text-600 text-white bgc-default-tp1 py-25'>
									<div className='d-none d-sm-block col-2'>Full name</div>
									<div className='col-9 col-sm-3'>Email</div>
									<div className='d-none d-sm-block col-sm-2'>mobile</div>
									<div className='d-none d-sm-block col-sm-2'>Country</div>
									<div className='col-9 col-sm-3'></div>
								</div>
								<div>
									{/* *********************************************** */}
									{personnes
										.filter((personne) =>
											personne.nom
												.toLowerCase()
												.includes(searchTitle.toLowerCase())
										)
										.map((personne) => (
											<List personne={personne} key={personne._id} />
										))}
									{/* *********************************************** */}
								</div>

								<div className='row border-b-2 brc-default-l2' />
								<hr />
								<div>
									<span className='text-secondary-d1 text-105 '>
										All data is confidential &nbsp;
									</span>
									<i class='fa fa-exclamation-triangle text-muted'></i>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PersonneList;
