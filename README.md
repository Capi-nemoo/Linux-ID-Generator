# Linux ID Generator
This project generates custom Linux ID cards with chosen styles and distribution vibes.

## Frameworks & Technologies

We will use the following frameworks and technologies in this project:

- HTML5, CSS3, JavaScript (Vanilla) for the frontend
- [DiceBear Avatars API](https://avatars.dicebear.com/) for avatar generation
- Python (for backend logic, CLI, and potential web server)
- (Optional) Flask or FastAPI for the backend web API
- (Optional) Node.js/Express for alternative backend (if needed)

_This list may expand as the project evolves._

```bash
linux-id-generator/
├── bin/                      # Scripts ejecutables
│   ├── start.sh              # Script para iniciar el servidor
│   └── generate_id.sh        # Script para generar una ID desde la línea de comandos
├── etc/                      # Configuración estática o plantillas
│   ├── nginx.conf            # Configuración de Nginx (si aplica)
│   └── config.yaml           # Configuración del generador
├── lib/                      # Lógica del backend y librerías
│   ├── generate_id.py        # Lógica principal para generar IDs
│   └── render_html.py        # Función para renderizar HTML dinámico
├── share/                    # Archivos estáticos compartidos
│   ├── static/
│   │   ├── css/              # Estilos del sitio
│   │   │   ├── main.css      # Estilos principales
│   │   │   └── distrowatch-theme.css
│   │   ├── images/           # Logos, stickers, etc.
│   │   │   ├── logos/
│   │   │   ├── stickers/
│   │   │   └── background.jpg
│   │   └── icons/            # Iconos varios
│   └── templates/            # Plantillas HTML
│       ├── base.html         # Estructura básica HTML
│       ├── index.html        # Página principal
│       ├── about.html        # Página "About"
│       ├── generator.html    # Página del generador de IDs
│       └── manifiestos.html  # Página "Manifiestos"
├── tests/                    # Pruebas del proyecto
│   ├── lib/
│   │   └── test_generate_id.py
│   └── share/
│       └── test_templates.py
├── var/                      # Archivos generados dinámicamente
│   ├── logs/                 # Logs de la aplicación
│   │   └── app.log
│   ├── cache/                # Archivos temporales
│   └── ids/                  # IDs generadas
├── .env                      # Variables de entorno
├── .gitignore                # Ignorar archivos innecesarios en Git
├── LICENSE                   # Licencia del proyecto
├── README.md                 # Documentación del proyecto
└── requirements.txt          # Dependencias de Python (si usas Flask o similares)

## Project Structure (2025 Refresh)

The new main web application is located in the `public/` directory at the root of the repository. The structure is as follows:

```
Linux-ID-Generator/
├── public/
│   ├── index.html         # Main landing page
│   ├── styles/
│   │   └── main.css       # Main stylesheet
│   ├── scripts/
│   │   └── main.js        # Main JavaScript logic
│   └── assets/            # Static assets (images, fonts, etc.)
├── deprecated/            # Old version (legacy)
├── README.md
└── ...
```

### Main Page
- Open `public/index.html` in your browser to view the Linux ID Generator main page.
- The page features a button to generate a sample Linux-style ID (logic is currently a placeholder).

---
