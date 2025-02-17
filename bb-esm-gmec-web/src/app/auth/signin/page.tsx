import React from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";


export const metadata: Metadata = {
  title: "BlueBay Hotels",
  description: "Login page for BlueBay Hotels",
}

const SignIn: React.FC = () => {
  return (
    <>
      <main
        className="min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: 'url("/images/Fondos/Fondo1.jpg")',
        }}
      >
        <div className="min-h-screen w-full flex items-center justify-center px-4">
          <div className="w-full max-w-[440px] rounded-2xl bg-slate-800/80 backdrop-blur-sm p-8 text-white">
            <div className="flex flex-col items-center space-y-6">
              <Image
                src="/images/logo/logo.png"
                alt="BlueBay Hotels & Resorts Logo"
                width={200}
                height={80}
                className="mb-4"
              />

              <div className="text-center mb-4">
                <h1 className="text-2xl font-light mb-8">Accede</h1>
              </div>

              <form className="w-full space-y-6">
                <div className="space-y-2">
                  <label className="block text-sm font-light">Correo</label>
                  <input
                    type="email"
                    placeholder="test1@gmail.com"
                    className="w-full px-4 py-3 bg-transparent border border-white/30 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:border-white"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-light">Contraseña</label>
                  <input
                    type="password"
                    placeholder="••••••••••••"
                    className="w-full px-4 py-3 bg-transparent border border-white/30 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:border-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-white/10 hover:bg-white/20 text-white font-light py-3 px-4 rounded-lg transition-colors mt-8"
                >
                  INGRESAR →
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SignIn;
