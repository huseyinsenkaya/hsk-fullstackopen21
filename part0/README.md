# 0.4: new note

Create a similar diagram depicting the situation where the user creates a new note on page https://studies.cs.helsinki.fi/exampleapp/notes by writing something into the text field and clicking the submit button.

```
browser->server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note

note over browser:
post the data to /new_note by submit 
and redirect to /notes page
end note

browser->server: https://studies.cs.helsinki.fi/exampleapp/notes
server-->browser: HTML-code
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
server-->browser: main.css
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js
server-->browser: main.js
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
server-->browser: [{ content: "HTML is easy", date: "2019-05-23" }, ...]
```
![part0-1](https://user-images.githubusercontent.com/47068465/144069359-e1af5ebc-3a7b-4b9f-b93e-5d700a7a3bd3.png)

# 0.5: Single page app

Create a diagram depicting the situation where the user goes to the single page app version of the notes app at https://studies.cs.helsinki.fi/exampleapp/spa.
```
browser->server: https://studies.cs.helsinki.fi/exampleapp/spa
server-->browser: HTML-code
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
server-->browser: main.css
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa.js
server-->browser: spa.js

note over browser:
browser starts executing js-code
that requests JSON data from server 
end note

browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
server-->browser: [{ content: "HTML is easy", date: "2019-05-23" }, ...]

note over browser:
browser executes the event handler
that renders notes to display
end note
```
![part0-2](https://user-images.githubusercontent.com/47068465/144069363-634c0ae5-cfe1-49f3-85d8-973798b37d9e.png)

# 0.6: New note

Create a diagram depicting the situation where the user creates a new note using the single page version of the app.

```
browser->server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa

note over browser:
content-type: application/json; charset=utf-8
{content: "test", date: "2021-11-30T14:41:21.027Z"}
end note

server-->browser: {"message":"note created"} Status Code: 201

note over browser:
browser executes the event handler
that renders notes to display
end note
```
![part0-3](https://user-images.githubusercontent.com/47068465/144069352-c93f224f-1272-49b0-a2ee-ce9e5e274383.png)
