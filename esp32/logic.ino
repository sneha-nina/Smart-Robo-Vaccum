// #include <WiFi.h>

// const char* ssid = "RoboVacuum";
// const char* password = "12345678";

// void setup() {

// Serial.begin(115200);

// WiFi.softAP(ssid,password);

// Serial.println("Access Point Started");

// Serial.print("ESP32 IP Address: ");
// Serial.println(WiFi.softAPIP());

// Serial.print("Clients connected: ");
// Serial.println(WiFi.softAPgetStationNum());

// }

// void loop() {

// }


#include <WiFi.h>
#include <AsyncTCP.h>
#include <ESPAsyncWebServer.h>

const char *ssid = "RoboVacuum";
const char *password = "12345678";

AsyncWebServer server(80);

void setup() {

  Serial.begin(115200);

  WiFi.softAP(ssid, password);

  Serial.println("Access Point Started");
  Serial.println(WiFi.softAPIP());

server.on("/", HTTP_GET, [](AsyncWebServerRequest *request){
request->send(200,"text/html",R"rawliteral(

<!DOCTYPE html>
<html>
<head>
<meta name="viewport"
content="width=device-width,initial-scale=1">

<style>

body{
font-family:Arial;
background:#eef3f7;
text-align:center;
padding:20px;
}

.panel{
background:white;
padding:25px;
border-radius:20px;
max-width:420px;
margin:auto;
box-shadow:0 4px 12px rgba(0,0,0,.15);
}

h1{
margin-bottom:20px;
}

.status{
background:#f4f8fb;
padding:18px;
border-radius:15px;
margin-bottom:25px;
}

button{
width:120px;
height:55px;
margin:8px;
font-size:16px;
border:none;
border-radius:14px;
}

.big{
width:260px;
height:60px;
font-size:18px;
}

</style>

</head>
<body>

<div class="panel">

<h1>Smart Robo Vacuum</h1>

<div class="status">
Battery: 82% <br><br>
Mode: Auto <br><br>
Obstacle: Clear
</div>


<h3>Navigation</h3>

<button onclick="location.href='/forward'">
Forward
</button>

<br>

<button onclick="location.href='/left'">
Left
</button>

<button onclick="location.href='/stop'">
Stop
</button>

<button onclick="location.href='/right'">
Right
</button>


<h3>Cleaning</h3>

<button class="big"
onclick="location.href='/autoon'">
Start Cleaning
</button>

<br>

<button class="big"
onclick="location.href='/dock'">
Return To Dock
</button>

<br>

<button
onclick="location.href='/vacuumon'">
Vacuum ON
</button>

<button
onclick="location.href='/vacuumoff'">
Vacuum OFF
</button>

</div>

</body>
</html>

)rawliteral");

});

    server.on("/forward", HTTP_GET,
              [](AsyncWebServerRequest *request) {

  // Serial.println("Moving Forward");

#define IN1 26
#define IN2 27
                void moveForward() {

                  digitalWrite(IN1, HIGH);
                  digitalWrite(IN2, LOW);
                }

                request->send(200, "text/plain",
                              "Forward Command Sent");
              });

    server.on("/left", HTTP_GET,
              [](AsyncWebServerRequest *request) {
                Serial.println("Turning Left");

                request->send(200, "text/plain",
                              "Left Command Sent");
              });

    server.on("/right", HTTP_GET,
              [](AsyncWebServerRequest *request) {
                Serial.println("Turning Right");

                request->send(200, "text/plain",
                              "Right Command Sent");
              });

    server.on("/stop", HTTP_GET,
              [](AsyncWebServerRequest *request) {
                Serial.println("Robot Stopped");

                request->send(200, "text/plain",
                              "Stop Command Sent");
              });
server.on("/vacuumon", HTTP_GET,
          [](AsyncWebServerRequest *request) {
            Serial.println("Vacuum ON");

            request->send(200, "text/plain",
                          "Vacuum Started");
          });

server.on("/vacuumoff", HTTP_GET,
          [](AsyncWebServerRequest *request) {
            Serial.println("Vacuum OFF");

            request->send(200, "text/plain",
                          "Vacuum Stopped");
          });

server.on("/autoon", HTTP_GET,
          [](AsyncWebServerRequest *request) {
            Serial.println("Auto Cleaning Enabled");

            request->send(200, "text/plain",
                          "Auto Mode On");
          });

server.on("/autooff", HTTP_GET,
          [](AsyncWebServerRequest *request) {
            Serial.println("Auto Cleaning Disabled");

            request->send(200, "text/plain",
                          "Auto Mode Off");
          });

 server.on("/dock", HTTP_GET,
          [](AsyncWebServerRequest *request) {
            Serial.println("Returning To Dock");

            request->send(200,
                          "text/plain",
                          "Docking Started");
          });

    server.begin();

    Serial.println("Web Server Started");
}

void loop() {

}
