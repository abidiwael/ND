import React from "react";
import "./List.css";
import "./Profile.css";
import { useState } from "react";
import { Modal, Form, FloatingLabel, ListGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
	deletePersonne,
	editPersonne,
} from "../../Redux/personneActions/personneActions";

const List = ({ personne }) => {
	// *******************************************************************************
	const [civilite, setCivilite] = useState(personne.civilite);
	const [nom, setNom] = useState(personne.nom);
	const [prenom, setPrenom] = useState(personne.prenom);
	const [date_naissance, setDate_naissance] = useState(personne.date_naissance);
	const [situation_familiale, setSituation_familiale] = useState(
		personne.situation_familiale
	);
	const [nb_enfants, setNb_enfants] = useState(personne.nb_enfants);
	const [email, setEmail] = useState(personne.email);
	const [telephone_1, setTelephone_1] = useState(personne.telephone_1);
	const [telephone_2, setTelephone_2] = useState(personne.telephone_2);
	const [mobile, setMobile] = useState(personne.mobile);
	const [adress, setAdress] = useState(personne.adress);
	const [pays, setPays] = useState(personne.pays);
	const [ville, setVille] = useState(personne.ville);
	const [rue, setRue] = useState(personne.rue);
	const [n_rue, setN_rue] = useState(personne.n_rue);
	const [code_postale, setCode_postale] = useState(personne.code_postale);
	const [complement_adresse, setComplement_adresse] = useState(
		personne.complement_adresse
	);
	const [mots_cle, setMots_cle] = useState(personne.mots_cle);
	const [commmentaire, setCommmentaire] = useState(personne.commmentaire);

	// *******************************************************************************
	const [proShow, setproShow] = useState(false);
	const [editShow, seteditShow] = useState(false);

	const dispatch = useDispatch();
	return (
		<div>
			<div className='text-95 text-secondary-d3'>
				<div className='row mb-2 mb-sm-0 py-25'>
					<div className='d-none d-sm-block col-2'>{personne.nom}</div>
					<div className='col-9 col-sm-3'>{personne.email}</div>
					<div className='d-none d-sm-block col-sm-2'>{personne.mobile}</div>
					<div className='d-none d-sm-block col-sm-2'>{personne.pays}</div>
					<div className='col-9 col-sm-3 '>
						<button
							className='btn  fa fa-search-plus btn-actions text-muted'
							type='submit'
							onClick={() => setproShow(true)}
						/>
						<button
							className='btn  fa fa-edit btn-actions text-muted'
							type='submit'
							onClick={() => seteditShow(true)}
						/>
						<button
							className='btn  fa fa-trash btn-actions text-muted'
							type='submit'
							onClick={() => dispatch(deletePersonne(personne._id))}
						/>
					</div>
				</div>
			</div>

			{/* ------------------------------------------------Start profile modal ------------------------------------------- */}
			<Modal
				size='lg'
				show={proShow}
				onHide={() => setproShow(false)}
				aria-labelledby='example-modal-sizes-title-lg'
			>
				<Modal.Header closeButton>
					<Modal.Title id='example-modal-sizes-title-lg'>
						Person Data
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className='container'>
						<div className='row gutters'>
							<div className='col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12'>
								<div className='card h-100'>
									<div className='card-body'>
										<div className='account-settings'>
											<div className='user-profile'>
												<div className='user-avatar'>
													<br />
													<br />
													<img
														src='https://image.flaticon.com/icons/png/512/206/206853.png'
														alt='Maxwell Admin'
													/>
												</div>
												<h5 className='user-name'>
													{personne.nom} {personne.prenom}
												</h5>
												<h5 className='text-muted'>{personne.civilite}</h5>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12'>
								<div className='card h-100'>
									<div className='card-body'>
										<div className='row gutters'>
											<div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
												<h6 className='mb-2 text-primary'>-Identité-</h6>
											</div>
											<div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
												<div className='form-group'>
													<label htmlFor='dateNaissance'>
														Date de naissance
													</label>
													<input
														type='text'
														className='form-control'
														id='phone'
														placeholder='Entrer la date de naissance'
														readOnly
														value={personne.date_naissance}
													/>
												</div>
											</div>
											<div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
												<div className='form-group'>
													<label htmlFor='SituationFamiliale'>
														Situation familiale
													</label>
													<input
														type='text'
														className='form-control'
														id='phone'
														placeholder='Entrer la date de naissance'
														readOnly
														value={personne.situation_familiale}
													/>
												</div>
											</div>
											<div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
												<div className='form-group'>
													<label htmlFor='nbEnfants'>Nombre d'enfants</label>
													<input
														type='number'
														className='form-control'
														id='website'
														placeholder="entrer le nombre d'enfants"
														readOnly
														value={personne.nb_enfants}
													/>
												</div>
											</div>
											<div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
												<div className='form-group'>
													<label htmlFor='civilite'>Civilité</label>
													<input
														type='text'
														className='form-control'
														id='civilite'
														placeholder="entrer le nombre d'enfants"
														readOnly
														value={personne.civilite}
													/>
												</div>
											</div>
										</div>
										<div className='row gutters'>
											<div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
												<br />
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
														value={personne.email}
														readOnly
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
														value={personne.telephone_1}
														readOnly
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
														value={personne.telephone_2}
														readOnly
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
														value={personne.mobile}
														readOnly
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
								<br />
								<div className='card h-100'>
									<div className='card-body'>
										<div className='row gutters'>
											<div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
												<h6 className='mb-2 text-primary'>-Adresse-</h6>
											</div>
											<div className='col-xl-12 col-lg-12 col-md-6 col-sm-6 col-12'>
												<div className='form-group'>
													<label htmlFor='adresse'>Adresse</label>
													<input
														type='text'
														className='form-control'
														id='mobile'
														placeholder='Entrer adresse'
														readOnly
														value={personne.adress}
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
																	readOnly
																	value={personne.pays}
																/>
															</div>

															<div className='col-6'>
																<label htmlFor='ville'>Vile</label>
																<input
																	type='text'
																	className='form-control'
																	placeholder='Entrer ville'
																	readOnly
																	value={personne.ville}
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
																readOnly
																value={personne.rue}
															/>
														</div>
														<div className='form-group col-md-3'>
															<label htmlFor='nRue'>N°Rue</label>
															<input
																type='number'
																className='form-control'
																id='nRue'
																placeholder='Entrer n°rue'
																readOnly
																value={personne.n_rue}
															/>
														</div>
														<div className='form-group col-md-4'>
															<label htmlFor='codePostal'>Code postal</label>
															<input
																type='number'
																className='form-control'
																id='codePostal'
																placeholder='Entrer code postal '
																readOnly
																value={personne.code_postale}
															/>
														</div>
													</div>
												</div>
											</div>
											<div className='row gutters'>
												<div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
													<br />
													<h6 className='mb-2 text-primary'>
														-Informations Complémentaires-
													</h6>
												</div>
												<div className='col-xl-12 col-lg-12 col-md-6 col-sm-6 col-12'>
													<div className='form-group'>
														<label htmlFor='mots_clé'></label>
														<input
															type='text'
															className='form-control'
															id='motsCle'
															readOnly
															value={personne.mots_cle}
														/>
													</div>
												</div>
												<div className='col-xl-12 col-lg-12 col-md-6 col-sm-6 col-12'>
													<br />
													<div className='form-group'>
														<FloatingLabel controlId='commentaire'>
															<Form.Control
																as='textarea'
																placeholder='Commentaires ...'
																readOnly
																value={personne.commmentaire}
															/>
														</FloatingLabel>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<br />
					</div>
				</Modal.Body>
			</Modal>
			{/* ------------------------------------------------End profile modal ------------------------------------------- */}
			{/* ------------------------------------------------Start edit modal ------------------------------------------- */}
			<Modal
				size='lg'
				show={editShow}
				onHide={() => seteditShow(false)}
				aria-labelledby='example-modal-sizes-title-lg'
			>
				<Modal.Header closeButton>
					<Modal.Title id='example-modal-sizes-title-lg'>
						Edit person data
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
													<Form>
														<Form.Group
															controlId='SelectCustom'
															name='civilite'
															onChange={(e) => setCivilite(e.target.value)}
															value={civilite}
														>
															<Form.Control as='select' custom>
																<option>Select ...</option>
																<option>Mr.</option>
																<option>Mme.</option>
																<option>Autres</option>
															</Form.Control>
														</Form.Group>
													</Form>
												</div>
											</div>
											<div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
												<div className='form-group'>
													<label htmlFor='nom'>Nom</label>
													<input
														type='text'
														className='form-control'
														id='fullName'
														placeholder='Entrer le nom'
														onChange={(e) => setNom(e.target.value)}
														value={nom}
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
														onChange={(e) => setPrenom(e.target.value)}
														value={prenom}
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
														onChange={(e) => setDate_naissance(e.target.value)}
														value={date_naissance}
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
														onChange={(e) =>
															setSituation_familiale(e.target.value)
														}
														value={situation_familiale}
													>
														<option>Choisir ....</option>
														<option value='1'>marié(e)</option>
														<option value='2'>célibataire</option>
														<option value='3'>divorcé(e)</option>
														<option value='4'>veuf(ve)</option>
													</Form.Select>
												</div>
											</div>
											<div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
												<div className='form-group'>
													<label htmlFor='nbEnfants'>Nombre d'enfants</label>
													<input
														type='number'
														className='form-control'
														id='website'
														placeholder="entrer le nombre d'enfants"
														onChange={(e) => setNb_enfants(e.target.value)}
														value={nb_enfants}
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
														onChange={(e) => setEmail(e.target.value)}
														value={email}
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
														onChange={(e) => setTelephone_1(e.target.value)}
														value={telephone_1}
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
														onChange={(e) => setTelephone_2(e.target.value)}
														value={telephone_2}
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
														onChange={(e) => setMobile(e.target.value)}
														value={mobile}
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
														id='mobile'
														placeholder='Entrer adresse'
														onChange={(e) => setAdress(e.target.value)}
														value={adress}
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
																	onChange={(e) => setPays(e.target.value)}
																	value={pays}
																/>
															</div>

															<div className='col-6'>
																<label htmlFor='ville'>Vile</label>
																<input
																	type='text'
																	className='form-control'
																	placeholder='Entrer ville'
																	onChange={(e) => setVille(e.target.value)}
																	value={ville}
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
																onChange={(e) => setRue(e.target.value)}
																value={rue}
															/>
														</div>
														<div className='form-group col-md-4'>
															<label htmlFor='nRue'>N°Rue</label>
															<input
																type='number'
																className='form-control'
																id='nRue'
																placeholder='Entrer n°rue'
																onChange={(e) => setN_rue(e.target.value)}
																value={n_rue}
															/>
														</div>
														<div className='form-group col-md-3'>
															<label htmlFor='codePostal'>Code postal</label>
															<input
																type='number'
																className='form-control'
																id='codePostal'
																placeholder='Entrer code postal '
																onChange={(e) =>
																	setCode_postale(e.target.value)
																}
																value={code_postale}
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
														onChange={(e) => setMots_cle(e.target.value)}
														value={mots_cle}
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
															onChange={(e) => setCommmentaire(e.target.value)}
															value={commmentaire}
														/>
													</FloatingLabel>
												</div>
											</div>
										</div>
										<div className='row gutters'>
											<div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
												<div className='text-right'>
													<button
														type='button'
														id='submit'
														name='submit'
														className='btn btn-secondary'
														onClick={() => seteditShow(false)}
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
															dispatch(
																editPersonne(personne._id, {
																	civilite,
																	nom,
																	prenom,
																	date_naissance,
																	situation_familiale,
																	nb_enfants,
																	email,
																	telephone_1,
																	telephone_2,
																	mobile,
																	adress,
																	pays,
																	ville,
																	rue,
																	n_rue,
																	code_postale,
																	complement_adresse,
																	mots_cle,
																	commmentaire,
																})
															);
															seteditShow(false);
														}}
													>
														Edit
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
			{/* ------------------------------------------------End edit modal ------------------------------------------- */}
		</div>
	);
};

export default List;
