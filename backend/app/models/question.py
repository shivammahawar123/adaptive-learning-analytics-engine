from sqlalchemy import Column, Integer, String
from app.database.db import Base

class Question(Base):

    __tablename__ = "questions"

    id = Column(Integer, primary_key=True, index=True)

    topic = Column(String)

    difficulty = Column(String)

    question_text = Column(String)

    correct_answer = Column(String)

    xp_reward = Column(Integer)