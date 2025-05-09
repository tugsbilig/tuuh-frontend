"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Layout from '../components/Layout';
import AuthLayout from "@/components/AuthLayout";
import { Button } from "@/components/Button";
import EmailInput from "@/components/inputs/EmailInput";
import PasswordInput from "@/components/inputs/PasswordInput";
import ConfirmPasswordInput from "@/components/inputs/ConfirmPasswordInput";
import ErrorMessage from '@/components/ErrorMessage';
import TextInput from '@/components/inputs/TextInput'; // Assuming you have a generic TextInput component

export default function Signup() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Client-side validation
    if (!username) {
      setError("Хэрэглэгчийн нэр оруулна уу");
      return;
    }
    
    if (password !== confirmPassword) {
      setError("Нууц үг таарахгүй байна");
      return;
    }
  
    if (password.length < 6) {
      setError("Нууц үг хамгийн багадаа 6 тэмдэгт байх ёстой");
      return;
    }
  
    setIsLoading(true);
  
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          password,
          confirmPassword
        }),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || 'Бүртгэл амжилтгүй боллоо');
      }
  
      // Optional: Automatically log user in after registration
      localStorage.setItem('token', data.token);
      localStorage.setItem('userEmail', email);
      localStorage.setItem('username', username);
      
      router.push('/login');
  
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <Layout>
      <AuthLayout 
        title="Бүртгүүлэх" 
        subtitle="Монголын эзэнт гүрний нууцлагдсан хэсэгт тавтай морил"
      >
        <form onSubmit={handleSignup} className="space-y-6">
          <TextInput
            label="Хэрэглэгчийн нэр"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="Хэрэглэгчийн нэрээ оруулна уу"
          />
          
          <EmailInput 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          
          <PasswordInput 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
          />

          <ConfirmPasswordInput
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            minLength={6}
          />

          {error && <ErrorMessage message={error} />}

          <Button type="submit" disabled={isLoading}>
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Бүртгэлж байна...
              </span>
            ) : (
              "Бүртгүүлэх"
            )}
          </Button>
        </form>
        
        <div className="mt-6 text-center text-gray-400">
          Бүртгэлтэй юу?{' '}
          <button 
            onClick={() => router.push("/login")} 
            className="text-yellow-400 hover:text-yellow-300 font-medium transition-colors"
          >
            Нэвтрэх
          </button>
        </div>
      </AuthLayout>
    </Layout>
  );
}