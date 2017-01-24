Event Registration System :- 

Stack Used: MEAN (MongoDb, Express, AngularJs, NodeJs)
How to setup the application :-

1. Setup MongoDb instance :-
    run >> mongod.exe --dbpath "c:\data" in one cmd prompt from bin dir
    run >> mongo in another cmd prompt from bin dir
    
    create user database with following command 
        - use user
    
    Your mongodb instance is ready for connections

2. From main folder run following command 
    - npm install (it will install all the required dependencies using package.json)
    
    now using cmd run command 
    - npm start
    
    Now your application is up and running
    Open your browser(Chrome or Mozilla) and type in following address in address bar:-
    - localhost:3000    