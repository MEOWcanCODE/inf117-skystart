# INF 117 Skystart Project
- UX/UI: Kaitlynne Lew, Minh Anh Bui (Julie)
- Frontend: Dani Al Yunis, Kaitlynne Lew, Minh Anh Bui (Julie)
- Backend: Mew Rojkanok
- Database: Mew Rojkanok
## Set up MySQL database for backend
- easiest way to do this is to copy paste and run the files in MySQL Workbench
### 1. Create database: create_test_db.sql
### 2. Add test data: backend_test_data.sql
## Running Flask Backend
### 1. Activate virtual environment:
  Windows:
  ```
  .\skystart_venv\Scripts\activate
  ```
  macOS/Linux (Bash/Zsh):
  ```
  source skystart_venv/bin/activate
  ```
### 2. Head to flask_backend directory:    
```
cd flask_backend
```
### 3. Run flask backend: 
```
python app.py
```
  Note: using the "run" button in IDEs like VSCode will not work.

## Running Vue + Vite Frontend
### 1. Head to cd my-vue-app directory:
```
cd .\my-vue-app\
```
### 2. Run Vue + Vite frontend:
```
npm run dev
```
