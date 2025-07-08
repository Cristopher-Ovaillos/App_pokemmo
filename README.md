# 🎮 Aplicación Pokemmo

Una aplicación móvil para gestionar equipos Pokémon desarrollada con React Native, Node.js, Express y MySQL.

<img src="https://i.postimg.cc/bwrRktvx/Screenshot-20250707-213408.png" width="300" alt="Captura de la app"/>



## 🛠️ Tecnologías Utilizadas

<div align="center">

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)

</div>

## 📁 Estructura del Proyecto

```
Aplicacion_Movil/
├── app-pokemmo/          # Aplicación React Native
├── backend/              # Servidor Node.js + Express
│   ├── config/
│   ├── controllers/
│   ├── DB/              # Archivos SQL de la base de datos
│   ├── models/
│   ├── routes/
│   ├── script/
│   ├── utils/
│   └── server.js
└── README.md
```

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (v14 o superior)
- **npm** (viene con Node.js)
- **MySQL** (v8.0 o superior)
- **MySQL Workbench** (para gestionar la base de datos)
- **Expo CLI** (se instalará automáticamente)

## 🚀 Instalación y Configuración

### 1. 📥 Clonar el Repositorio

```bash
git clone https://github.com/Cristopher-Ovaillos/App_pokemmo.git
cd Aplicacion_Movil
```

### 2. 🗄️ Configurar Base de Datos MySQL

#### Paso 2.1: Crear la Base de Datos
1. Abre **MySQL Workbench**
2. Conéctate a tu servidor MySQL local
3. Crea una nueva base de datos:
```sql
CREATE DATABASE pokedex;
USE pokedex;
```

#### Paso 2.2: Importar los Archivos SQL
En MySQL Workbench, importa los siguientes archivos (cd .\backend\DB\) en **este orden específico**:

```
backend/DB/pokedex_users.sql
backend/DB/pokedex_pokemons.sql
backend/DB/pokedex_moves.sql
backend/DB/pokedex_natures.sql
backend/DB/pokedex_teams.sql
backend/DB/pokedex_team_pokemons.sql
backend/DB/pokedex_pokemon_moves.sql
backend/DB/pokedex_team_pokemon_moves.sql
backend/DB/sys_routines.sql
backend/DB/sys_sys_config.sql
```



### 3. ⚙️ Configurar Backend

#### Paso 3.1: Instalar Dependencias
```bash
cd backend
npm install
```

#### Paso 3.2: Configurar Variables de Entorno
Edita el archivo `.env` en la carpeta `backend`:
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=tu_password_mysql
DB_NAME=pokedex
PORT=3000
```

#### Paso 3.3: Iniciar el Servidor
```bash
node server.js
```

✅ **El servidor debería estar ejecutándose en:** `http://localhost:3000`

### 4. 📱 Configurar Aplicación React Native

#### Paso 4.1: Instalar Dependencias
```bash
cd ../app-pokemmo
npm install
```

#### Paso 4.2: Instalar Expo CLI (si no lo tienes)
```bash
npm install -g @expo/cli
```

#### Paso 4.3: Iniciar la Aplicación
```bash
npm run start
```

✅ **Esto abrirá Expo Developer Tools en tu navegador**

### 5. 📲 Ejecutar en Dispositivo

#### Opción A: Simulador/Emulador
- **iOS**: Presiona `i` en la terminal para abrir el simulador iOS
- **Android**: Presiona `a` en la terminal para abrir el emulador Android

#### Opción B: Dispositivo Físico
1. Instala **Expo Go** desde:
   - 📱 [App Store (iOS)](https://apps.apple.com/app/expo-go/id982107779)
   - 📱 [Google Play (Android)](https://play.google.com/store/apps/details?id=host.exp.exponent)

2. Escanea el código QR que aparece en:
   - Terminal
   - Expo Developer Tools
   - Metro bundler

## 🔧 Comandos Útiles

### Backend
```bash
# Iniciar servidor
cd backend
node server.js

# Iniciar con nodemon (desarrollo)
npm run dev
```

### Frontend
   - Cambiar IP con ayuda de CMD "ipconfig"
```bash
# Iniciar aplicación
cd app-pokemmo
npm run start

# Limpiar caché
expo start --clear

# Construir para Android
expo build:android

# Construir para iOS
expo build:ios
```

## 🐛 Solución de Problemas

### Problema: Error de conexión a MySQL
- ✅ Verifica que MySQL esté ejecutándose
- ✅ Confirma las credenciales en el archivo `.env`
- ✅ Asegúrate de que el puerto 3306 esté disponible

### Problema: Error en npm install
- ✅ Elimina `node_modules` y ejecuta `npm install` nuevamente
- ✅ Verifica la versión de Node.js

### Problema: Expo no inicia
- ✅ Ejecuta `expo start --clear` para limpiar caché
- ✅ Verifica que el puerto 19000 esté disponible

## 📝 Notas Importantes

- 🔄 **Orden de inicio**: Siempre inicia primero el backend, luego el frontend
- 🌐 **Red**: Asegúrate de que tu dispositivo móvil esté en la misma red WiFi
- 🔒 **Seguridad**: No subas el archivo `.env` al repositorio
- 📊 **Base de datos**: Los archivos SQL deben importarse en el orden especificado

