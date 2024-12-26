# Linux ID Generator
This project generates custom Linux ID cards with chosen styles and distribution vibes.

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
```
