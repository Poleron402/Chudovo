# Chudovo (Personal crypto project)

## Chudovo is an informational full-stack crypto application, which allows you to look up minimal crypto stats and save favorite coins to your watchlist
Chudovo will implement
* Login/SignUp/Logout functionality
* Use of two 3d party apis
* One backend api for data storage

## Technologies
The frameworks that will be used for this project
* ReactJS
* Django
* Postresql
* Bootstrap
<br></br>
*Considering:*
<br></br>
* SASS for learning purposes
* Tailwind


## Prerequisites

## Environment Variables

Create a `.env` file in the root of your project and add the following environment variables:

```env
# Django Secret Key
SECRET_KEY=your_django_secret_key_here

# API Key
OPENAI_API_KEY=your_api_key_here
(This project uses OpenAI API, but if you don't have a key, it will not affect much functionality. The API is used to get info about certain cryptocurrency after querying it in the search on main page.)
```

- [Python](https://www.python.org/) 
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Backend Setup (Django)

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Poleron402/Chudovo.git
    cd your-project
    ```

2. **Create a virtual environment:**

    ```bash
    python -m venv venv
    ```

3. **Activate the virtual environment:**

    - On Windows:

        ```bash
        .\venv\Scripts\activate
        ```

    - On macOS/Linux:

        ```bash
        source venv/bin/activate
        ```

4. **Install Python dependencies:**

    ```bash
    pip install -r requirements.txt
    ```

5. **Run migrations:**

    ```bash
    python manage.py migrate
    ```

6. **Create a superuser (optional):**

    ```bash
    python manage.py createsuperuser
    ```

7. **Start the Django development server:**

    ```bash
    python manage.py runserver
    ```

### Frontend Setup (React with Vite)

1. **Navigate to the frontend directory:**

    ```bash
    cd frontend
    ```

2. **Install Node.js dependencies:**

    ```bash
    npm install
    ```

3. **Start the Vite development server:**

    ```bash
    npm run dev
    ```

