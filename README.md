# How to reproduce

Execute npm run start

When server will boot, go to the application and open dev tools.
In console log you'll find error:

main.js:30 Uncaught TypeError: Cannot read properties of undefined (reading 'STATIC_FIELD')

-----

For some reason new Angular version cannot deal 
with turned off aot and static fields inside classes.
You can check it inside: AppComponent
