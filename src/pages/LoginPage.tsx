import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Logo from '../components/Common/Logo';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import './LoginPage.css';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const { language } = useLanguage();
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const texts = {
    en: {
      signIn: 'Sign in to continue',
      email: 'Email Address',
      password: 'Password',
      rememberMe: 'Remember Me',
      forgotPassword: 'Forgot Password?',
      login: 'Login',
      error: 'Invalid email or password'
    },
    id: {
      signIn: 'Masuk untuk melanjutkan',
      email: 'Alamat Email',
      password: 'Kata Sandi',
      rememberMe: 'Ingat Saya',
      forgotPassword: 'Lupa Kata Sandi?',
      login: 'Masuk',
      error: 'Email atau kata sandi tidak valid'
    }
  };

  const t = texts[language];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      await signIn(email, password);
      
      // Get the intended path from location state
      const from = location.state?.from?.pathname || "/admin";
      navigate(from, { replace: true });
    } catch (err) {
      setError(t.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-left">
        <Link to="/" className="login-logo">
          <Logo size="medium" variant="dark" />
        </Link>

        <div className="login-form-container">
          <h1 className="login-title">{t.signIn}</h1>
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">{t.email}</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">{t.password}</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
              />
            </div>

            <div className="remember-forgot">
              <label className="remember-me">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  disabled={loading}
                />
                {t.rememberMe}
              </label>
              <Link to="/forgot-password" className="forgot-password">
                {t.forgotPassword}
              </Link>
            </div>

            <button type="submit" className="login-button" disabled={loading}>
              {loading ? 'Loading...' : t.login}
            </button>
          </form>
        </div>
      </div>

      <div className="login-right">
        <div className="illustration-container">
          <div className="illustration-phone">
            <div className="phone-screen">
              <div className="android-logo"></div>
            </div>
          </div>
          <div className="illustration-person person-left"></div>
          <div className="illustration-person person-right"></div>
          <div className="illustration-plant"></div>
          <div className="illustration-paper-plane"></div>
          <div className="illustration-calendar"></div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;