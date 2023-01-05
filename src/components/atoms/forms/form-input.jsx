import PropTypes from 'prop-types';
import FormLabelTitle from './form-label-title';

const FormInput = ({ labelTitle, handleOnChange, value, id, placeholder }) => {
  return (
    <>
      <FormLabelTitle title={labelTitle} />
      <input
        onChange={handleOnChange}
        value={value}
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id={id}
        type="text"
        placeholder={placeholder} />
    </>
  )
}

FormInput.propType = {
  handleOnChange: PropTypes.func,
  id: PropTypes.string,
  labelTitle: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
}

FormInput.defaultProps = {
  handleOnChange: () => { },
  id: '',
  placeholder: '',
  value: ''
}

export default FormInput