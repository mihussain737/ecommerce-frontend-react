const InputField = ({
  label,
  id,
  type = "text",
  errors,
  register,
  required,
  message,
  className = "",
  min,
  value,
  placeholder,
}) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label
        htmlFor={id}
        className={`${className} font-semibold text-sm text-slate-800`}
      >
        {label}
      </label>

      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className={`
          ${className}
          px-2 py-2 border outline-none bg-transparent text-slate-800 rounded-md
          ${errors?.[id]?.message ? "border-red-500" : "border-slate-700"}
        `}
        {...register(id, {
          required: required
            ? { value: true, message }
            : false,
          minLength: min
            ? { value: min, message: `Minimum ${min} characters required` }
            : null,
          pattern:
               type==="email"
               ? {
                    value: /^[a-zA-Z0-9]+@[a-zA-Z0-9.]+\.com$/,
                    message: "Invalid email"
               }
               : type === "url"
               ?{
                    value: /^(https?:\/\/)[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message:"Please enter valid url"
               }
               :null,
        })}
      />
      {errors[id]?.message && (
          <p className="text-sm font-semibold text-red-600 mt-0">
               {errors[id]?.message}
          </p>
      )}
    </div>
  );
};
