import reflex as rx
from components.navbar import navbar

def index() -> rx.Component:
    return rx.center(
        navbar()
    )
    
app = rx.App()

app.add_page(index)