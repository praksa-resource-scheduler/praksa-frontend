import PropTypes from "prop-types";

export default function AuthButton({ text, isSigningIn }) {
  return (
    <button
      disabled={isSigningIn}
      type="submit"
      className="appearance-none w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-xl transition duration-300"
    >
      {text}
    </button>
  );
}

AuthButton.propTypes = {
  text: PropTypes.string.isRequired,
  isSigningIn: PropTypes.bool,
};
