import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "../../components/Button";

const inputClasses =
  "mt-2 w-full rounded-xl border border-zinc-300 bg-zinc-100 px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-zinc-900 focus:bg-zinc-50";

const actionButtonClassName =
  "w-full rounded-xl py-3 text-[11px] tracking-[0.2em]";

const SignInPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password) {
      alert("Login successful!");
      navigate("/");
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-zinc-900">Log In</h1>

      <form onSubmit={handleLogin} className="mt-8 space-y-5">

        <div>
          <label>Email</label>
          <input
            className={inputClasses}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            className={inputClasses}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Button type="submit" variant="primary" className={actionButtonClassName}>
          Log In
        </Button>

      </form>

      <div className="mt-6 text-sm">
        No account?{" "}
        <Link to="/auth/signup" className="font-bold">
          Sign Up
        </Link>
      </div>
    </>
  );
};

export default SignInPage;