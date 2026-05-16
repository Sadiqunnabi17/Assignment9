"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      router.push("/dashboard");
    }
  }, [user, loading, router]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center bg-gray-50 px-4">
        <div className="text-center max-w-2xl">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-cyan-500">MyApp</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            A full stack app built with Next.js and Node.js
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/register"
              className="bg-cyan-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-cyan-400 transition"
            >
              Get Started
            </Link>
            <Link
              href="/login"
              className="border border-cyan-500 text-cyan-500 px-6 py-3 rounded-full font-semibold hover:bg-cyan-50 transition"
            >
              Login
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}