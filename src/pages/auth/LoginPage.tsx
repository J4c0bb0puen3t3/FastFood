import "./LoginPage.css";

export default function LoginPage() {
  return (
    <>
      {/* Header */}
      <div className="login-header">
        <h1 className="login-title">Bienvenido</h1>
        <p className="login-subtitle">Inicia sesión en tu cuenta</p>
      </div>

      {/* Form */}
      <form className="login-form">
        <div className="form-group">
          <label className="form-label">Email</label>
          <input
            type="email"
            placeholder="tu@email.com"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            placeholder="••••••••"
            className="form-input"
          />
        </div>

        <div className="form-options">
          <label className="remember-me">
            <input type="checkbox" />
            <span>Recordarme</span>
          </label>
          <a href="#" className="forgot-password">
            ¿Olvidaste tu contraseña?
          </a>
        </div>

        <button type="submit" className="submit-button">
          Iniciar sesión
        </button>
      </form>

      {/* Footer */}
      <p className="login-footer">
        ¿No tienes cuenta?{" "}
        <a href="#" className="register-link">
          Regístrate
        </a>
      </p>
    </>
  );
}