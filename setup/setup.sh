#!/bin/bash
echo "Installing Tjakra..."

# Operating system detection
OS=$(uname)

if [ "$OS" == "Linux" ]; then
    BIN_NAME="tjakra-linux"
elif [ "$OS" == "Darwin" ]; then
    BIN_NAME="tjakra-macos"
else
    echo "Unsupported OS: $OS"
    exit 1
fi

# Install Tjakra
sudo cp "../build/$BIN_NAME" /usr/local/bin/tjakra
sudo chmod +x /usr/local/bin/tjakra

echo "Tjakra successfully installed for $OS"
