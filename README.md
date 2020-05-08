# APPLIED-PROJECT-AND-MINOR-DISSERTATION

## Project Details
----------------------------------------------
#### Course : BSc (Hons) in Software Development
----------------------------------------------
#### Module : Applied Project and Minor Dissertation
----------------------------------------------
#### College : Galway-Mayo Institute of Technology
----------------------------------------------
#### Students :            James Nelly & Brendan Toolan
----------------------------------------------
#### Project supervisors : Brian McGinley & Mark Campbell
----------------------------------------------
#### Module supervisor :   John Healy
----------------------------------------------
#### Project Title :       Driver-Booking
----------------------------------------------

## Overview 
This repository conatins the documentation and the code for our 4th year module of applied project and minor dissertation. 
The aim of this project was to develop a website where the user could book there there driving lesson with an instructor of their choice
they have the option to cancel their bookings and update them if needed. The user can also make an acoout on the website abd login also with the details they provided.
the reason we designed this website was because there is no platform at the moment like this in irealnd where you could book your lesson's.
This application was designed in the angular framework, Node.js and the database used was MySQL. Once the project was 
developed the node.js server and mySQL database were deployed onto an AWS instance.
<br />

## Video Demo
<br />


## Technologies
<br />

### Angular Framework

Angular is a web development platform built in TypeScript that provides developers with robust tools for creating the client 
side of web applications. Released in 2010 and formerly known as AngularJS, 
Angular is a JavaScript framework for building single-page applications.

![angular Logo](/images/angular.png)

<br />

### Node.js

Node.js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications.Node.js 
uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, 
perfect for data-intensive real-time applications that run across distributed devices.

![node.js Logo](/images/node.png)

<br />

### MySQL

MySQL is a relational database management system based on SQL – Structured Query Language. 
The application is used for a wide range of purposes, including data warehousing, e-commerce, and logging applications. 
The most common use for mySQL however, is for the purpose of a web database

![mysql Logo](/images/mysql.png)

<br />

### AWS cloud
Cloud computing is the on-demand delivery of compute power, database storage, applications, and other IT 
resources through a cloud services platform via the Internet with pay-as-you-go pricing.

![aws Logo](/images/aws.png)




## Cloning this repository

### Installation Guide

1. The first thing you need do is install Node.js
https://nodejs.org/en/download/

2. Follow all the instructions given by developers to run it on your machine.

3. Once it has been installed, open your command prompt and run this command “npm --version”. 
This command will check the version of node.js  you have downloaded

4. The thing you need to download is the angular CLI

5. To install the angular cli you must follow you must open your command prompt and enter this command  “npm install -g @angular/cli”

6. To check if it installed correctly run this in your command prompt  “ng --version”

7. You will next have to clone the repository from github but first you must get git bash  and download it on your machine this is the link to it
https://gitforwindows.org/

8. Once that is downloaded is complete you will use git bash to clone the repository into a new folder this command will clone it for you in git bash 
“git clone https://github.com/BrendanToolan/APPLIED-PROJECT-AND-MINOR-DISSERTATION.git”

9. Next you will need to cd into the “DriverBooking” where you placed the cloned repository. 
You will need to enter this command to install some dependencies “npm install --save-dev @angular-devkit/build-angular”

10. Once that is done you will then be able to compile the angular project and enter this command to compile it “ng serve --open”.







