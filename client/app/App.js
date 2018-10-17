//@flow
import * as React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
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

			<Route exact path="/" component={Home} />
			<Route exact path="/contact" component={Contact} />
		</div>
	</Router>
)

export default App
