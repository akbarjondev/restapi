import { useHistory, NavLink } from 'react-router-dom'

function Nav() {

	const history = useHistory();

	return (
		<>
			<ul>
				<li>
					<NavLink to='/'>Home</NavLink>
					{/* <button onClick={ () => history.push('/') } to='/'>Home</button> */}
				</li>
				<li>
					<NavLink to='/photos'>Photos</NavLink>
					{/* <button onClick={ () => history.push('/photos') } to='/photos'>Photos</button> */}
				</li>
			</ul>
		</>
	);
}

export default Nav
