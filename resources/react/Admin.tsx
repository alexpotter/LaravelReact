// @flow
import * as React from 'react'
import { createRoot } from 'react-dom/client'
import App from 'app/App'

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
const render = (Component: any) => {
	const node = document.getElementById('react-root')

	if (!node) throw new Error('React mount node missing')

	const root = createRoot(node)

	root.render(<Component />)
}

render(App)
