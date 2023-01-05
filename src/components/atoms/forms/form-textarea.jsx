import PropTypes from 'prop-types';
import FormLabelTitle from './form-label-title';

const FormTextArea = ({ labelTitle, handleOnChange, value, id, placeholder, cols, rows }) => {
  return (
    <>
      <FormLabelTitle title={labelTitle} />
      
      <textarea
        value={value}
        onChange={handleOnChange}
        id={id}
        cols={cols}
        rows={rows}
        placeholder={placeholder}
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></textarea>
    </>
  )
}

FormTextArea.propType = {
  handleOnChange: PropTypes.func,
  id: PropTypes.string,
  labelTitle: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  cols: PropTypes.number,
  rows: PropTypes.number,
}

FormTextArea.defaultProps = {
  handleOnChange: () => { },
  id: '',
  placeholder: '',
  value: '',
  cols: 30,
  rows: 5,
}

export default FormTextArea