let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');

const quotes = [
    {
        "no": 1,
        "quote": "to make your parents proud"
    },
    {
        "no": 2,
        "quote": "to conquer your fears"
    },
    {
        "no": 3,
        "quote": "to see your family again"
    },
    {
        "no": 4,
        "quote": "to see your Favorite artist live"
    },
    {
        "no": 5,
        "quote": "to listen to music again"
    },
    {
        "no": 6,
        "quote": "to experience a new culture"
    },
    {
        "no": 7,
        "quote": "to make new friends"
    },
    {
        "no": 8,
        "quote": "to inspire"
    },
    {
        "no": 9,
        "quote": "to have your own children"
    },
    {
        "no": 10,
        "quote": "to adopt your own pet"
    },
    {
        "no": 11,
        "quote": "to make yourself proud"
    },
    {
        "no": 12,
        "quote": "to meet your idols"
    },
    {
        "no": 13,
        "quote": "to laugh until you cry"
    },
    {
        "no": 14,
        "quote": "to feel tears of happiness"
    },
    {
        "no": 15,
        "quote": "to eat your favorite food"
    },
    {
        "no": 16,
        "quote": "to see your siblings grow"
    },
    {
        "no": 17,
        "quote": "to pass school"
    },
    {
        "no": 18,
        "quote": "to get a tattoo"
    },
    {
        "no": 19,
        "quote": "to smile until your cheeks hurt"
    },
    {
        "no": 20,
        "quote": "to meet your internet friends"
    },
    {
        "no": 21,
        "quote": "to find someone who loves you like you deserve"
    },
    {
        "no": 22,
        "quote": "to eat ice cream on a hot day"
    },
    {
        "no": 23,
        "quote": "to drink hot chocolate on a cold day"
    },
    {
        "no": 24,
        "quote": "to see untouched snow in the morning"
    },
    {
        "no": 25,
        "quote": "to see a sunset that sets the sky on fire"
    },
    {
        "no": 26,
        "quote": "to see stars light up the sky"
    },
    {
        "no": 27,
        "quote": "to read a book that changes your life"
    },
    {
        "no": 28,
        "quote": "to see the flowers in the spring"
    },
    {
        "no": 29,
        "quote": "to see the leaves change from green to brown"
    },
    {
        "no": 30,
        "quote": "to travel abroad"
    },
    {
        "no": 31,
        "quote": "to learn a new language"
    },
    {
        "no": 32,
        "quote": "to learn to draw"
    },
    {
        "no": 33,
        "quote": "to tell others your story in the hopes of helping them"
    },
    {
        "no": 34,
        "quote": "Puppy kisses"
    },
    {
        "no": 35,
        "quote": "Baby kisses (the open-mouthed kind when they smack their lips on your cheek)"
    },
    {
        "no": 36,
        "quote": "Swear words and the release you feel when you say them"
    },
    {
        "no": 37,
        "quote": "Trampolines"
    },
    {
        "no": 38,
        "quote": "Ice cream"
    },
    {
        "no": 39,
        "quote": "Stargazing"
    },
    {
        "no": 40,
        "quote": "Cloud watching"
    },
    {
        "no": 41,
        "quote": "Taking a shower and then sleeping in clean sheets"
    },
    {
        "no": 42,
        "quote": "Receiving thoughtful gifts"
    },
    {
        "no": 43,
        "quote": "\"I saw this and thought of you\""
    },
    {
        "no": 44,
        "quote": "The feeling you get when someone you love says, \"I love you\""
    },
    {
        "no": 45,
        "quote": "The relief you feel after crying"
    },
    {
        "no": 46,
        "quote": "Sunshine"
    },
    {
        "no": 47,
        "quote": "The feeling you get when someone is listening to you/giving you their full attention"
    },
    {
        "no": 48,
        "quote": "Your future wedding"
    },
    {
        "no": 49,
        "quote": "Your favorite candy bar"
    },
    {
        "no": 50,
        "quote": "New clothes"
    },
    {
        "no": 51,
        "quote": "Witty puns"
    },
    {
        "no": 52,
        "quote": "Really good bread"
    },
    {
        "no": 53,
        "quote": "Holding your child in your arms for the first time"
    },
    {
        "no": 54,
        "quote": "Completing a milestone (aka going to college, graduating college, getting married, getting your dream job)"
    },
    {
        "no": 55,
        "quote": "The kind of dreams where you wake up and can't stop smiling"
    },
    {
        "no": 56,
        "quote": "The smell before and after it rains"
    },
    {
        "no": 57,
        "quote": "The sound of rain against a rooftop"
    },
    {
        "no": 58,
        "quote": "The feeling you get when you're dancing"
    },
    {
        "no": 59,
        "quote": "The person (or people) that mean the most to you. Stay alive for them"
    },
    {
        "no": 60,
        "quote": "Trying out new recipes"
    },
    {
        "no": 61,
        "quote": "The feeling you get when your favorite song comes on the radio"
    },
    {
        "no": 62,
        "quote": "The rush you get when you step onto a stage"
    },
    {
        "no": 63,
        "quote": "You have to share your voice and talents and knowledge with the world because they are so valuable"
    },
    {
        "no": 64,
        "quote": "Breakfast in bed"
    },
    {
        "no": 65,
        "quote": "Getting a middle seat in the movie theater"
    },
    {
        "no": 66,
        "quote": "Breakfast for dinner (because it's so much better at night than in the morning)"
    },
    {
        "no": 67,
        "quote": "Pray (if you are religious)"
    },
    {
        "no": 68,
        "quote": "Forgiveness"
    },
    {
        "no": 69,
        "quote": "Water balloon fights"
    },
    {
        "no": 70,
        "quote": "New books by your favorite authors"
    },
    {
        "no": 71,
        "quote": "Fireflies"
    },
    {
        "no": 72,
        "quote": "Birthdays"
    },
    {
        "no": 73,
        "quote": "Realizing that someone loves you"
    },
    {
        "no": 74,
        "quote": "Spending the day with someone like you"
    },
    {
        "no": 75,
        "quote": "Opportunity to create meaningful and lasting relationships"
    },
    {
        "no": 76,
        "quote": "Potential to learn, grow, and evolve as a person"
    },
    {
        "no": 77,
        "quote": "Joy and happiness in the little things"
    },
    {
        "no": 78,
        "quote": "The power to inspire others"
    },
    {
        "no": 79,
        "quote": "The ability to create art, music, and other forms of self-expression"
    },
    {
        "no": 80,
        "quote": "To explore different cultures, traditions, and ways of life"
    },
    {
        "no": 81,
        "quote": "To make a positive impact on the environment and help protect the planet"
    },
    {
        "no": 82,
        "quote": "Experience the joys of parenthood and raise a family"
    },
    {
        "no": 83,
        "quote": "Learn new things and develop new skills"
    },
    {
        "no": 84,
        "quote": "Create a legacy that will outlive you"
    },
    {
        "no": 85,
        "quote": "Being wrapped up in a warm bed"
    },
    {
        "no": 86,
        "quote": "Cuddles"
    },
    {
        "no": 87,
        "quote": "Holding hands"
    },
    {
        "no": 88,
        "quote": "The kind of hugs when you can feel a weight being lifted off your shoulders. The kind of hug where your breath syncs with the other person's, and you feel like the only two people in the world"
    },
    {
        "no": 89,
        "quote": "Singing off-key with your best friends"
    },
    {
        "no": 90,
        "quote": "Road trips"
    },
    {
        "no": 91,
        "quote": "Spontaneous adventures"
    },
    {
        "no": 92,
        "quote": "The feeling of sand beneath your toes"
    },
    {
        "no": 93,
        "quote": "The feeling when the first ocean wave rolls up and envelops your toes and ankles and knees"
    },
    {
        "no": 94,
        "quote": "Thunderstorms"
    },
    {
        "no": 95,
        "quote": "Your first (or hundredth) trip to Disneyland"
    },
    {
        "no": 96,
        "quote": "The taste of your favorite food"
    },
    {
        "no": 97,
        "quote": "The child-like feeling you get on Christmas morning"
    },
    {
        "no": 98,
        "quote": "The day when everything finally goes your way"
    },
    {
        "no": 99,
        "quote": "Compliments and praise"
    },
    {
        "no": 100,
        "quote": "to look on this moment in 10 years time and realize you did it"
    }
]

btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;


})

