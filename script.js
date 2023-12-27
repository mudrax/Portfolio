const home = document.getElementById('home-div');
const project = document.getElementById('project-div');
const resume = document.getElementById('resume-div');
const contact = document.getElementById('contact-div');

const linkedin = document.getElementById('linkedin-btn');
const github = document.getElementById('github-btn');
const instagram = document.getElementById('instagram-btn');
const leetcode = document.getElementById('leetcode-btn');
const gfg = document.getElementById('gfg-btn');
const cf = document.getElementById('cf-btn');

const mudraXx = document.querySelector('.mudraX');
const fitUx = document.querySelector('.fitU');
const dallEx = document.querySelector('.dallE');
const res = document.querySelector('#resume-here');

const linkedinUrl = "https://www.linkedin.com/in/mudrax-dagar/";
const githubUrl = "https://github.com/mudrax";
const instagramUrl = "https://www.instagram.com/mudrax.dagar/";
const leetcodeUrl = "https://leetcode.com/mudraxdagar10/";
const cfUrl = "https://codeforces.com/profile/mudrax";
const gfgUrl = "https://auth.geeksforgeeks.org/user/mudraxdagarco20a876";
const mudraxUrl = "https://github.com/mudrax/MudraX-cryptoApp.git";
const fituUrl = "https://github.com/mudrax/fitU-Fitness-Application/tree/master";
const dalleUrl = "https://mudrax-dall-e.netlify.app/";
const resumeUrl = "https://docs.google.com/document/d/1NSz6iQoKM2T56bp46rO6gUUh_W3cpN7cfNJn5Lwn22k/edit";

function moveToHome(){
    console.log('home clicked');
    window.location.assign('index.html');
}

function moveToProjects(){
    console.log('projects clicked');
    window.location.assign('projects.html');
}

function moveToResume(){
    console.log('resume clicked');
    window.location.assign('resume.html');
}

function moveToContacts(){
    console.log('contacts clicked');
    window.location.assign('contacts.html');
}

function openLinkedin(){
    window.open(linkedinUrl);
}

function openInstagram(){
    window.open(instagramUrl);
}

function openGithub(){
    window.open(githubUrl);
}

function openLeetcode(){
    window.open(leetcodeUrl);
}

function openGfg(){
    window.open(gfgUrl);
}

function openCf(){
    window.open(cfUrl);
}

function openMudraX(){
    window.open(mudraxUrl);
}

function openFitU(){
    window.open(fituUrl);
}

function openDalle(){
    window.open(dalleUrl);
}

function openResume(){
    window.open(resumeUrl);
}

home.addEventListener('click' , moveToHome);
project.addEventListener('click' , moveToProjects);
resume.addEventListener('click' , moveToResume);
contact.addEventListener('click' , moveToContacts);


if(linkedin){
    linkedin.addEventListener('click' , openLinkedin);
}
if(github){
    github.addEventListener('click' , openGithub);
}

if(instagram){
    instagram.addEventListener('click' , openInstagram);    
}

if(leetcode){
    leetcode.addEventListener('click' , openLeetcode);
}

if(gfg){
    gfg.addEventListener('click' , openGfg);
}

if(cf){
    cf.addEventListener('click' , openCf);
}

if(mudraXx){
    mudraXx.addEventListener('click' , openMudraX);
}

if(fitUx){
    fitUx.addEventListener('click' , openFitU);
}

if(dallEx){
    dallEx.addEventListener('click' , openDalle);
}

if(res){
    res.addEventListener('click' , openResume);
}






