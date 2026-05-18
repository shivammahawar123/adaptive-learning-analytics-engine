from sqlalchemy import Column, Integer, String, Boolean
from app.database.db import Base

class Attempt(Base):

    __tablename__ = "attempts"

    id = Column(Integer, primary_key=True, index=True)

    user_email = Column(String)

    question_id = Column(Integer)

    user_answer = Column(String)

    is_correct = Column(Boolean)

    xp_gained = Column(Integer)