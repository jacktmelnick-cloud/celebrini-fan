// ===== Edit me! Everything personal / swappable lives in this file. =====

// Her first name. Leave "" and the site says "Made for you".
const HER_NAME = "Logan";

// The poem tab. Put your own poem in `text`: a blank line starts a new stanza.
const POEM = {
  title: "A Poem for Logan",
  by: "from a fan who thinks you're the real MVP",
  text: `Logan, you're the highlight of my day,
The goal horn that blows my blues away.
Some people chase the Cup all year,
I'm just glad you're always here.

You're a power play when things feel slow,
A breakaway with a warm, bright glow.
You've got more heart than a captain's "C",
And you make this whole fan club feel like family.

So here's my pass, right on your tape,
No icing, no offside, no escape:
You're my favorite player, hands down,
And the best fan in the whole darn town.`,
};

// Gallery cards, in order. Fangirl level climbs as she scrolls.
// To add a photo: save it in img/ and set img: "img/yourfile.jpg".
// pos = which part of the photo stays in frame. credit = small photo credit.
// Cards without a photo (or with a broken one) show the drawn art instead.
const GALLERY = [
  { img: "img/01.jpg", pos: "50% 35%", credit: "COC / olympic.ca", art: "🏒", level: 1, title: "Exhibit A", caption: "Oh he's cute. Normal reaction. I'm fine." },
  { img: "img/02.jpg", pos: "50% 35%", credit: "San Jose Hockey Now", art: "🥹", level: 1, title: "That Smile", caption: "I'm only looking at the stats. The stats are smiling at me." },
  { img: "img/03.jpg", pos: "50% 35%", credit: "NHL.com / The Hollywood Reporter", art: "📸", level: 2, title: "Cover Boy", caption: "Hollywood Reporter shoot. I'm not saying it's my lock screen. I'm saying it's my lock screen." },
  { img: "img/04.jpg", pos: "50% 35%", credit: "CTV News", art: "🦈", level: 2, title: "#1 Overall", caption: "Picked first overall in 2024. Also first in my heart. Sorry, I had to." },
  { img: "img/05.jpg", pos: "50% 35%", credit: "The Hockey News", art: "🎯", level: 3, title: "Locked In", caption: "That focused face. Every time he does it, my soul leaves my body." },
  { img: "img/06.jpg", pos: "50% 35%", credit: "The Hockey News", art: "📈", level: 3, title: "115 Points", caption: "A Sharks single-season record. I have it on a mug. And a pillow." },
  { img: "img/07.jpg", pos: "50% 0%", credit: "NHLPA", art: "🌟", level: 4, title: "Face of the NHL", caption: "From fan to face of the league. Meanwhile I'm still a fan. Of him. Specifically." },
  { img: "img/08.jpg", pos: "50% 35%", credit: "NBC Bay Area", art: "👀", level: 4, title: "Staring Contest", caption: "He looked at the camera and I forgot my own name." },
  { img: "img/09.jpg", pos: "50% 35%", credit: "theScore", art: "🌍", level: 5, title: "World's Best", caption: "IIHF Player of the Year. Not to be dramatic, but I'd let him break my ankles." },
  { img: "img/10.jpg", pos: "50% 35%", credit: "AP via ClickOrlando", art: "🅲", level: 5, title: "Captain Cutie", caption: "The C looks so good on him. I've already made a vision board." },
  { img: "img/11.jpg", pos: "50% 35%", credit: "NHL.com", art: "😵‍💫", level: 5, title: "Final Form", caption: "I've picked our wedding venue: SAP Center, center ice. I am clinically unwell. There is no cure." },
];

const LEVEL_NAMES = [
  "",
  "Lv 1 · he's cute ☺️",
  "Lv 2 · ok he's REALLY cute",
  "Lv 3 · I own a jersey now",
  "Lv 4 · my phone wallpaper is him",
  "Lv 5 · clinically unwell 😵‍💫",
];

