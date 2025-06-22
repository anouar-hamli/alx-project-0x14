# ALX Project 0x14 - CineSeek

CineSeek is a modern movie discovery application built with **Next.js**, **TypeScript**, and **Tailwind CSS**. It integrates with the **MoviesDatabase API** to allow users to browse, search, and explore movies based on genres and years.

---

## API Overview

The **MoviesDatabase API** provides a powerful set of endpoints to access a vast collection of movie data. It allows you to:

- Search for movies by title, genre, or release year
- Retrieve detailed information about each movie
- Implement pagination for efficient data loading
- Filter results using a variety of query parameters

---

## Version

**API Version**: `v1`

---

## Available Endpoints

| Endpoint             | Description                                                                 |
|----------------------|-----------------------------------------------------------------------------|
| `/titles`            | Main endpoint to retrieve movie data. Supports search, filters, and pagination. |
| `/titles/:id`        | Get detailed information about a specific movie by its ID.                    |
| `/genres`            | Retrieve a list of available movie genres.                                   |
| `/search`            | Search across titles using a keyword or phrase.                              |

---

## Request and Response Format

### Example Request

```http
GET /titles?genre=action&year=2023&page=1 HTTP/1.1
Host: api.themoviedb.org
Authorization: Bearer YOUR_API_KEY
