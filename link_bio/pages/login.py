import reflex as rx
import requests as rq
import re
'''
from fastapi import FastAPI, HTTPException

app = FastAPI()

@app.post("/auth/login")
async def login(data: dict):
    if data["username"] == "example@mail.com" and data["password"] == "tu_contraseña":
        return {"message": "Inicio de sesión exitoso"}
    else:
        raise HTTPException(status_code=401, detail="Credenciales inválidas")

# Otras rutas y lógica de tu aplicación aquí...

'''
class LoginState(rx.State):
    loader: bool = False
    username:str = "example@mail.com"
    password:str = "tu_contraseña"
    error = False
    response: dict = {}
    
    @rx.background
    async def login_service(self, data:dict):
        async with self:
            self.loader = True
            self.error = False
            response = rq.post("http://localhost:8080/auth/login", json=data, headers={"Content-Type":"application/json"})
            if response.status_code == 200:
                self.response = response.json()
                self.loader = False
                return rx.redirect("/")
            else:
                self.loader = False
                self.error = True
    
    @rx.var
    def user_invalid(self)->bool:
        return not (re.match(r"[^@]+@[^@]+.[^@]+", self.username) and "example@mail.com" )
    
    @rx.var
    def user_empty(self) -> bool:
        return not self.username.strip()
    
    @rx.var
    def password_empty(self) -> bool:
        return not (self.password.strip())
    
    @rx.var
    def validate_fields(self) -> bool:
        return(
            self.user_empty
            or self.user_invalid
            or self.password_empty
        )



@rx.page(route="/login", title= "login")
def login() -> rx.Component:
    return rx.section(
        rx.center(
            rx.flex(
            rx.image(
            src="/logintaller.jpeg",
            width= "240px",
            border_radius="10%"
            ),
            rx.heading("Inicio de sesión"),
            rx.form.root(
                rx.flex(
                    field_from_component_general("Usuario", "Ingrese su usuario", "ingrese un correo valido", "username",
                                                 LoginState.set_username, LoginState.user_invalid),
                    field_form_component("Contraseña", "Ingrese su contraseña", "password",
                                         LoginState.set_password, "password"),
                    rx.form.submit(
                        rx.cond(
                            LoginState.loader,
                            rx.chakra.spinner(color="red", size= "xs"),
                            rx.button(
                                "iniciar sesión",
                                disabled=LoginState.validate_fields,
                                width = "30vw"
                            ),
                        ),
                        as_child=True,
                    ),
                    direction="column",
                    justify="center",
                    align="center",
                    spacing="2"
                ),
                rx.cond(
                    LoginState.error,
                    rx.callout(
                        "Credenciales incorrectas",
                        icon="triangle_alert",
                        color_scheme="red",
                        role= "alert",
                        style={"margin_top": "10px"}
                    ),
                  #  on_click = LoginState.login_service,
                   # reset_on_submit=True,
                    #   width="80%"
                )
            )
        ,
        width="100%",
        direction="column",
        align="center",
        justify="center")
    ),
    style= style_section,
    justify="center",
    width= "100%")

def field_form_component(label:str, palaceholder: str, name_var:str,
                         on_change_function, type_field: str) -> rx.Component:
    return rx.form.field(
        rx.flex(
            rx.form.label(label),
            rx.form.control(
                rx.input.input(
                    placeholder=palaceholder,
                    on_change=on_change_function,
                    name=name_var,
                    type= type_field,
                    required=True,
                ),
                as_child=True,
            ),
            rx.form.message(
                "El campo no puede ser nulo",
                match="valueMissing",
                color="red",
            ),
            direction="column",
            spacing="2",
            align="stretch",
        ),
        name=name_var,
        width= "30vw"
    )
    
def field_from_component_general(label:str, placeholder:str, massage_validated:str, name:str,
                                 on_change_function, show) -> rx.Component:
    return rx.form.field(
        rx.flex(
            rx.form.label(label),
            rx.form.control(
                rx.input.input(
                    placeholder=placeholder,
                    on_change=on_change_function,
                    name=name,
                    required=True
                ),
                as_child=True
            ),
            rx.form.message(
                massage_validated,
                name=name,
                match="valueMissing",
                force_match=show,
                color= "red"
            ),
            direction="column",
            spacing="2",
            align="stretch"
        ),
        name=name,
        width="30vw"
    )
    
style_section = {
    "height": "90vh",
    "width":"80%",
    "margin": "auto"
}