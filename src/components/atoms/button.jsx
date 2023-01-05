import PropTypes from 'prop-types';

const Button = function ({ value, color, type, handleOnClick }) {
  const styles = `inline-block bg-${color}-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-${color}-300`
  return (
    <button
      type={type}
      className={styles}
      onClick={handleOnClick}>{value}</button>
  )
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['green', 'red', 'blue']),
  type: PropTypes.oneOf(['button', 'submit']),
  handleOnClick: PropTypes.func
}

Button.defaultProps = {
  color: 'green',
  type: 'button',
  handleOnClick: () => { }
}

export default Button