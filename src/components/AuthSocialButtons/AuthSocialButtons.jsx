const AuthSocialButtons = ({ Icon, onClick }) => {
  return (
    <div className="my-3 w-full">
      <button
        onClick={onClick}
        className="border shadow rounded-md px-4 py-2 w-full flex items-center justify-center"
      >
        <Icon className="text-2xl" />
      </button>
    </div>
  );
};

export default AuthSocialButtons;
