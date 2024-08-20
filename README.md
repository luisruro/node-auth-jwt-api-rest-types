# Instalaciones

1. npm init

## Dev Dependencies

2. npm install ts-node-dev para levantar con node nuestros archivos ts para no estar convirtiendo en Js
3. npm install @types/express el @types es porque express esta en JavaScript, no esta en typescript entonces necesitamos agregar el tipado para poder utilizarlo en typescript y entienda el tipado de express
4. npm install @types/jsonwebtoken
5. npm install @types/bcrypt para encriptar contraseñas
6. npm install @types/node
7. npm install rimraf es para borrar carpetas del build y se instala como dependencia de desarrollo
8. npm install prisma para hacer en enlace con postgres

** Al final se le pone --save-dev para que se instalen como dependencia de desarrollo **

## Production Dependencies

1. npm install express
2. npm install jsonwebtoken
3. npm install bcrypt
4. npm install @prisma/client para que se levante después en el servidor
5. npm install dotenv
6. npm install typescript

** Iniciar Typescript **

npx tsc --init --outDir dist/ --rootDir src el outDir es el directorio donde va salir a producción, es decir donde va estar listo todo nuestro material ya listo para subir va ser dist/

1. variables de entorno
2. app.ts
3. server.ts
4. routes/authRoutes.ts
5. Controllers, pero antes necesitamos crear el módelo del ususario porque prisma y typescript necesitan de un módelo. Modelo de usuario para typescript, modelo de JWT para typescript y el módelo de usuario para prisma
6. controllers/authController.ts
7. services/password.service.ts
8. services/auth.service.ts
9. docker-compose.yml

** Levantar Prisma y docker con posgres **
1. npx prisma init
2. npx prisma generate y el arroja un modelo recomendado, lo creamos en schema.prisma y ejecutamos nuevamente el comando
3. docker-compose up -d
4. npx prisma migrate dev
5. probamos en postman
6. manejo de errores en authController