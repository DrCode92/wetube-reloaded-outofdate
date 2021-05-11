# Wetube Reloaded

<!--* global router  -->
/ -> Home
/join
/login
/search
<!--* users router -->
/users/edit
/users/delete
<!--* videos router -->
/videos/watch
/videos/edit
/videos/delete
/videos/comments
/videos/comments/delete

# 14. SETUP
0. Your First NodeJS Project
1. Installing Express
   1. npm install express
2. Understanding Dependencies
   1. npm install
   2. .gitignore
   3. dependencies vs devDependencies
      1. dependencies : 연료
      2. devDependencies : 연료첨가제
         1. --save-dev
3. The Tower of Babel
   1. npm install --save-dev @babel/core
   2. touch bable.config.json
      1. {
          "presets": ["@babel/preset-env"]
         }
      2. preset-env
         1. 최신 자바스크립트를 쓸 수 있는 플러그인   
   3. npm install @babel/preset-env --save-dev
4. Nodemon
   1. npm install @babel/core @babel/node --save-dev
   2. npm install nodemon --save-dev
   3. package.json
      1. "scripts": {
            "dev": "nodemon --exec babel-node index.js"
         }

# 15. INTRODUCTION TO EXPRESS
0. Your First Server
1. GET Requests part ONE
2. GET Requests part TWO
   1. app.get("/", function)
3. Responses
   1. const handleHome = (req, res) =>
4. Recap
   1. express API - https://expressjs.com/ko/
      1. application
      2. request
      3. response
5. Middlewares part ONE
   1. const controller = (req, res, next) => {
   2. console.log("I'm in the middle.");
   3. next();
   4. }
   5. app.get("/", controller, handleHome);
6. Middlewares part TWO
   1. app.use(controller);
7. Setup Recap
   1. package.json
      1. scripts
   2. dependencies & devDependencies
8. Servers Recap
   1. request
   2. express
      1. import express
      2. create express application
      3. create listening server your request
   3. GET Method
      1. 서버가 response 하는 것을 받기만 함
      2. app.get()
         1. app.get(route, handler)
9.  Controllers Recap
    1.  controller = (req, res)
10. Middleware Recap
    1.  middleware = (req, res, next)
11. External Middlewares
    1.  morgan (HTTP request logger middleware for node.js)
        1.  npm install morgan
        2.  morgan 함수를 호출하면 설정한 대로 middleware를 return 해줌 

# 16. ROUTERS
0. What are Routers?
1. Making Our Routers
2. Cleaning the Code
3. Exports
4. Router Recap
5. Architecture Recap
6. Planning Routes
7. URL Parameters part ONE
8. URL Parameters part TWO 