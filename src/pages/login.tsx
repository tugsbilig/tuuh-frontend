"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Layout from '../components/Layout';
import AuthLayout from "@/components/AuthLayout";
import EmailInput from "@/components/inputs/EmailInput";
import PasswordInput from "@/components/inputs/PasswordInput";
import { Button } from "@/components/Button";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    console.log("Login attempt started"); 
  
    try {
      console.log("Sending request with:", { email, password }); 
      
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({  email: email.trim().toLowerCase(), password }),
      });
  
      console.log("Received response status:", response.status); 
      
      const data = await response.json();
      console.log("Received data:", data); 
  
      if (response.ok) {
        console.log("Login successful, storing token:", data.token); 
        localStorage.setItem("token", data.token);
        localStorage.setItem('username', data.username);
        localStorage.setItem("userEmail", data.email);
        console.log("Redirecting to /profile"); 
        router.push("/profile");
      } else {
        console.error("Login failed:", data.message); 
        setError(data.message || "Нэвтрэхэд алдаа гарлаа");
      }
    } catch (error) {
      console.error("Login error:", error); 
      setError("Сервертэй холбогдож чадсангүй");
    }
  };
  
  
  return (
    <Layout>
      <AuthLayout 
        title="Нэвтрэх" 
        subtitle="Монголын эзэнт гүрний нууцлагдсан хэсэгт тавтай морил"
      >
        <form onSubmit={handleLogin} className="space-y-6">
          <EmailInput 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          
          <PasswordInput 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          
          {error && (
            <div className="p-3 bg-red-900/50 border border-red-700 rounded-lg text-red-200 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {error}
            </div>
          )}
          
          <Button type="submit">Нэвтрэх</Button>
        </form>
        
        <div className="mt-6 text-center text-gray-400">
          Бүртгэлгүй юу?{' '}
          <button 
            onClick={() => router.push("/signup")} 
            className="text-yellow-400 hover:text-yellow-300 font-medium transition-colors"
          >
            Бүртгүүлэх
          </button>
        </div>
      </AuthLayout>
    </Layout>
  );
}