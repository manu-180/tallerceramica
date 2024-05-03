import reflex as rx
from components.navbar import navbar
from link_bio.pages.login import login

def index() -> rx.Component:
    return rx.center(
        rx.vstack(
            rx.text("Pagina de inicio")
        )
    )
    
app = rx.App()

app.add_page(index)