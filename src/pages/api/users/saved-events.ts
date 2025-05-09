// pages/api/user/saved-events.ts
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Replace with actual data fetching (e.g., from a database)
  const mockUser = {
    savedHistories: [
      { id: "1", title: "Saved Event 1", date: "2023-10-01" },
      { id: "2", title: "Saved Event 2", date: "2023-10-02" },
    ],
    favoriteHistories: [
      { id: "3", title: "Favorite Event 1", date: "2023-10-03" },
    ],
  };

  res.status(200).json(mockUser);
}