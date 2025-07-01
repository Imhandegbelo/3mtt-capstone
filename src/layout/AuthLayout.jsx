import Navbar from "../components/Navbar";

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-rose-50">
      <Navbar color={"text-rose-700"} />
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
