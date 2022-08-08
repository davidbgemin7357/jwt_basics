## Proyecto BÁSICO: NODE, EXPRESS
### Authenticación básica con jwt (no bd)

Login usuario:
http://localhost:8000/api/users/login\
`{
    "username":"nombre",
    "password": "123456"
}`

/dashboard:\
Authorization Bearer Token => "token_del_login"\
http://localhost:8000/api/users/dashboard