// Swipe game: "Swoon or Snooze". Right = swoon 💖, left = snooze 😴.
const SWIPE_CARDS = [
  { art: "⛸️", text: "Skate date at Sharks Ice" },
  { art: "🍝", text: "Pasta night after he scores a hat trick" },
  { art: "🧣", text: "Wearing his #71 jersey to class" },
  { art: "📸", text: "He photobombs your selfie at the rink" },
  { art: "🌉", text: "Golden hour walk in San Jose" },
  { art: "🏒", text: "He teaches you how to take a slapshot" },
  { art: "🍁", text: "Meeting his family in Vancouver" },
  { art: "🎮", text: "He destroys you at NHL 26 and won't stop talking about it" },
  { art: "🥈", text: "He lets you hold the Olympic silver medal" },
  { art: "💌", text: "He dedicates his next goal to you" },
];

// Match result by number of swoons (checked from the top down).
const SWIPE_RESULTS = [
  { min: 9, title: "Soulmate Status 💍", text: "Clear your schedule. You're basically a WAG already." },
  { min: 6, title: "Hard Launch Pending 💖", text: "The chemistry is undeniable. He's checking your story right now." },
  { min: 3, title: "Situationship on Ice 🧊", text: "There's something there... you just need a playoff run to seal it." },
  { min: 0, title: "Just Friends 🤝", text: "Snoozing on a skate date?? Who hurt you. Try again." },
];

// Trivia (facts checked Oct 2026).
const QUIZ = [
  { q: "What number does Macklin wear for the Sharks?", options: ["17", "71", "11", "91"], answer: 1,
    fact: "#71. Memorize it. Tattoo it (jk... unless?)." },
  { q: "When is his birthday?", options: ["March 2, 2006", "June 13, 2006", "June 13, 2005", "Oct 9, 2006"], answer: 1,
    fact: "June 13, 2006. Gemini king ♊." },
  { q: "Where was he born?", options: ["Toronto, ON", "San Jose, CA", "North Vancouver, BC", "Boston, MA"], answer: 2,
    fact: "North Vancouver, BC. His family later moved to the Bay Area." },
  { q: "Which college did he play for?", options: ["Michigan", "Boston College", "Minnesota", "Boston University"], answer: 3,
    fact: "Boston University, 2023–24: 64 points in 38 games as a freshman." },
  { q: "At 17 he became the youngest-ever winner of which award?", options: ["Hobey Baker Award", "Calder Trophy", "Hart Trophy", "Art Ross Trophy"], answer: 0,
    fact: "The Hobey Baker, college hockey's top player award. At SEVENTEEN." },
  { q: "Where was he picked in the 2024 NHL Draft?", options: ["2nd overall", "5th overall", "1st overall", "3rd overall"], answer: 2,
    fact: "1st overall to San Jose. The Sharks fanbase collectively ascended." },
  { q: "How many points did he score in 2025–26?", options: ["88", "102", "115", "126"], answer: 2,
    fact: "115 points (45 G, 70 A), a Sharks single-season record." },
  { q: "What medal did Canada win at the 2026 Olympics?", options: ["Gold", "Silver", "Bronze", "No medal"], answer: 1,
    fact: "Silver. He led the whole tournament in goals and made the All-Star Team." },
  { q: "What Olympic first did he pull off in Milan?", options: ["Fastest hat trick", "First NHL player to score on an Olympic penalty shot", "Youngest captain", "Most assists in one game"], answer: 1,
    fact: "First NHL player ever to score on a penalty shot at the Olympics." },
  { q: "What did the IIHF name him for 2025–26?", options: ["Best Rookie", "Male Player of the Year", "Fair Play Award", "Best Goalie"], answer: 1,
    fact: "IIHF Male Player of the Year. He was also Canada's captain at the 2026 Worlds." },
  { q: "Which of these girls has Macklin gotten with? 👀", options: ["The Stanley Cup 🏆", "His hockey stick 🏒", "Logan 💖", "Sharkie the mascot 🦈"], answer: 2,
    fact: "Logan, obviously. This is now official Sharks canon." },
];

const QUIZ_RANKS = [
  { min: 11, title: "Certified Celebrini Scholar 🎓", text: "Perfect score. You could teach a class on this man." },
  { min: 8, title: "Top-Line Fangirl ⭐", text: "Elite knowledge. You definitely have notifications on." },
  { min: 5, title: "Third-Line Fan 🏒", text: "Solid! A few more highlight reels and you'll be on the top line." },
  { min: 0, title: "Bandwagon Rookie 🐣", text: "That's ok, everyone starts somewhere. Rewatch the gallery and try again!" },
];
