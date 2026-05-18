from pydantic import BaseModel

class AttemptCreate(BaseModel):

    user_email: str

    question_id: int

    user_answer: str