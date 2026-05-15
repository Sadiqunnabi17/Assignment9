"use client";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function Navbar() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully");
    router.push("/");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center px-6 py-4">
        {/* Left: Nav links */}
        <nav className="flex items-center gap-6 text-sm font-medium text-gray-600">
          <Link href="/" className="hover:text-cyan-500 transition">
            Home
          </Link>
          {user && (
            <Link href="/dashboard" className="hover:text-cyan-500 transition">
              Dashboard
            </Link>
          )}
        </nav>

        {/* Middle: Logo */}
        <div className="flex flex-1 justify-center">
          <Link href="/" className="text-xl font-bold text-gray-900">
            My<span className="text-cyan-500 italic">App</span>
          </Link>
        </div>

        {/* Right: Auth */}
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <span className="text-sm text-gray-600">
                Hi, {user.name}
              </span>
              <button
                onClick={handleLogout}
                className="text-sm font-medium text-gray-600 hover:text-red-500 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="text-sm font-medium text-gray-600 hover:text-cyan-500 transition"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="bg-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-cyan-400 transition"
              >
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}