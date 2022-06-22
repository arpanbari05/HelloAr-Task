
function SelectInput({ label, error, options, register, ...props }) {
  return (
    <div className={error && "text-red-600"}>
      <p className="text-sm mb-2">{label}</p>
      <select
        className={`${
          error && "text-red-600"
        } w-full outline-none px-4 py-2 border border-gray-200 bg-[transparent] rounded-lg focus:border-2`}
        {...register}
        {...props}
      >
        {options.map((opt) => (
          <option className="p-3" value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="text-xs color-red-600">{error}</p>}
    </div>
  );
}

export default SelectInput