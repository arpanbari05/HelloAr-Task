function TextInput({ placeholder, label, error, register, ...props }) {
  return (
    <div className={`${error && "text-red-600"} w-full`}>
      <p className="text-sm mb-2 text-black">{label}</p>
      <input
        className={`${
          error ? "border-red-600" : "border-gray-200"
        } block w-full outline-none px-4 py-2 bg-[transparent] rounded-lg border focus:border-2`}
        placeholder={placeholder}
        {...register}
        {...props}
      />
      {error && <p className="mt-1 text-xs color-red-600">{error}</p>}
    </div>
  );
}

export default TextInput;
