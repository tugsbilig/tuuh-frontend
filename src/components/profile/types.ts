export interface HistoryItem {
    title: string;
    image: string;
    date: string;
    type: 'saved' | 'favorite';
  }
  
  export interface User {
    name: string;
    profilePic: string;
    savedHistories: Omit<HistoryItem, 'type'>[];
    favoriteHistories: Omit<HistoryItem, 'type'>[];
  }