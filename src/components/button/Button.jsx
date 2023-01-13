import PropTypes from 'prop-types'

const Button = ({label, className, disabled, handleClick}) => {
  return (
    <>
    <button className={className} onClick={handleClick} disabled={disabled}>{label}</button>
    </>
  )
}

Button.propTypes = {
  label      : PropTypes.any.isRequired,
  className  : PropTypes.string,
  disabled   : PropTypes.bool,
  handleClick: PropTypes.func
}

export default Button
