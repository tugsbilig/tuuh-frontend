// pages/history/[id].tsx
import { useRouter } from 'next/router';
import FullStoryPage from '../fullstory';
import { getEventById } from '@/data/HistoryEvents'; // You'll need to implement this

const HistoryDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  
  // Fetch the event data based on ID
  const event = getEventById(Number(id)); // Implement this function in your HistoryEvents data file

  if (!event) {
    return <div>Event not found</div>;
  }

  const handleBack = () => {
    router.back();
  };

  return <FullStoryPage event={event} onBack={handleBack} />;
};

export default HistoryDetailPage;