//@flow
import * as React from 'react'
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'
import Home from 'app/Home'
import Contact from 'app/Contact'

const App = () => (
	<Router>
		<div>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/contact">Contact</Link>
				</li>
			</ul>

			<Routes>
				<Route path="/" Component={Home} />
				<Route path="/contact" Component={Contact} />
			</Routes>
		</div>
	</Router>
)

export default App
