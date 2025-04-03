# Google Gemma for Web

A web-based implementation of Google's Gemma language model using MediaPipe Tasks for GenAI.

## Overview

This project demonstrates how to run Google's Gemma language model directly in the browser using WebAssembly. It provides a simple interface for text generation using the Gemma 2B model.

## Features

- Browser-based inference using WebAssembly
- No server required - runs completely client-side
- Simple text input interface
- Real-time text generation

## Prerequisites

- Modern web browser with WebAssembly support
- Kaggle account (for model download)

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/atomostechhq/google-gemma-for-web-exp.git
   cd google-gemma-for-web-exp
   ```

2. Download the model:
   - Follow the instructions in `assets/instructions.txt` to:
     - Set up Kaggle authentication
     - Download the model file
     - Place it in the correct location

3. Serve the application:
   - Use any HTTP server to serve the files locally
   - For example, with Python:
     ```bash
     python3 -m http.server 8000
     ```
   - Or with Node.js:
     ```bash
     npx http-server
     ```

4. Access the application:
   - Open your browser and navigate to `http://localhost:8000`

## Usage

1. Enter your text prompt in the input field
2. Click "Get Response" to generate text
3. The model will stream its response in real-time

## Technical Details

- Uses MediaPipe Tasks for GenAI
- Implements the Gemma 2B model quantized to INT8
- Runs inference directly in the browser using WebAssembly

## Limitations

- Initial model loading may take some time depending on your internet connection
- Performance depends on your device's capabilities

## License

This project uses Google's Gemma model which is subject to its own license terms. Please refer to the Gemma documentation for details.