from pydantic import BaseModel

class QuestionCreate(BaseModel):

    topic: str

    difficulty: str

    question_text: str

    correct_answer: str

    xp_reward: int