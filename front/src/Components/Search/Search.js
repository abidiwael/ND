import React from "react";
import "./Search.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Form, FloatingLabel, Button } from "react-bootstrap";
import { addPeronne } from "../../Redux/personneActions/personneActions";

const Search = ({ getSearchTitle }) => {
	const dispatch = useDispatch();
	const [addShow, setaddShow] = useState(false);

	const [personne, setPersonne] = useState({
		civilite: " ",
		nom: " ",
		prenom: " ",
		date_naissance: " ",
		situation_familiale: " ",
		nb_enfants: " ",
		email: " ",
		telephone_1: " ",
		telephone_2: " ",
		mobile: " ",
		adress: " ",
		pays: " ",
		ville: " ",
		rue: " ",
		n_rue: " ",
		code_postale: " ",
		complement_adresse: " ",
		mots_cle: " ",
		commmentaire: " ",
	});

	const handleChange = (e) => {
		setPersonne({
			...personne,
			[e.target.name]: e.target.value,
		});
	};
	return (
		<div className='bodySearch'>
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-8'>
						<form className='card card-sm'>
							<div className='card-body row no-gutters align-items-center'>
								<div className='col'>
									<input
										className='form-control form-control-lg form-control-borderless'
										type='search'
										placeholder='Search Person Data'
										onChange={(e) => getSearchTitle(e.target.value)}
									/>
								</div>
								<div className='col-auto'>
									<button className='classbtn fa fa-search' type='submit' />
								</div>
							</div>
						</form>
					</div>
					<div className='col-2 justify-content-center '>
						<form className='card card-sm'>
							<div className='card-body row no-gutters align-items-center'>
								<div className='col-auto'>
									<Button
										className='classbtnadd'
										onClick={() => setaddShow(true)}
									>
										Add
									</Button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>

			{/* ------------------------------------------------Start add modal ------------------------------------------- */}
			<Modal
				size='lg'
				show={addShow}
				onHide={() => setaddShow(false)}
				aria-labelledby='example-modal-sizes-title-lg'
			>
				<Modal.Header closeButton>
					<Modal.Title id='example-modal-sizes-title-lg'>
						Add New Data
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className='container'>
						<div className='row gutters'>
							<div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
								<div className='card h-100'>
									<div className='card-body'>
										<div className='row gutters'>
											<div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
												<h6 className='mb-2 text-primary'>-Identité-</h6>
											</div>
											<div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
												<div className='form-group'>
													<label htmlFor='civilite'> Civilité</label>
													<Form.Select
														className='form-control'
														name='civilite'
														value={personne.civilite}
														onChange={handleChange}
													>
														<option>Choisir ....</option>
														<option value='Mr.'>Mr.</option>
														<option value='Mme.'>Mme.</option>
														<option value='Autres'>Autres</option>
													</Form.Select>
												</div>
											</div>
											<div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
												<div className='form-group'>
													<label htmlFor='nom'>Nom</label>
													<input
														type='text'
														placeholder='Entrer le nom'
														className='form-control'
														id='nom'
														name='nom'
														value={personne.nom}
														onChange={handleChange}
													/>
												</div>
											</div>

											<div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
												<div className='form-group'>
													<label htmlFor='prenom'>Pernom</label>
													<input
														type='email'
														className='form-control'
														id='prenom'
														placeholder='Entrer le prénom'
														name='prenom'
														value={personne.prenom}
														onChange={handleChange}
													/>
												</div>
											</div>
											<div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
												<div className='form-group'>
													<label htmlFor='dateNaissance'>
														Date de naissance
													</label>
													<input
														type='date'
														className='form-control'
														id='phone'
														placeholder='Entrer la date de naissance'
														name='date_naissance'
														value={personne.date_naissance}
														onChange={handleChange}
													/>
												</div>
											</div>
											<div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
												<div className='form-group'>
													<label htmlFor='SituationFamiliale'>
														Situation familiale
													</label>
													<Form.Select
														className='form-control'
														name='situation_familiale'
														value={personne.situation_familiale}
														onChange={handleChange}
													>
														<option>Choisir ....</option>
														<option value='marié(e)'>marié(e)</option>
														<option value='célibataire'>célibataire</option>
														<option value='divorcé(e)'>divorcé(e)</option>
														<option value='veuf(ve)'>veuf(ve)</option>
													</Form.Select>
												</div>
											</div>
											<div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
												<div className='form-group'>
													<label htmlFor='nbEnfants'>Nombre d'enfants</label>
													<input
														type='number'
														className='form-control'
														id='nb_enfants'
														placeholder="entrer le nombre d'enfants"
														name='nb_enfants'
														value={personne.nb_enfants}
														onChange={handleChange}
													/>
												</div>
											</div>
										</div>
										<br />
										<div className='row gutters'>
											<div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
												<h6 className='mb-2 text-primary'>-Contacts-</h6>
											</div>
											<div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
												<div className='form-group'>
													<label htmlFor='email'>Email</label>
													<input
														type='email'
														className='form-control'
														id='email'
														placeholder="Entrer l'email"
														name='email'
														value={personne.email}
														onChange={handleChange}
													/>
												</div>
											</div>
											<div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
												<div className='form-group'>
													<label htmlFor='telephone1'>Téléphone 1</label>
													<input
														type='text'
														className='form-control'
														id='telephone1'
														placeholder='Entrer Téléphone 1'
														name='telephone_1'
														value={personne.telephone_1}
														onChange={handleChange}
													/>
												</div>
											</div>
											<div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
												<div className='form-group'>
													<label htmlFor='telephone1'>Téléphone 2</label>
													<input
														type='text'
														className='form-control'
														id='telephone1'
														placeholder='Entrer Téléphone 2'
														name='telephone_2'
														value={personne.telephone_2}
														onChange={handleChange}
													/>
												</div>
											</div>

											<div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
												<div className='form-group'>
													<label htmlFor='mobile'>Mobile</label>
													<input
														type='text'
														className='form-control'
														id='mobile'
														placeholder='Entrer N° mobile'
														name='mobile'
														value={personne.mobile}
														onChange={handleChange}
													/>
												</div>
											</div>
										</div>
										<div className='row gutters'>
											<div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
												<h6 className='mt-3 mb-2 text-primary'>-Adresse-</h6>
											</div>
											<div className='col-xl-12 col-lg-12 col-md-6 col-sm-6 col-12'>
												<div className='form-group'>
													<label htmlFor='adresse'>Adresse</label>
													<input
														type='text'
														className='form-control'
														id='adresse'
														placeholder='Entrer adresse'
														name='adress'
														value={personne.adress}
														onChange={handleChange}
													/>
												</div>
											</div>
											<div>
												<div className='form-group'>
													<form>
														<div className='row'>
															<div className='col-6'>
																<label htmlFor='pays'>Pays</label>
																<input
																	type='text'
																	className='form-control'
																	placeholder='Entrer pays'
																	name='pays'
																	value={personne.pays}
																	onChange={handleChange}
																/>
															</div>

															<div className='col-6'>
																<label htmlFor='ville'>Vile</label>
																<input
																	type='text'
																	className='form-control'
																	placeholder='Entrer ville'
																	name='ville'
																	value={personne.ville}
																	onChange={handleChange}
																/>
															</div>
														</div>
													</form>
												</div>
											</div>

											<div>
												<div className='form-group'>
													<div className='row'>
														<div className='form-group col-md-5'>
															<label htmlFor='rue'>Rue</label>
															<input
																type='text'
																className='form-control'
																id='rue'
																placeholder='Entrer rue'
																name='rue'
																value={personne.rue}
																onChange={handleChange}
															/>
														</div>
														<div className='form-group col-md-4'>
															<label htmlFor='nRue'>N°Rue</label>
															<input
																type='number'
																className='form-control'
																id='nRue'
																placeholder='Entrer n°rue'
																name='n_rue'
																value={personne.n_rue}
																onChange={handleChange}
															/>
														</div>
														<div className='form-group col-md-3'>
															<label htmlFor='codePostal'>Code postal</label>
															<input
																type='number'
																className='form-control'
																id='codePostal'
																placeholder='Entrer code postal '
																name='code_postale'
																value={personne.code_postale}
																onChange={handleChange}
															/>
														</div>
													</div>
												</div>
											</div>
										</div>
										<br />
										<div className='row gutters'>
											<div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
												<h6 className='mb-2 text-primary'>
													-Informations Complémentaires-
												</h6>
											</div>
											<div className='col-xl-12 col-lg-12 col-md-6 col-sm-6 col-12'>
												<div className='form-group'>
													<label htmlFor='eMail'></label>
													<input
														type='text'
														className='form-control'
														id='motsCle'
														placeholder='Mots clés'
														name='mots_cle'
														value={personne.mots_cle}
														onChange={handleChange}
													/>
												</div>
											</div>
											<div className='col-xl-12 col-lg-12 col-md-6 col-sm-6 col-12'>
												<br />
												<div className='form-group'>
													<FloatingLabel
														controlId='commentaire'
														label='Commentaires'
														className='mb-3'
													>
														<Form.Control
															as='textarea'
															placeholder='Commentaires ...'
															name='commmentaire'
															value={personne.commmentaire}
															onChange={handleChange}
														/>
													</FloatingLabel>
												</div>
											</div>
										</div>
										<div className='row gutters'>
											<div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
												<div className='text-right'>
													<button
														name='close'
														className='btn btn-secondary'
														onClick={() => setaddShow(false)}
													>
														Exit
													</button>
													&nbsp;
													<button
														type='button'
														id='submit'
														name='submit'
														className='btn btn-primary'
														onClick={() => {
															dispatch(addPeronne(personne));
															setaddShow(false);
														}}
													>
														Add
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Modal.Body>
			</Modal>
			{/* ------------------------------------------------End add modal ------------------------------------------- */}
		</div>
	);
};

export default Search;
