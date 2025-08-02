import React, { useState } from 'react';
import auth  from '../api/auth'; 
import { useNavigate } from 'react-router-dom';

function Register() {
  const [form, setForm] = useState({
    email: '',
    password: '',
    full_name: '',
    role: 'student',
    teacher_code: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handle = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const submit = async (e) => {
    e.preventDefault();
    setError('');

    if (form.role === 'teacher' && !form.teacher_code) {
      setError('Введите код подтверждения преподавателя');
      return;
    }

    try {
      await auth.post('/register/', form);
      navigate('/login');
    } catch (err) {
      const errData = err.response?.data;
      if (errData) {
        const firstKey = Object.keys(errData)[0];
        setError(Array.isArray(errData[firstKey]) ? errData[firstKey][0] : errData[firstKey]);
      } else {
        setError('Ошибка регистрации');
      }
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Регистрация</h2>
      <form onSubmit={submit} className="space-y-4">
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handle}
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Пароль"
          value={form.password}
          onChange={handle}
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="full_name"
          type="text"
          placeholder="Полное имя"
          value={form.full_name}
          onChange={handle}
          className="w-full p-2 border rounded"
          required
        />
        <select
          name="role"
          value={form.role}
          onChange={handle}
          className="w-full p-2 border rounded"
        >
          <option value="student">Студент</option>
          <option value="teacher">Преподаватель</option>
        </select>

        {form.role === 'teacher' && (
          <input
            name="teacher_code"
            placeholder="Код преподавателя"
            value={form.teacher_code}
            onChange={handle}
            className="w-full p-2 border rounded"
          />
        )}

        {error && <div className="text-red-600 text-sm">{error}</div>}

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
}

export default Register;
