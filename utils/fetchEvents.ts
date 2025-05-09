export async function fetchEvents() {
    const res = await fetch('http://localhost:5000/api/events');
    if (!res.ok) {
      throw new Error('Failed to fetch events');
    }
    return res.json();
  }
  