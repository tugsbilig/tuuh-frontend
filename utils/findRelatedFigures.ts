// utils/findRelatedFigures.ts
import { HistoryEvent } from '@/data/HistoryEvents';
import { FamousFigure } from '@/data/FamousData';

export const findRelatedFigures = (
  event: HistoryEvent, 
  allFigures: FamousFigure[]
): FamousFigure[] => {
  if (!event.longDescription) return [];
  
  return allFigures.filter(figure => 
    event.longDescription.toLowerCase().includes(figure.name.toLowerCase())
  );
};