import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useMemo,
} from "react";
import { useNavigate } from "react-router-dom";
import { userLogin, registerUser } from "../services/userServices";
import { toast } from "react-toastify";

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  // Load token and user from localStorage on mount
  useEffect(() => {
    const savedToken = localStorage.getItem("mov_token");
    const savedUser = localStorage.getItem("mov_user");
    if (savedToken && savedUser) {
      setToken(savedToken);
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // Save token to localStorage whenever it changes
  useEffect(() => {
    if (token) {
      localStorage.setItem("mov_token", token);
    } else {
      localStorage.removeItem("mov_token");
    }
  }, [token]);

  // Save user to localStorage whenever it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem("mov_user", JSON.stringify(user));
    } else {
      localStorage.removeItem("mov_user");
    }
  }, [user]);

  const refreshUser = (data) => {
    setUser(data);
  };

  const login = useCallback(
    async (userData) => {
      const res = await userLogin(userData);
      if (res.status === 200) {
        setToken(res.data.token);
        refreshUser(res.data.user);

        navigate("/");
      } else {
        toast.error(res.data.error);
        console.error("Error::", res.data);
      }
    },
    [navigate]
  );

  const register = useCallback(
    async (userData) => {
      const res = await registerUser(userData);
      if (res.status === 200) {
        setToken(res.data.token);
        refreshUser(res.data.user);

        navigate("/");
      } else {
        toast.error(res.data.error);
        console.error("Registration failed::", error);
      }
    },
    [navigate]
  );

  const logout = useCallback(() => {
    setToken("");
    setUser(null);
    navigate("/auth/login");
  }, [navigate]);

  const contextValue = useMemo(
    () => ({
      user,
      token,
      login,
      register,
      logout,
      refreshUser,
    }),
    [user, token, login, register, logout]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
