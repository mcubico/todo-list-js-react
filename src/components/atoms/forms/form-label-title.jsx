export default function FormLabelTitle({title}) {
  return (
    <label
      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
      htmlFor="grid-title">
      {title}
    </label>
  )
}
