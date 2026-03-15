# 🤖 Project JARVIS – AI Robotics System

## Overview
Project JARVIS is a robotics system designed to demonstrate real-time robot control, automation, and intelligent interaction through a modern web interface.

The robot is connected to a web dashboard that allows live monitoring and control using WebSocket communication, enabling instant command execution and status updates.

This project was developed for a school robotics exhibition to showcase how software, networking, and embedded hardware can work together in a real robotic system.


## Core Features

- Real-time WebSocket communication
- Live robot control dashboard
- Sensor data monitoring
- Interactive web interface
- AI-inspired command system
- Low-latency device communication

The system allows users to interact with the robot through a browser interface while receiving live telemetry data from the robot hardware.


## Live Control Panel

The robot includes a fully functional control panel built into the website.

Features include:

- Movement control
- System status monitoring
- Sensor readings
- Command execution
- Real-time updates

All communication between the robot and the interface is handled using WebSocket technology, allowing bidirectional communication without page reloads.


## System Architecture

User Interface (Web Dashboard)
        │
        │ WebSocket Connection
        ▼
Control Server / Controller
        │
        ▼
Robot Hardware
(Microcontrollers + Sensors + Motors)


## Technologies Used

Frontend
- React
- Tailwind CSS
- TypeScript

Backend / Communication
- WebSocket protocol
- Real-time data streaming

Hardware
- Microcontroller-based robotics platform
- Sensors and motor controllers

Deployment
- Vercel


## Purpose of the Project

The goal of this project is to demonstrate how modern web technologies can interact directly with robotics hardware to create responsive and intelligent robotic systems.

The project highlights:

- Robotics engineering
- Web-based robot control
- Real-time communication systems
- Human-robot interaction


## Exhibition Demonstration

During the exhibition, the system demonstrates:

- Live robot control through the web interface
- Real-time sensor updates
- Instant command execution
- Interactive user experience

Visitors can observe how commands from the dashboard are transmitted to the robot and executed immediately.


## Future Improvements

- Voice command integration
- AI decision system
- Autonomous navigation mode
- Mobile app interface
- Advanced sensor integration


## Developer

Vikhyat Gupta  
School Robotics Exhibition Project
