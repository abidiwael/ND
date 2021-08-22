import React from "react";
import "./List.css";
import "./Profile.css";
import { useState } from "react";
import { Modal } from "react-bootstrap";
const List = () => {
	const [proShow, setproShow] = useState(false);
	const [editShow, seteditShow] = useState(false);
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
								<div className='text-95 text-secondary-d3'>
									<div className='row mb-2 mb-sm-0 py-25'>
										<div className='d-none d-sm-block col-2'>abidi wael</div>
										<div className='col-9 col-sm-3'>abidi1919@gmail.com</div>
										<div className='d-none d-sm-block col-sm-2'>25252525</div>
										<div className='d-none d-sm-block col-sm-2'>tunisia</div>
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
											/>
										</div>
									</div>
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
			{/* ------------------------------------------------Start profile modal ------------------------------------------- */}
			<Modal
				size='lg'
				show={proShow}
				onHide={() => setproShow(false)}
				aria-labelledby='example-modal-sizes-title-lg'
			>
				<Modal.Header closeButton>
					<Modal.Title id='example-modal-sizes-title-lg'>
						Large Modal
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className='container'>
						<div className='row gutters'>
							<div className='col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12'>
								<div className='card h-100'>
									<div className='card-body'>
										<div className='account-settings'>
											<div className='user-profile'>
												<div className='user-avatar'>
													<img
														src='https://bootdey.com/img/Content/avatar/avatar7.png'
														alt='Maxwell Admin'
													/>
												</div>
												<h5 className='user-name'>Yuki Hayashi</h5>
												<h6 className='user-email'>yuki@Maxwell.com</h6>
											</div>
											<div className='about'>
												<h5>About</h5>
												<p>
													I'm Yuki. Full Stack Designer I enjoy creating
													user-centric, delightful and human experiences.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12'>
								<div className='card h-100'>
									<div className='card-body'>
										<div className='row gutters'>
											<div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
												<h6 className='mb-2 text-primary'>Personal Details</h6>
											</div>
											<div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
												<div className='form-group'>
													<label htmlFor='fullName'>Full Name</label>
													<input
														type='text'
														className='form-control'
														id='fullName'
														placeholder='Enter full name'
													/>
												</div>
											</div>
											<div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
												<div className='form-group'>
													<label htmlFor='eMail'>Email</label>
													<input
														type='email'
														className='form-control'
														id='eMail'
														placeholder='Enter email ID'
													/>
												</div>
											</div>
											<div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
												<div className='form-group'>
													<label htmlFor='phone'>Phone</label>
													<input
														type='text'
														className='form-control'
														id='phone'
														placeholder='Enter phone number'
													/>
												</div>
											</div>
											<div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
												<div className='form-group'>
													<label htmlFor='website'>Website URL</label>
													<input
														type='url'
														className='form-control'
														id='website'
														placeholder='Website url'
													/>
												</div>
											</div>
										</div>
										<div className='row gutters'>
											<div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
												<h6 className='mt-3 mb-2 text-primary'>Address</h6>
											</div>
											<div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
												<div className='form-group'>
													<label htmlFor='Street'>Street</label>
													<input
														type='name'
														className='form-control'
														id='Street'
														placeholder='Enter Street'
													/>
												</div>
											</div>
											<div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
												<div className='form-group'>
													<label htmlFor='ciTy'>City</label>
													<input
														type='name'
														className='form-control'
														id='ciTy'
														placeholder='Enter City'
													/>
												</div>
											</div>
											<div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
												<div className='form-group'>
													<label htmlFor='sTate'>State</label>
													<input
														type='text'
														className='form-control'
														id='sTate'
														placeholder='Enter State'
													/>
												</div>
											</div>
											<div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
												<div className='form-group'>
													<label htmlFor='zIp'>Zip Code</label>
													<input
														type='text'
														className='form-control'
														id='zIp'
														placeholder='Zip Code'
													/>
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
						Large Modal
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className='container'>
						<div className='row gutters'>
							<div className='col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12'>
								<div className='card h-100'>
									<div className='card-body'>
										<div className='account-settings'>
											<div className='user-profile'>
												<div className='user-avatar'>
													<img
														src='https://bootdey.com/img/Content/avatar/avatar7.png'
														alt='Maxwell Admin'
													/>
												</div>
												<h5 className='user-name'>Yuki Hayashi</h5>
												<h6 className='user-email'>yuki@Maxwell.com</h6>
											</div>
											<div className='about'>
												<h5>About</h5>
												<p>
													I'm Yuki. Full Stack Designer I enjoy creating
													user-centric, delightful and human experiences.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12'>
								<div className='card h-100'>
									<div className='card-body'>
										<div className='row gutters'>
											<div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
												<h6 className='mb-2 text-primary'>Personal Details</h6>
											</div>
											<div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
												<div className='form-group'>
													<label htmlFor='fullName'>Full Name</label>
													<input
														type='text'
														className='form-control'
														id='fullName'
														placeholder='Enter full name'
													/>
												</div>
											</div>
											<div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
												<div className='form-group'>
													<label htmlFor='eMail'>Email</label>
													<input
														type='email'
														className='form-control'
														id='eMail'
														placeholder='Enter email ID'
													/>
												</div>
											</div>
											<div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
												<div className='form-group'>
													<label htmlFor='phone'>Phone</label>
													<input
														type='text'
														className='form-control'
														id='phone'
														placeholder='Enter phone number'
													/>
												</div>
											</div>
											<div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
												<div className='form-group'>
													<label htmlFor='website'>Website URL</label>
													<input
														type='url'
														className='form-control'
														id='website'
														placeholder='Website url'
													/>
												</div>
											</div>
										</div>
										<div className='row gutters'>
											<div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
												<h6 className='mt-3 mb-2 text-primary'>Address</h6>
											</div>
											<div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
												<div className='form-group'>
													<label htmlFor='Street'>Street</label>
													<input
														type='name'
														className='form-control'
														id='Street'
														placeholder='Enter Street'
													/>
												</div>
											</div>
											<div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
												<div className='form-group'>
													<label htmlFor='ciTy'>City</label>
													<input
														type='name'
														className='form-control'
														id='ciTy'
														placeholder='Enter City'
													/>
												</div>
											</div>
											<div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
												<div className='form-group'>
													<label htmlFor='sTate'>State</label>
													<input
														type='text'
														className='form-control'
														id='sTate'
														placeholder='Enter State'
													/>
												</div>
											</div>
											<div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
												<div className='form-group'>
													<label htmlFor='zIp'>Zip Code</label>
													<input
														type='text'
														className='form-control'
														id='zIp'
														placeholder='Zip Code'
													/>
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
													>
														Cancel
													</button>
													<button
														type='button'
														id='submit'
														name='submit'
														className='btn btn-primary'
													>
														Update
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
