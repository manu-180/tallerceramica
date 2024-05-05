import reflex as rx

config = rx.Config(
    app_name="link_bio",
    api_url="https://api.baackend.com/",
    cors_allowed_origins=[
        "http://localhost:3000",
        "http://baackend.com"
    ]
    
    
)