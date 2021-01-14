import { useHistory } from 'react-router-dom';

function Nav() {

	const history = useHistory();

	return (
		<>
			<ul>
				<li>
					<button onClick={ () => history.push('/') } to='/'>Home</button>
				</li>
				<li>
					<button onClick={ () => history.push('/photos') } to='/photos'>Photos</button>
				</li>
			</ul>
		</>
	);
}

export default Nav
