import React, { useState } from "react";

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      setLoading(false);
      return;
    }

    try {
      //--------------------------api request-------------------------------
      const res = await fetch("http://localhost:3000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password,
        }),
      });

      if (!res.ok) throw new Error("Registration failed/Invalid credentials");
      const data = await res.json();
      console.log("✅ Registered:", data);
    } catch (err) {
      console.error("error occured while registration", err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="flex-1 py-10 flex-col
    bg-primary justify-center items-center flex"
    >
      <p className="my-4 text-center text-sm text-footer">
        Want to stay anonymous?{" "}
        <a href="/home" className="text-secondary hover:underline">
          Explore without registering
        </a>
      </p>
      <div className="w-full max-w-md rounded-lg bg-gray-100 p-8 shadow-lg">
        <h2 className="mb-4 text-center text-2xl font-bold text-footer">
          Create an Account
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/*-----------------------name-------------------------------*/}
          <div>
            <label className="block text-sm font-medium text-footer">
              Name
            </label>
            <input
              type="text"
              placeholder="mr example name"
              name="name"
              className="mt-1 w-full rounded-md outline-none border border-gray-300
               bg-primary px-3 py-2 text-footer focus:border-primary
                focus:ring-2 focus:ring-secondary"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* ------------------------------email-----------------------------*/}
          <div>
            <label className="block text-sm font-medium text-footer">
              Email
            </label>
            <input
              type="email"
              placeholder="example123@hotmail.com"
              name="email"
              className="mt-1 w-full rounded-md outline-none border border-gray-300
               bg-primary px-3 py-2 text-footer focus:border-secondary
                focus:ring-2 focus:ring-secondary"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* ------------------------pass---------------------------*/}
          <div>
            <label className="block text-sm font-medium text-footer">
              Password
            </label>
            <input
              type="password"
              placeholder="**********"
              name="password"
              className="mt-1 w-full rounded-md outline-none border border-gray-300
               bg-primary px-3 py-2 text-footer focus:border-secondary
                focus:ring-2 focus:ring-secondary"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* ----------------------------------------pass again--------------------*/}
          <div>
            <label className="block text-sm font-medium text-footer">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="**********"
              name="confirmPassword"
              className="mt-1 w-full rounded-md outline-none border border-gray-300
               bg-primary px-3 py-2 text-footer focus:border-secondary
                focus:ring-2 focus:ring-secondary"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          {/* ------------------action kaboom-------------------*/}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-md bg-secondary py-2 font-semibold
             text-gray-100 shadow-md transition hover:bg-secondary/90 
             disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-footer">
          Already have an account?{" "}
          <a href="/login" className="text-secondary hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
