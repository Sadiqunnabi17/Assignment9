"use client";
import ProtectedRoute from "@/components/ProtectedRoute";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <ProtectedRoute>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 bg-gray-50 px-6 py-10">
          <div className="max-w-4xl mx-auto">
            {/* Profile header */}
            <div className="flex items-center gap-4 mb-8">
              {user?.image ? (
                <Image
                  src={user.image}
                  alt={user.name}
                  width={64}
                  height={64}
                  className="rounded-full border-2 border-cyan-500"
                />
              ) : (
                <div className="w-16 h-16 rounded-full bg-cyan-500 flex items-center justify-center text-white text-2xl font-bold">
                  {user?.name?.charAt(0).toUpperCase()}
                </div>
              )}
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Welcome, {user?.name}!
                </h1>
                <p className="text-gray-500">{user?.email}</p>
              </div>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <p className="text-sm text-gray-500 mb-1">Email</p>
                <p className="font-semibold text-gray-900">{user?.email}</p>
              </div>
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <p className="text-sm text-gray-500 mb-1">Name</p>
                <p className="font-semibold text-gray-900">{user?.name}</p>
              </div>
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <p className="text-sm text-gray-500 mb-1">Status</p>
                <p className="font-semibold text-green-500">Active</p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </ProtectedRoute>
  );
}