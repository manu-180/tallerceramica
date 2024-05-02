import reflex as rx
from components.navbar import navbar

def index() -> rx.Component:
    return rx.center(
        rx.vstack(
            navbar(),
            navbar(),
            navbar(),
            navbar()
        )
    )
    
app = rx.App()

app.add_page(index)