from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes.home import router as home_router
from app.routes.user import router as user_router

from app.database.db import engine, Base
from app.routes.dashboard import router as dashboard_router
from app.models.user import User
from app.models.question import Question
from app.routes.question import router as question_router
from app.models.attempt import Attempt

app = FastAPI()
app.add_middleware(
    CORSMiddleware,

    allow_origins=[
        "http://localhost:5173"
    ],

    allow_credentials=True,

    allow_methods=["*"],

    allow_headers=["*"],
)

Base.metadata.create_all(bind=engine)

app.include_router(home_router)
app.include_router(user_router)
app.include_router(question_router)
app.include_router(dashboard_router)