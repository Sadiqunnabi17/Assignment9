"use client";
import ProtectedRoute from "@/components/ProtectedRoute";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from "@/context/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <ProtectedRoute>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 bg-gray-50 px-6 py-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome, {user?.name}!
            </h1>
            <p className="text-gray-500 mb-8">Here is your dashboard</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <p className="text-sm text-gray-500 mb-1">Email</p>
                <p className="font-semibold text-gray-900">{user?.email}</p>
              </div>
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <p className="text-sm text-gray-500 mb-1">Role</p>
                <p className="font-semibold text-gray-900 capitalize">{user?.role}</p>
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