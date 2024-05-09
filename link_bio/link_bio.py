import reflex as rx
from link_bio.pages.index import index
from link_bio.api.api import hello

app = rx.App()

app.add_page(index)

app.api.add_api_route("/hello", hello)