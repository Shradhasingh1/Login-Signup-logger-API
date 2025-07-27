import { useState } from 'react';
import API from '../api';

const defaultValues = {
  email: "",
  username: "",
  password: "",
};

export default function Singup() {
  const [signupInput, setSignupInput] = useState(defaultValues);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/user/signup", signupInput);
      console.log("Signup success:", res.data);
      alert("Signup successful!");
    } catch (error) {
      console.error("Signup error:", error.response?.data || error.message);
      alert("Signup failed. Please try again.");
    }
  };

  const handleOnChange = (e) => {
    setSignupInput((prevVal) => ({
      ...prevVal,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className='_login w-full h-[calc(100dvh-60px)] bg-slate-800 text-white flex justify-center items-center flex-col gap-4'>
      <h1 className='text-4xl'>Signup Page</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
        <input
          className='text-black p-2 rounded bg-slate-50'
          type="email"
          placeholder='Email'
          name='email'
          value={signupInput.email}
          onChange={handleOnChange}
          required
        />
        <input
          className='text-black p-2 rounded bg-slate-50'
          type="text"
          placeholder='Username'
          name='username'
          value={signupInput.username}
          onChange={handleOnChange}
          required
        />
        <input
          className='text-black p-2 rounded bg-slate-50'
          type="password"
          placeholder='Password'
          name='password'
          value={signupInput.password}
          onChange={handleOnChange}
          required
        />
        <button className='primary-btn' type='submit'>Signup</button>
      </form>
    </div>
  );
}
