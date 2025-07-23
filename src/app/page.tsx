"use client";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const { data } = useSession();
  
  const logout = () => {
    signOut({ redirect: false });
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-md mx-auto">
        {/* Main Card */}
        <div className="rounded-2xl shadow-xl border p-8 sm:p-10 space-y-8">
          
          {/* Header */}
          <div className="text-center space-y-2">
            <div className="w-16 h-16 border-2 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h6a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold leading-tight">
              Project Hub
            </h1>
            <p className="text-sm sm:text-base opacity-70">
              Streamlined project management
            </p>
          </div>

          {/* User Section */}
          {data && (
            <div className="rounded-xl p-4 border">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 border-2 rounded-full flex items-center justify-center font-semibold text-sm">
                  {data?.user?.name?.charAt(0).toUpperCase() || 'U'}
                </div>
                <div>
                  <p className="text-sm opacity-70">Welcome back</p>
                  <p className="font-semibold">
                    {data?.user?.name || 'User'}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Action Button */}
          <div className="space-y-4">
            {data ? (
              <Button
                onClick={logout}
                className="w-full border-2 font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-opacity-50 shadow-lg hover:shadow-xl"
              >
                Sign Out
              </Button>
            ) : (
              <Link
                href="/login"
                className="w-full border-2 font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-opacity-50 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                Get Started
              </Link>
            )}
          </div>

          {/* Footer */}
          <div className="text-center pt-4 border-t">
            <p className="text-xs opacity-50">
              Manage projects with simplicity
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}