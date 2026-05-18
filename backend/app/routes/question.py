from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.deps import get_db
from app.models.question import Question
from app.schemas.question_schema import QuestionCreate

from app.models.user import User
from app.models.attempt import Attempt
from app.schemas.attempt_schema import AttemptCreate

router = APIRouter(
    prefix="/questions",
    tags=["Questions"]
)

@router.post("/add")
def add_question(
    question: QuestionCreate,
    db: Session = Depends(get_db)
):

    new_question = Question(
        topic=question.topic,
        difficulty=question.difficulty,
        question_text=question.question_text,
        correct_answer=question.correct_answer,
        xp_reward=question.xp_reward
    )

    db.add(new_question)

    db.commit()

    db.refresh(new_question)

    return {
        "message": "Question added successfully"
    }


@router.get("/all")
def get_all_questions(db: Session = Depends(get_db)):

    questions = db.query(Question).all()

    return questions



@router.post("/submit")
def submit_answer(
    attempt: AttemptCreate,
    db: Session = Depends(get_db)
):

    question = db.query(Question).filter(
        Question.id == attempt.question_id
    ).first()

    if not question:
        return {
            "message": "Question not found"
        }

    user = db.query(User).filter(
        User.email == attempt.user_email
    ).first()

    if not user:
        return {
            "message": "User not found"
        }

    is_correct = (
        attempt.user_answer.lower()
        ==
        question.correct_answer.lower()
    )

    xp_gained = question.xp_reward if is_correct else 0

    new_attempt = Attempt(
        user_email=attempt.user_email,
        question_id=attempt.question_id,
        user_answer=attempt.user_answer,
        is_correct=is_correct,
        xp_gained=xp_gained
    )

    db.add(new_attempt)

    user.xp += xp_gained

    db.commit()

    return {
        "correct": is_correct,
        "xp_gained": xp_gained,
        "total_xp": user.xp
    }



