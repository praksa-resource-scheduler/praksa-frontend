import PropTypes from "prop-types";

export default function AuthInput({
  label,
  type,
  placeholder,
  state,
  setState,
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type={type}
        className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder={placeholder}
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
    </div>
  );
}

AuthInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  state: PropTypes.string,
  setState: PropTypes.func,
};
