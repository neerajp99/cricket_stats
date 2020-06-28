import React from "react"
import PropTypes from "prop-types"

function InputField( props ) {
  return (
    <div>
      <input
        placeholder={props.placeholder}
        name={props.name}
        className="w-full container mt-2  border-b border-gray-600 p-3 font-sans font-medium tracking-wide text-gray-700 focus:outline-none focus:border-blue-500"
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  )
}

InputField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

InputField.defaultProps = {
  type: "text",
}

export default InputField
