Robo Vacuum Web Application

IoT-enabled smart robotic vacuum control system with real-time monitoring, cleaning automation, and device telemetry visualization.

This project demonstrates full stack system design integrating:

Angular frontend
Spring Boot backend
MQTT-based IoT communication
Real-time device telemetry
interactive floor map visualization

System Architecture (End-to-End)

User (Browser)
        │
        ▼
Angular Frontend (UI Layer)
        │
        │ REST API (HTTPS)
        ▼
Spring Boot Backend (Application Layer)
        │
        │ MQTT / WebSocket
        ▼
IoT Device (ESP32 / Raspberry Pi)
        │
        ▼
Sensors + Motors + Controllers


1. Frontend (Angular)

Responsible for:

authentication UI
floor map visualization
cleaning mode controls
real-time device status
manual navigation control

Communicates with backend via:

REST API
WebSocket
MQTT over WebSocket

2. Backend (Spring Boot)

Responsible for:

user authentication (JWT)
device management
telemetry processing
command routing
API layer for frontend

Protocols:

HTTP REST
WebSocket
MQTT broker integration

3. IoT Device Layer

Hardware components:

motor controller
ultrasonic sensors
battery monitoring unit
water tank sensor
dustbin sensor

Data Flow
Authentication Flow
User Login
    │
    ▼
Angular Auth Module
    │
    ▼
Spring Boot Auth API
    │
    ▼
JWT Token Issued
    │
    ▼
Stored in Browser

Device Control Flow:

User clicks START
      │
      ▼
Angular sends command
POST /device/start
      │
      ▼
Backend publishes MQTT message
      │
      ▼
Robot receives command
      │
      ▼
Robot starts cleaning


Telemetry Flow:

Robot sends sensor data
      │
      ▼
MQTT Broker
      │
      ▼
Spring Boot subscribes
      │
      ▼
WebSocket pushes update
      │
      ▼
Angular updates UI in realtime


<Frontend Folder Structure: />

frontend/
│
├── src/
│   ├── app/
│
│   ├── core/
│   │   ├── guards/
│   │   │      auth.guard.ts
│   │   │      device.guard.ts
│   │   │
│   │   ├── interceptors/
│   │   │      auth.interceptor.ts
│   │   │      error.interceptor.ts
│   │   │
│   │   ├── services/
│   │   │      auth.service.ts
│   │   │      device.service.ts
│   │   │      mqtt.service.ts
│   │   │      websocket.service.ts
│   │   │      storage.service.ts
│   │   │
│   │   └── core.module.ts
│
│   ├── shared/
│   │   ├── components/
│   │   │      loader/
│   │   │      status-card/
│   │   │      progress-bar/
│   │   │      toggle-button/
│   │   │      icon-button/
│   │   │
│   │   ├── models/
│   │   │      user.model.ts
│   │   │      device.model.ts
│   │   │      cleaning-mode.model.ts
│   │   │
│   │   └── shared.module.ts
│
│   ├── features/
│
│   │   ├── auth/
│   │   │   ├── pages/
│   │   │   │      login/
│   │   │   │      signup/
│   │   │   │      verify-email/
│   │   │
│   │   │   ├── components/
│   │   │   │      auth-form/
│   │   │   │      email-verification/
│   │   │
│   │   │   ├── auth-routing.module.ts
│   │   │   └── auth.module.ts
│
│   │   ├── dashboard/
│   │   │   ├── pages/
│   │   │   │      home/
│   │   │   │      device-map/
│   │   │
│   │   │   ├── components/
│   │   │   │      cleaning-map/
│   │   │   │      status-summary/
│   │   │   │      start-stop-control/
│   │   │   │      tank-status/
│   │   │
│   │   │   ├── dashboard-routing.module.ts
│   │   │   └── dashboard.module.ts
│
│   │   ├── control/
│   │   │   ├── components/
│   │   │   │      cleaning-mode-selector/
│   │   │   │      power-mode-selector/
│   │   │   │      manual-control-pad/
│   │   │   │      movement-pattern-selector/
│   │   │
│   │   │   ├── control.module.ts
│
│   │   ├── device/
│   │   │   ├── pages/
│   │   │   │      device-details/
│   │   │
│   │   │   ├── components/
│   │   │   │      battery-indicator/
│   │   │   │      water-level-indicator/
│   │   │   │      dustbin-indicator/
│   │   │
│   │   │   └── device.module.ts
│
│   ├── layout/
│   │   ├── main-layout/
│   │   ├── auth-layout/
│   │   └── layout.module.ts
│
│   ├── app-routing.module.ts
│   └── app.module.ts
│
├── assets/
│   ├── icons/
│   ├── images/
│   └── svg-maps/
│
└── environments/
    ├── environment.ts
    └── environment.prod.ts


Module Responsibilities
core module

singleton services

examples:

authentication service
MQTT service
API communication
route guards
interceptors
shared module

reusable UI components

examples:

buttons
cards
progress bars
loaders
icons
auth module

handles:

login
signup
email verification
session management
dashboard module

main robot interface

features:

cleaning map
status cards
start stop control
tank level display
control module

robot behavior configuration

features:

mop / vacuum mode
power intensity selection
movement patterns
manual navigation
device module

device-specific telemetry

features:

battery level
tank level
cleaning history

layout module:

page structure

layouts:
auth layout
main dashboard layout

Technologies Used:

Frontend--
Angular
RxJS
TypeScript
Tailwind CSS
MQTT over WebSocket

Backend--
Spring Boot
Spring Security
JWT authentication
WebSocket
MQTT client


IoT--
ESP32
ultrasonic sensors
motor drivers
battery monitoring sensors

Environment Configuration
export const environment = {

 apiUrl: "http://localhost:8080/api",

 mqttBroker: "ws://localhost:9001",

 websocketUrl: "ws://localhost:8080/ws"

}

Key Features

authentication:

login
signup
jwt session
route protection

robot control:

start cleaning
stop cleaning
change mode
adjust power

realtime telemetry:

battery level
water tank level
dustbin level
current room

manual navigation:

directional controls
zigzag cleaning
spiral cleaning

##Future Improvements
AI obstacle detection
room segmentation using ML
cleaning schedule automation
multi device support
voice control integration
analytics dashboard