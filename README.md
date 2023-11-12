## Vulnerable application

### Description
Simple react frontend application for lab2 assignment for [Advanced Web Development](https://www.fer.unizg.hr/en/course/awd) course that demonstrates Sensitive data exposure and Cross-Site Scripting vulnerabilities.

### Usage
Create .env file in root directory with following content:
```bash
REACT_APP_BACKEND_URL="http://localhost:8080/api/v1"
```
By default [spring backend](https://github.com/Theanko1412/vulnerable-application-be?tab=readme-ov-file#usage) will run on port 8080 with context path /api/v1.

Install dependencies:
```bash
npm install
```

Run application:
```bash
npm start
```

### Comments
Because react by default escapes all html tags, to demonstrate XSS vulnerability, I had to use dangerouslySetInnerHTML property on div element. This works for html style changes e.g. ```<strong style="color: red;">This is a demonstration of an XSS attack.</strong>``` but i could not make frontend execute js script, or even show its text.
Thats why when input in xss field is like ```<script>alert("XSS")</script>``` it will not be executed and only empty div will be shown.

### Vulnerabilities
Both vulnerabilities can be toggled on and off with switch in the bottom right corner of the application. What switch does is it changes the value of variable 'vulnerable' from true to false and vice versa. This is then sent to backend which changes its behavior based on this value.
Additional validation functions are added in frontend when swich is enabled.

Backend vulnerabilities can be found [here](https://github.com/Theanko1412/vulnerable-application-be?tab=readme-ov-file#vulnerabilities)