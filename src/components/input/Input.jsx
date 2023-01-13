import PropTypes from 'prop-types'
import './Input.scss'

const Input = ({name, type, value, className, labelText, placeholder, handleChange}) => {
  return (
    <>
    <div className="form-row">
      {labelText && <label className='form-label' htmlFor={name}>{labelText}</label>}
      <input name={name} type={type} className={`form-input ${className}`}
        onChange={handleChange} value={value} placeholder={placeholder} autoComplete='false' />
    </div>
    </>
  )
}

Input.propTypes = {
  name        : PropTypes.string.isRequired,
  type        : PropTypes.string.isRequired,
  value       : PropTypes.any,
  className   : PropTypes.string,
  labelText   : PropTypes.string,
  placeholder : PropTypes.string,
  handleChange: PropTypes.func
}

export default Input
