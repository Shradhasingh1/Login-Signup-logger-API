import  { useState } from 'react';
import API from '../api';

const defaultValues = {
  email: "",
  password: "",
};

export default function Login() {
  const [loginInput, setLoginInput] = useState(defaultValues);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/user/login", loginInput);
      console.log("Login success:", res.data);
      alert("Login successful!");
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      alert("Login failed. Please try again.");
    }
  };

  const handleOnChange = (e) => {
    setLoginInput((prevVal) => ({
      ...prevVal,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className='_login w-full h-[calc(100dvh-60px)] bg-slate-800 text-white flex justify-center items-center flex-col gap-4'>
      <h1 className='text-4xl'>Login Page</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
        <input
          className='text-black p-2 rounded bg-slate-50'
          type="email"
          placeholder='Email'
          name='email'
          value={loginInput.email}
          onChange={handleOnChange}
          required
        />
        <input
          className='text-black p-2 rounded bg-slate-50'
          type="password"
          placeholder='Password'
          name='password'
          value={loginInput.password}
          onChange={handleOnChange}
          required
        />
        <button className='primary-btn' type='submit'>Login</button>
      </form>
    </div>
  );
}
