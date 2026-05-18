from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.deps import get_db
from app.models.user import User
from app.models.attempt import Attempt

router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"]
)

@router.get("/{user_email}")
def get_dashboard(
    user_email: str,
    db: Session = Depends(get_db)
):

    user = db.query(User).filter(
        User.email == user_email
    ).first()

    if not user:
        return {
            "message": "User not found"
        }

    attempts = db.query(Attempt).filter(
        Attempt.user_email == user_email
    ).all()

    total_attempts = len(attempts)

    correct_answers = len([
        a for a in attempts if a.is_correct
    ])

    wrong_answers = total_attempts - correct_answers

    accuracy = (
        (correct_answers / total_attempts) * 100
        if total_attempts > 0 else 0
    )

    return {
        "user_email": user.email,
        "total_xp": user.xp,
        "total_attempts": total_attempts,
        "correct_answers": correct_answers,
        "wrong_answers": wrong_answers,
        "accuracy": round(accuracy, 2)
    }