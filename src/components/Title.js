import React from 'react'

function Title() {
    console.log("Title Rendring");
    return (
        <>
            <h2>Title rendring</h2>
        </>
    )
}
export default React.memo(Title);