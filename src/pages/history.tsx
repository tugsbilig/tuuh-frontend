"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Layout from '../components/Layout';
import { historyEvents, HistoryEvent } from '@/data/HistoryEvents';
import SearchFilter from "@/components/History/SearchFilter";
import HistoryCard from "@/components/History/HistoryCard";
import HeroSection from "@/components/History/HeroSection";
import EmptyState from "@/components/History/EmptyState";
import { useEffect } from "react";
import AddEventButton from "@/components/AddEventButton";

const HistoryGrid = () => {
  const router = useRouter();
  const [savedEvents, setSavedEvents] = useState<number[]>([]);
  const [bookmarkedEvents, setBookmarkedEvents] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const toggleSaveEvent = (id: number) => {
    setSavedEvents(prev => {
      const updated = prev.includes(id) ? prev.filter(e => e !== id) : [...prev, id];
      localStorage.setItem('savedHistories', JSON.stringify(updated));
      return updated;
    });
  };
  
  const toggleBookmarkEvent = (id: number) => {
    setBookmarkedEvents(prev => {
      const updated = prev.includes(id) ? prev.filter(e => e !== id) : [...prev, id];
      localStorage.setItem('favoriteHistories', JSON.stringify(updated));
      return updated;
    });
  };

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('savedHistories') || '[]');
    const favorites = JSON.parse(localStorage.getItem('favoriteHistories') || '[]');
    setSavedEvents(saved);
    setBookmarkedEvents(favorites);
  }, []);
  
  

  const filteredEvents = historyEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         event.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? event.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  const categories = [...new Set(historyEvents.map(event => event.category))];

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedCategory(null);
  };

  return (
    <Layout>
      <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <HeroSection 
            title="Монголын түүхэн үйл явдлууд"
            description="Манай үндэстний гавьяат түүх, соёл, уламжлалын гайхамшигт үйл явдлууд"
          />

          <SearchFilter 
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            categories={categories}
          />

          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event) => (
                <HistoryCard 
                  key={event.id}
                  event={event}
                  isSaved={savedEvents.includes(event.id)}
                  isBookmarked={bookmarkedEvents.includes(event.id)}
                  onSave={toggleSaveEvent}
                  onBookmark={toggleBookmarkEvent}
                  onClick={() => router.push(`/fullstory/${event.id}`)}
                />
              ))}  
            </div>
          ) : (
            <EmptyState onReset={resetFilters} />
          )}
        </div>
      </div>
      <AddEventButton className="absolute bottom-16 right-16" />
    </Layout>
  );
};

export default HistoryGrid;