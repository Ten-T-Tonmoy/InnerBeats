import React, { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    //-------------------------configuring api---------------------
    try {
      const res = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) throw new Error("Login failed");
      const data = await res.json();
      console.log("logging in success", data);
    } catch (err) {
      console.error("error occured while logging in", err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        className="flex-1 py-20 flex-col
    bg-primary justify-center items-center flex"
      >
        <p className="m-1 text-center text-sm text-footer">
          Want to stay anonymous?{" "}
          <a href="/home" className="text-secondary hover:underline">
            Explore without registering
          </a>
        </p>
        <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
          <h2 className="mb-6 text-center text-2xl font-bold text-footer">
            Sign In
          </h2>

          <form className="space-y-5" onSubmit={handleSubmit}>
            {/*-------------------email--------------------*/}
            <div>
              <label className="block text-sm font-medium text-footer">
                Email
              </label>
              <input
                type="email"
                className="mt-1 w-full rounded-md border border-gray-300
               bg-primary px-3 py-2 text-footer outline-none
                focus:border-secondary focus:ring-2
                 focus:ring-secondary"
                value={email}
                placeholder="example123@hotmail.com"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* ----------------password----------------- */}
            <div>
              <label className="block text-sm font-medium text-footer">
                Password
              </label>
              <input
                type="password"
                placeholder="**********"
                className="mt-1 w-full outline-none rounded-md border border-gray-300
               bg-primary px-3 py-2 text-footer focus:border-secondary
                focus:ring-2 focus:ring-secondary"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* --------------submit---------------------*/}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-md bg-secondary py-2
             font-semibold text-white shadow-md transition
              hover:bg-secondary/90 disabled:cursor-not-allowed
               disabled:opacity-70"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-footer">
            Don’t have an account?{" "}
            <a href="/signup" className="text-secondary hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </>
  );
};
