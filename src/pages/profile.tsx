"use client";
import Layout from '../components/Layout';
import { ProfileHeader } from '../components/profile/ProfileHeader';
import { HistorySection } from '../components/profile/HistorySection';
import { BookmarkIcon, HeartIcon, PencilIcon, XMarkIcon, CheckIcon } from "@heroicons/react/24/solid";
import { User } from '../components/profile/types';
import { useEffect, useState, useRef } from 'react';
import { historyEvents, HistoryEvent } from '@/data/HistoryEvents';
import { FiPlus } from 'react-icons/fi';
import { PlusIcon } from '@heroicons/react/24/solid';


export default function Profile() {
  const [user, setUser] = useState<User | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [tempName, setTempName] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [tempProfilePic, setTempProfilePic] = useState('');

  useEffect(() => {
    const username = localStorage.getItem('username') || 'No Name';
    const profilePic = localStorage.getItem('profilePic') || "/images/history9.jpg";
    const saved = JSON.parse(localStorage.getItem('savedHistories') || '[]');
    const favorites = JSON.parse(localStorage.getItem('favoriteHistories') || '[]');
  
    const savedHistories = historyEvents.filter(event => saved.includes(event.id));
    const favoriteHistories = historyEvents.filter(event => favorites.includes(event.id));
  
    setUser({
      name: username,
      profilePic: profilePic,
      savedHistories: savedHistories,
      favoriteHistories: favoriteHistories,
    });
    setTempName(username);
    setTempProfilePic(profilePic);
  }, []);
  
  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    if (user) {
      setTempName(user.name);
      setTempProfilePic(user.profilePic);
    }
  };

  const handleSave = () => {
    if (!tempName.trim()) return;
    
    const updatedUser = {
      ...user!,
      name: tempName,
      profilePic: tempProfilePic
    };
    
    setUser(updatedUser);
    setIsEditing(false);
    
    // Save to localStorage
    localStorage.setItem('username', tempName);
    localStorage.setItem('profilePic', tempProfilePic);
    
    // Here you would typically also send the update to your backend
    // await updateUserProfile(updatedUser);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTempProfilePic(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  if (!user) return <div>Loading...</div>;

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-end mb-4">
            {isEditing ? (
              <div className="flex space-x-2">
                <button 
                  onClick={handleCancel}
                  className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 text-white"
                >
                  <XMarkIcon className="h-5 w-5" />
                </button>
                <button 
                  onClick={handleSave}
                  className="p-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white"
                >
                  <CheckIcon className="h-5 w-5" />
                </button>
              </div>
            ) : (
              <button 
                onClick={handleEditClick}
                className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 text-white"
              >
                <PencilIcon className="h-5 w-5" />
              </button>
            )}
          </div>

          <ProfileHeader 
            user={user} 
            isEditing={isEditing}
            tempName={tempName}
            tempProfilePic={tempProfilePic}
            onNameChange={(e) => setTempName(e.target.value)}
            onImageClick={triggerFileInput}
          />

          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageChange}
            accept="image/*"
            className="hidden"
          />
          <HistorySection
            title="Таны нэмсэн түүхүүд"
            items={user.favoriteHistories.map(item => ({ ...item, type: 'favorite' }))}
            icon={PlusIcon}  
            color="blue"     
          />

          <HistorySection
            title="Хадгалсан түүхүүд"
            items={user.savedHistories.map(item => ({ ...item, type: 'saved' }))}
            icon={BookmarkIcon}
            color="yellow"
          />
          <HistorySection
            title="Дуртай түүхүүд"
            items={user.favoriteHistories.map(item => ({ ...item, type: 'favorite' }))}
            icon={HeartIcon}
            color="red"
          />
        </div>
      </div>
    </Layout>
  );
}