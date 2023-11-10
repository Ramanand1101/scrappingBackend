
# Website Word Counter

This is a web scraping and word counting application built with Node.js, Express.js, Axios, Cheerio, and MongoDB.

## Prerequisites

Before using this application, ensure you have:

- Node.js and npm
- MongoDB

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repository.git
   ```

2. Navigate to the project directory:

   ```bash
   cd your-repository
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

1. Start the MongoDB server.

2. Create a `.env` file in the root directory with your MongoDB URI:

   ```
   PORT=3000
   MONGODB_URI=your_mongodb_uri
   ```

   Replace `your_mongodb_uri` with your MongoDB database URI.

3. Run the application:

   ```bash
   npm start
   ```

4. Open your browser and go to [http://localhost:3000](http://localhost:3000) to access the application.

## Endpoints

### 1. Scrape and Store Data

- **Endpoint:** `POST /info/scrape`
- **Request Body:**
  ```json
  {
    "url": "https://example.com"
  }
  ```

### 2. Retrieve All Stored Data

- **Endpoint:** `GET /info/all`

### 3. Update Favorite Status

- **Endpoint:** `PATCH /info/update`
- **Request Body:**
  ```json
  {
    "id": "document_id",
    "favorite": true
  }
  ```

### 4. Delete Stored Document

- **Endpoint:** `DELETE /info/delete/:id`

## License

This project is licensed under the [MIT License](LICENSE).
