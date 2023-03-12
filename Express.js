const express = require('express');
const bodyParser = require("body-parser");
const cohere = require('cohere-ai'); 
const cors = require("cors");

const app = express();
cohere.init('PmvQN4RaHNy1zJvBUbns0SEZF2k2cApudvJyM7Sp');

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(bodyParser.json());

app.post('/', (req, res) => {
  console.log(req.body);
  (async () => {
    const response = await cohere.classify({
      model: 'large',
      inputs: [req.body.userResponse],
      examples: [{"label": "angry", "text": "i was disrespected insulted or humiliated"}, {"label": "angry", "text": "i experienced injustice or unfair treatment"}, {"label": "angry", "text": "my friend lied to me and deceived me about something important"}, {"label": "angry", "text": "my roommate won\'t do their chores or clean up after themselves or take responsibility for their actions"}, {"label": "angry", "text": "my code has so many bugs and i can\'t figure out why"}, {"label": "anxious", "text": "i have a new homework assignment and i don\'t know anything about the topic"}, {"label": "anxious", "text": "i have a public speaking engagement in front of a lot of people tomorrow"}, {"label": "anxious", "text": "i\'m feeling anxious and nervous and unsure and worried"}, {"label": "anxious", "text": "i\'m waiting for my aunt\'s important medical testing and diagnosis to come through"}, {"label": "anxious", "text": "i\'m worried about my job or career"}, {"label": "anxious", "text": "i have to confront my roommmate about her behaviour"}, {"label": "calm", "text": "i went for a peaceful hike and did youga and meditated this afternoon"}, {"label": "calm", "text": "i listened to calming music while working today"}, {"label": "calm", "text": "i took a long bath with candles and fancy soaps"}, {"label": "calm", "text": "i finished all of the work today and now i have free time"}, {"label": "calm", "text": "i\'m feeling calm"}, {"label": "excited", "text": "today is the last day of school before break and i\'m going on vacation"}, {"label": "excited", "text": "i achieved my new year\'s resolution about running a marathon"}, {"label": "excited", "text": "i get to see my mother for the first time in years"}, {"label": "excited", "text": "i got an offer for my dream job"}, {"label": "excited", "text": "i aced my exam"}, {"label": "happy", "text": "i had a great day today and the sun is shining"}, {"label": "happy", "text": "i got a really good grade on my assignment"}, {"label": "happy", "text": "i just received a promotion at work"}, {"label": "happy", "text": "i\'m spending the day with my loved ones doing things i enjoy"}, {"label": "happy", "text": "i received a surprise gift or thoughtful gesture from someone i care about"}, {"label": "in love", "text": "i\'m in love"}, {"label": "in love", "text": "my partner proposed to me today"}, {"label": "in love", "text": "i spent the whole day with my wife doing what we love"}, {"label": "in love", "text": "i asked a girl to be my girlfriend today"}, {"label": "in love", "text": "my girlfriend bought me flowers for valentine\'s day"}, {"label": "productive", "text": "i have a lot of work to do today"}, {"label": "productive", "text": "i\'m going to the library to study for my exam and work on my project"}, {"label": "productive", "text": "i need to plan my backpacking trip today"}, {"label": "productive", "text": "i need to focus on my project for the hackathon i\'m in"}, {"label": "productive", "text": "i\'m feeling productive today"}, {"label": "sad", "text": "i just got dumped by my partner"}, {"label": "sad", "text": "my family member has been diagnosed with a serious illness"}, {"label": "sad", "text": "i didn\'t get the job i really wanted"}, {"label": "sad", "text": "A close friend or family member is moving away and i may not see them for a long time"}, {"label": "sad", "text": "i\'m sad or depressed"}, {"label": "stressed out", "text": "i\'m really busy today"}, {"label": "stressed out", "text": "my boss just emailed me about a mistake i made on a project, and they need it fixed ASAP"}, {"label": "stressed out", "text": "i have an important meeting in 5 minutes, and i\'m not prepared"}, {"label": "stressed out", "text": "my computer crashed, and i lost all my work for the day"}, {"label": "stressed out", "text": "i have a lot of tasks to complete today, but i\'m feeling exhausted and unable to concentrate"}, {"label": "stressed out", "text": "i\'m stressed out"}]
    });
    console.log(response.body.classifications);
    //console.log(response.body.classifications[0].prediction);
    res.json(response.body.classifications[0].prediction);
    //res.json({text: 'foo'})
  })();
})

app.get('/')

app.listen(8080, console.log("listening on port 8080..."));