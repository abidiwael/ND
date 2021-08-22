import React from "react";
import "./Search.css";


const Search = ({ getSearchTitle}) => {
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
									<button className='classbtnadd' type='submit'>
										Add
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Search;
