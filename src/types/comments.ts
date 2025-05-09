export interface Comment {
    _id: string;
    text: string;
    eventId: string;
    user: {
      _id: string;
      username: string;
     
    };
    createdAt: string;
  }