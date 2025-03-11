/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const router = useRouter();

  // Check if the user is already authenticated
  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
        router.push('/admin');
      } else {
        setIsAuthenticated(false);
      }
    });
    setLoading(false);

    // Clean up the listener on component unmount
    return unsubscribe;
  }, [router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Logged in successfully!");

      // Redirect to the admin/home page after login
      router.push('/admin');
    } catch (err: any) {
      alert(err.message);
    }  
  };

  if (loading) {
    return <div className={`w-screen h-screen flex justify-center items-center fixed top-0 right-0`}>Loading...</div>
  }

  if (!isAuthenticated) {
    return (
      <div className="w-screen h-screen fixed top-0 bg-[black] z-20 flex items-center justify-center px-5">
        <div className="bg-white p-6 rounded shadow-lg w-full max-w-sm">
          <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="emaill" className="block text-sm font-medium text-gray-700">
                email
              </label>
              <input
                type="email"
                id="emaill"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className={`w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none`}
            >
              login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;