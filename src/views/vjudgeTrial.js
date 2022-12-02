// import Vjudge from 'vjudge-api';
var Vjudge = require('vjudge-api');
// console.log( Vjudge.verdicts() ); 
// const options = {
//     start: 0,           
//     length: 1,          
//     sortDir: 'desc',    
//     sortCol: 5,         
//     OJId: 'Hackerrank',    
//     probNum: 'si-string-modulo',    
//     title: '',          
//     source: '',         
//     category: ''        
// }
const options = {
    start: 0,               
    length: 1,              
    un: 'rahathossain690',  
    OJId: 'All',            
    probNum: '',            
    res: 1,                 
    language: '',           
    onlyFollowee: 'true'
}
Vjudge.status(options).then(result => console.log(result)).catch(err => console.error(err))