import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  return (
    <div className="login-container">
      <div className="card login-card">
        <div className="white-box">
          <h2>Реєстрація</h2>
          <input
            type="text"
            placeholder="Прізвище та ім'я"
            className="input-field"
          />
          <input type="email" placeholder="Пошта" className="input-field" />
          <input type="password" placeholder="Пароль" className="input-field" />
          <div className="reg-button">
            <button className="button-background">
              <span className="button-text">Зареєструватись</span>
            </button>
          </div>
          <p>
            Уже в нашій файті?{" "}
            <Link to="/login" className="login-link">
              Вхід
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
