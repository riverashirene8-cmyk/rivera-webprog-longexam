import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "../../components/Button";

const inputClasses =
  "mt-2 w-full rounded-xl border border-zinc-300 bg-zinc-100 px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-zinc-900 focus:bg-zinc-50";

const actionButtonClassName =
  "w-full rounded-xl py-3 text-[11px] tracking-[0.2em]";

const SignUpPage = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    first: "",
    last: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.first && form.last && form.email && form.password) {
      alert("Account created successfully!");
      navigate("/auth/signin");
    } else {
      alert("Please complete all fields");
    }
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-zinc-900">Sign Up</h1>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="text-sm">First Name</label>
            <input
              className={inputClasses}
              value={form.first}
              onChange={(e) =>
                setForm({ ...form, first: e.target.value })
              }
            />
          </div>

          <div>
            <label className="text-sm">Last Name</label>
            <input
              className={inputClasses}
              value={form.last}
              onChange={(e) =>
                setForm({ ...form, last: e.target.value })
              }
            />
          </div>
        </div>

        <div>
          <label className="text-sm">Email</label>
          <input
            className={inputClasses}
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />
        </div>

        <div>
          <label className="text-sm">Password</label>
          <input
            type="password"
            className={inputClasses}
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />
        </div>

        <Button type="submit" variant="primary" className={actionButtonClassName}>
          Create Account
        </Button>

      </form>

      <div className="mt-6 text-sm">
        Already have an account?{" "}
        <Link to="/auth/signin" className="font-bold">
          Log In
        </Link>
      </div>
    </>
  );
};

export default SignUpPage;