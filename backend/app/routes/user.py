from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.utils.security import hash_password
from app.database.deps import get_db
from app.models.user import User
from fastapi import HTTPException
from app.schemas.user_schema import UserCreate, UserLogin
from app.utils.security import verify_password
from app.utils.auth import create_access_token
from fastapi.security import OAuth2PasswordBearer
from app.utils.auth import verify_access_token

router = APIRouter(
    prefix="/users",
    tags=["Users"]
)
oauth2_scheme = OAuth2PasswordBearer(
    tokenUrl="/users/login"
)

@router.post("/register")
def register_user(user: UserCreate, db: Session = Depends(get_db)):
    existing_user = db.query(User).filter(
        (User.email == user.email) |
        (User.username == user.username)
    ).first()

    if existing_user:
        raise HTTPException(
            status_code=400,
            detail="Username or email already exists"
    )

    new_user = User(
        username=user.username,
        email=user.email,
        password=hash_password(user.password)
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return {
        "message": "User registered successfully"
    }

@router.post("/login")
def login_user(user: UserLogin, db: Session = Depends(get_db)):

    existing_user = db.query(User).filter(
        User.email == user.email
    ).first()

    if not existing_user:
        raise HTTPException(
            status_code=400,
            detail="Invalid email or password"
        )

    if not verify_password(
        user.password,
        existing_user.password
    ):
        raise HTTPException(
            status_code=400,
            detail="Invalid email or password"
        )
    
    access_token = create_access_token(
        data={"sub": existing_user.email}
    )

    return {
        "access_token": access_token,
        "token_type": "bearer"
    }


@router.get("/profile")
def get_profile(token: str):

    email = verify_access_token(token)

    if email is None:
        raise HTTPException(
            status_code=401,
            detail="Invalid or expired token"
        )

    return {
        "message": "Protected route accessed",
        "user_email": email
    }

