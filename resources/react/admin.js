// @flow
import * as React from 'react'
import { AppContainer } from 'react-hot-loader'
import ReactDOM from 'react-dom'
import App from 'admin/App'

const render = (Component) => {
    const node = document.getElementById('react-root')

    if (!node) throw new Error('React mount node missing')

    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        node,
    )
}

render(App)

// $FlowFixMe
if (module.hot) {
// $FlowFixMe - No definition for module.hot
    module.hot.accept('./admin', () => {
        render(App)
    })
}
