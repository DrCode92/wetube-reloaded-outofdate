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
1. GET Requests (1)
2. GET Requests (2)
3. Responses
4. Recap
5. Middlewares (1)
6. Middlewares (2)
7. Setup Recap
8. Servers Recap
9. Controllers Recap
10. Middleware Recap
11. External Middlewares
