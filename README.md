This project is a full-stack app that helps DOPs, 1st ACs, gaffers, and grips determine what kind of setup and lighting works best for various scenarios.
It has:

Backend (Django + PostgreSQL) → API for setups, users, authentication

Frontend (React) → User interface to interact with the API.

#PROJECT STRUCTURE
setapp/
│── backend/        # Django Backend (API + Admin)
│   └── setapp/
│
│── frontend/       # React Frontend (UI)
│   └── src/
│
│── .gitignore
│── README.md

⚙️ BACKEND (DJANGO)
Setup
cd backend
python -m venv venv
source venv/bin/activate   # On Windows: venv\Scripts\activate
pip install -r requirements.txt

Database

Make sure PostgreSQL is running and update your settings.py with DB credentials.

Run migrations:

python manage.py makemigrations
python manage.py migrate


Create superuser:

python manage.py createsuperuser


Start server:

python manage.py runserver


API will be available at:
👉 http://127.0.0.1:8000/api/

Admin dashboard:
👉 http://127.0.0.1:8000/admin/


🎨 Frontend (React)
Setup
cd frontend
npm install

Run
npm start


App will run at:
👉 http://localhost:3000/

🔗 Connecting Frontend & Backend

The React app will fetch data from the Django API at http://127.0.0.1:8000/api/.

During production, you can configure CORS and serve frontend via Django or deploy them separately.

✅ Features

📸 Manage setups (types, equipment, crew roles)

🔐 JWT authentication (login/register)

🎬 Admin panel for advanced control

⚡ React frontend for interactive UI
