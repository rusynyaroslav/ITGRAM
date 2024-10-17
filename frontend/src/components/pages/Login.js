import React from "react";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className="login-container">
      <div className="card login-card">
        <div className="white-box">
          <h2>Вхід</h2>
          <input type="text" placeholder="Пошта" className="input-field" />
          <input type="password" placeholder="Пароль" className="input-field" />
          <div className="login-button">
            <button className="button-background">
              <span className="button-text">Увійти</span>
            </button>
          </div>
          <p>
            Ще не в нашій файті?{" "}
            <Link to="/signup" className="login-link">
              Зареєструватись
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
