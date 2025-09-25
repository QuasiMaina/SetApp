🎥 Camera & Lighting Setup Management System

This project is a full-stack web app that helps DOPs, 1st ACs, Gaffers, and Grips determine what kind of camera and lighting setups work best for various film scenarios.

It is built with:

Backend: Django + Django REST Framework + PostgreSQL → Provides APIs for setups, users, authentication

Frontend: React + TailwindCSS → Interactive user interface for browsing and uploading setups

📂 Project Structure
setapp/
│── backend/          # Django Backend (API + Admin)
│   └── setapp/
│── frontend/         # React Frontend (UI)
│   └── src/
│── .gitignore
│── README.md

⚙️ Backend (Django) Setup
cd backend
python -m venv venv
source venv/bin/activate   # On Windows: venv\Scripts\activate
pip install -r requirements.txt

Database

Ensure PostgreSQL is running

Update settings.py with your database credentials

Run migrations:

python manage.py makemigrations
python manage.py migrate


Create superuser:

python manage.py createsuperuser


Start server:

python manage.py runserver


API: 👉 http://127.0.0.1:8000/api/

Admin dashboard: 👉 http://127.0.0.1:8000/admin/

🎨 Frontend (React) Setup
cd frontend
npm install
npm start


App will run at 👉 http://localhost:3000/

🔗 Connecting Frontend & Backend

The React frontend fetches data from the Django API at:
👉 http://127.0.0.1:8000/api/

For production, configure CORS properly and either:

Serve the frontend via Django, OR

Deploy frontend and backend separately

✅ Features

📸 Manage setups (scene type, equipment, crew role, lighting mood, tags)

👥 Role-based access (Viewer, Contributor, Admin)

🔐 JWT authentication (Login/Register)

🎬 Crew directory (DOPs, Gaffers, Grips, 1st ACs)

⚡ React frontend for interactive dashboards

🛠️ Admin panel for advanced content control
