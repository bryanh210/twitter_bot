const Twit = require('twit');
const Config = require('./config');
const T = new Twit(Config);
var fs = require('fs'),
    path = require('path');

console.log('Ze bot iz starting')

// let params = {
//   // query term
//   q: 'tomato',
//   count: 2
// }
//
// let gotData = function(err, data, response) {
//   let tweets = data.statuses;
//   tweets.forEach((tweet) =>{
//     console.log(tweet.text)
//   })
//
// }
//
//
// //searching on twitter by hashtag (tomato)
// T.get('search/tweets', params, gotData);

//20 seconds

// the first time it runs, then it wait 20 sec

//setting up a User stream
let stream = T.stream('user');

// anytime someone follows me
stream.on('follow', function(eventMsg){
  console.log("follow event");
  let name = eventMsg.source.name;
  let screenName = eventMsg.source.screen_name;
  tweetIt(`Hello ${screenName}, thank you for following me. You look like a tomato`);
});


// tweetIt();
//
// setInterval(tweetIt, 10000);


// function tweetIt(text){
//
//   function random_from_array(images){
//   return images[Math.floor(Math.random() * images.length)];
// }
//
// // upload image
//   function upload_random_image(images){
//   console.log('Opening an image...');
//   var image_path = path.join(__dirname, '/images/' + random_from_array(images)),
//       b64content = fs.readFileSync(image_path, { encoding: 'base64' });
//
//   console.log('Uploading an image...');
//
//   T.post('media/upload', { media_data: b64content }, function (err, data, response) {
//     if (err){
//       console.log('ERROR:');
//       console.log(err);
//     }
//     else{
//       console.log('Image uploaded!');
//       console.log('Now tweeting it...');
//
//       T.post('statuses/update', {
//         status: text,
//         // media_ids: new Array(data.media_id_string)
//         media_ids: [data.media_id_string]
//       },
//         function(err, data, response) {
//           if (err){
//             console.log('ERROR:');
//             console.log(err);
//           }
//           else{
//             console.log('Posted an image!');
//           }
//         }
//       );
//     }
//   });
// }
//
//
// //readdir so that you will read the FOLDER. readfile will only read a FILE
// fs.readdir(__dirname + '/images', function(err, files) {
//   if (err){
//     console.log(err);
//   }
//   else{
//     var images = [];
//     files.forEach(function(f) {
//       images.push(f);
//     });
//
//     setInterval(function(){
//       // here it wraps the upload_random_images in setInterval
//       upload_random_image(images);
//     }, 10000);
//   }
// });
//
// }




stream.on('tweet', tweetEvent);

function tweetEvent(eventMsg){

// this is to extract the request as JSON so I don't have
// to read through the documentation
//null = including everything
// 2= number of white space at each word
  let json = JSON.stringify(eventMsg,null, 2);
  fs.writeFile('tweet.json', json)


let replyto = eventMsg.in_reply_to_screen_name;
let text = eventMsg.text;
// who the tweet is from
let user_name = eventMsg.user.screen_name;

console.log(replyto + ' ' + from)

if(replyto === 'bryantuong02'){
  let newTweet = ` @ ${screenName}, you\'re a dork, never been a sport`;
  tweetIt(newTweet);
}

  console.log('Follow event!');
  let name = eventMsg.source.name;
  let screenName = eventMsg.source.screenName;
  tweetIt('.@'+ screenName +' you\'re a dork')
}




//   function processing(){
//     let fileName = './images/donald1.jpeg';
//     let params ={
//         encoding: 'base64'
//     }
//     //process of reading file
//     var b64 = fs.readFileSync(filename, params)
//   }
//
//   //post media: First upload to twitter, then post it using the id associated with it on twitter
//   T.post('media/upload', {media_data: b64}, uploaded)
//
//
//   function uploaded(err, data, response){
//     // this is where I will tweet
//     let id = data.media_id_string;
//     let tweet ={
//       status: text,
//       media_ids: [id]
//     }
//   }
//
//    T.post('statuses/update', tweet, tweeted);
//
//      let tweeted = function(err,data,response){
//        if(err){
//          console.log(err);
//        }else{
//          console.log("Ze bot iz werking now")
//        }
//
//      }
// }

// function tweetIt(text){
//   let random = Math.floor(Math.random() * 100);
//
//
//   let tweet = {
//     status: text
//   }
//
//   //callback used to catch error
//   let tweeted = function(err,data,response){
//     if(err){
//       console.log(err);
//     }else{
//       console.log("Ze bot iz werking now")
//     }
//
//   }
//
//   T.post('statuses/update', tweet, tweeted);
//
// }
