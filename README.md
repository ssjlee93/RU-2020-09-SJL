# randomname-2020-05-sjl-09

## Github R3ADM3 generator 
This project automatically creates a R3ADM3 file using Node.js 

## Table of Contents 

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Developments](#developments)

## Installation 
* Pull from this repo 
```
npm install 
```
* if any error occurs, npm install inquirer 

## Usage 
1. Open the directory where all the files in this repo is located in the terminal 
2. Run index.js in node

```
node index
```

![screenshot-01](/screenshot-01.PNG)

3. Answer all the questions 

![screenshot-03](/screenshot-03.PNG)

Once you asnwer all the questions, you can see your answers in the console. 

![screenshot-05](/screenshot-05.PNG)

4. You will see the r3adm3 named as your project title 

![screenshot-04](/screenshot-04.PNG)

## License

I still do not know what to do with this section so I will leave this section empty. 

## Developments
This activity needs a lot of modifications. 
1. No step-by-step input is supported. 
All of the inputs are strings. 
If someone wants to use this project and wishes to include multiple steps in installation, he or she must edit it afterwards. Manual input defeats the purpose of this project. 
This project cannot create multiple badges, cannot created multiple credits. 
I have no idea how to do this. 
2. Does not account for empty input. 
The table of contents is static. All the sections are there. If no input was entered, then the sections in r3adm3 are printed with nothing underneath. 
This project cannot delete a section when an input doesn't exist. 

In order to solve these issues, I might have to look into inquirer for multiple inputs such as checkboxes, nested questions, and JSON split method. 