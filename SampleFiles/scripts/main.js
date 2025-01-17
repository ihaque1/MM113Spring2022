const StarTrekTweet = {
    name: 'Star Trek',
    handle: '@StarTrek',
    text: 'Welcome to the OFFICIAL Star Trek Twitter Page!'
}

const links = ['https://twitter.com/StarTrek', 'https://twitter.com/StarTrek', 'https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/26/1530003551-star-trek.jpg']

const modifyText = () => {
  //Change the text of message2 to be the message of the StarTrekTweet object
  //Change the text of user2 to be the handle from the StarTrekTweet object
  //Changes the text of message 2 class to be the handle from the StarTrekTweet object
  // YOUR CODE BELOW THIS LINE.
 
document.getElementById("message2").innerHTML = StarTrekTweet.text;
document.getElementById("link2").innerHTML = StarTrekTweet.name;
document.getElementById("user2").innerHTML = StarTrekTweet.handle;

}

const changeLinkAndImageAttributes = function() {
  //Set the href attribute for link1 to point to the first element in the links array
  //Sets the href attribute for link2 to point to the second element in the links array
  //Sets the src attribute for the Ohlone image to point to the third element in the links array
  // YOUR CODE BELOW THIS LINE.
  document.getElementById("link1").href = links[0];
  document.getElementById("link2").href = links[1];
  document.getElementById("Ohlone").src = links[2];


}

const changeClassAttribute = () => {
  //Update the changeClassAttribute
  //function so that it replaces the “tweet” class with the “tweet-pink” class for the two tweets.
  // change id="tweet1" class="tweet" to id="tweet1" class="tweet-pink"
  // YOUR CODE BELOW THIS LINE
  document.getElementById("tweet1").classList.replace("tweet","tweet-pink");
  document.getElementById("tweet2").classList.replace("tweet","tweet-pink");
  
}

const appendElements = () => {
  //A. An "a" element (a link) to the bottom of tweet1 that links to Ohlone College
  //(http://www.ohlone.edu) and has a link text that say "Intro to JavaScript."
  //B. An "img" element (an image) to the bottom of tweet1 that
  //points to an image of your choice,symbolizing something about the course.
  //id="tweet1"
  // YOUR CODE BELOW THIS LINE
const newLink = document.createElement ('a');
newLink.innerHTML = "Intro to JavaScript.";
// newLink.src = 'images/Fascinating.jpg';
newLink.setAttribute('href',"http://www.ohlone.edu");
const imageElement = document.createElement('img');
imageElement.src = "images/Fascinating.jpg";
const breakElement = document.createElement('br');

document.getElementById("tweet1").appendChild(newLink);
document.getElementById("tweet1").appendChild(breakElement);
document.getElementById("tweet1").appendChild(imageElement);
    
}
