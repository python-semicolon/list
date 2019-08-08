import React from 'react'
import ReactDOM from 'react-dom'

function PortalDemo() {
	return ReactDOM.createPortal(
		<h6>Portals Demo</h6>,
		document.getElementById('portal-root')
	)
}

export default PortalDemo