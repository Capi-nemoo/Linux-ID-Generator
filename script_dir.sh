#!/bin/bash

# Define the directory structure
directories=(
    "linux-id-generator/static/css"
    "linux-id-generator/static/images/logos"
    "linux-id-generator/static/images/stickers"
    "linux-id-generator/static/icons"
    "linux-id-generator/templates"
)

# Create the directories
echo "Creating directories..."
for dir in "${directories[@]}"; do
    mkdir -p "$dir"
    echo "Created: $dir"
done

# Create placeholder files
echo "Creating placeholder files..."
touch linux-id-generator/app.py
echo "# Flask application entry point" > linux-id-generator/app.py

touch linux-id-generator/generate_id.py
echo "# Script for ID generation logic" > linux-id-generator/generate_id.py

touch linux-id-generator/README.md
echo "# Linux ID Generator" > linux-id-generator/README.md
echo "This project generates custom Linux ID cards with chosen styles and distribution vibes." >> linux-id-generator/README.md

# Notify user
echo "Project structure created successfully!"

