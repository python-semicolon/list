import React from "react"

function Lost(props) {
  const {name,children} = props
  return (
    <div>
      <p>cool {name}</p>
      {children}
    </div>
  );
}

//   Lost.propTypes = {
//   name: React.PropTypes.number
// }
export default Lost