
import { LogoutButton } from "./LogoutButton";
import { User } from './types';
import { FC } from 'react';

interface ProfileHeaderProps {
  user: User;
  isEditing: boolean;
  tempName: string;
  tempProfilePic: string;
  onNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onImageClick: () => void;
}

export const ProfileHeader: FC<ProfileHeaderProps> = ({
  user,
  isEditing,
  tempName,
  tempProfilePic,
  onNameChange,
  onImageClick
}) => {
  return (
    <div className="flex flex-col items-center mb-12">
      <div className="relative group">
        <img
          src={isEditing ? tempProfilePic : user.profilePic}
          alt="Profile"
          className="h-32 w-32 rounded-full object-cover border-4 border-white shadow-lg"
          onClick={isEditing ? onImageClick : undefined}
        />
        {isEditing && (
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-white text-sm font-medium">Change Photo</span>
          </div>
        )}
      </div>
      <LogoutButton />
      
      {isEditing ? (
        <input
          type="text"
          value={tempName}
          onChange={onNameChange}
          className="mt-4 bg-transparent border-b-2 border-white text-white text-2xl font-bold text-center focus:outline-none focus:border-blue-500"
        />
      ) : (
        <h1 className="mt-4 text-2xl font-bold text-white">{user.name}</h1>
      )}
    </div>
  );
};