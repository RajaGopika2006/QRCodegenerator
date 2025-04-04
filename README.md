# QR Code Generator

The **QR Code Generator** is a responsive web application built using **React.js** that allows users to generate QR codes instantly from any text or URL input. This tool serves as a fast, lightweight, and reliable solution for creating shareable QR codes. Whether you're embedding links on flyers, sharing Wi-Fi credentials, or simply encoding text, this app makes it quick and simple.

This project is suitable for anyone looking to explore React fundamentals, component-based architecture, third-party library integration, and state management in a real-world application.

---



## 🧩 Overview

QR codes are widely used today for data transmission, contactless access, and quick web navigation. This application empowers users to generate and download QR codes based on their custom input, be it URLs, plain text, or any other form of string data. Built with React, the app leverages `qrcode.react` for rendering QR codes and allows direct download via the canvas API.

---



## 🚀 Features

- Generate QR codes from custom input text or URLs.
- Real-time QR code rendering.
- Download QR code as an image (PNG format).
- Clear input and regenerate on-the-fly.
- Clean, intuitive, and responsive UI.
- Lightweight and optimized performance.

---



## 🛠️ Technology Stack

| Technology       | Purpose                                      |
|------------------|----------------------------------------------|
| **React.js**     | Frontend UI framework                        |
| **JavaScript (ES6)** | Logic and interactivity               |
| **qrcode.react** | QR code rendering as SVG                    |
| **HTML5 + CSS3** | Markup and custom styles                    |
| **Canvas API**   | Enables downloading QR code images          |

---

## 📦 Installation

### Prerequisites
- Node.js (v14+)
- npm or yarn

### Steps

```bash
# Clone the repository
git clone https://github.com/RajaGopika2006/QRCodegenerator.git
cd QRCodegenerator

# Install dependencies
npm install

# Start development server
npm start

# Visit in browser
http://localhost:5173
