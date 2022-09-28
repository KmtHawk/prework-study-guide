var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
var randomTopic = topics [Math.floor(Math.random()*topics.length)];
function listTopics() {
    for(var x=0; x<topics.length; x++) {console.log(topics[x]);}}
function selectTopic() {
    if (randomTopic=== 'HTML') {console.log("Lets's study HTML!");}
else if (randomTopic=== 'CSS') { console.log("Lets study CSS!");}
else if (randomTopic=== 'Git') { console.log("Lets study GIT!");}
else if (randomTopic=== 'JavaScript') { console.log("Lets study JacaScript!");}
else { console.log('Please try again!');}}
console.log('Here are the topics we learned through Prework:');
listTopics()
console.log('Which topic should we study first?');
selectTopic()