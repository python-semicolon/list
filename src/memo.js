import React from 'react'

function Memo({name}) {
    return (
        <div>
            <h1>cool{name}</h1>
        </div>
    )
}

export default React.memo (Memo)
