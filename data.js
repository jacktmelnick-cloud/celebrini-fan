// ===== Edit me! Everything personal / swappable lives in this file. =====

// Her first name. Leave "" and the site says "Made for you".
const HER_NAME = "Logan";

// Gallery cards, in order. Fangirl level climbs as she scrolls.
// To add a photo: save it in img/ and set img: "img/yourfile.jpg".
// pos = which part of the photo stays in frame. credit = small photo credit.
// Cards without a photo (or with a broken one) show the drawn art instead.
const GALLERY = [
  { img: "img/01.jpg", pos: "50% 30%", credit: "Leah Hennel / COC", art: "🏒", level: 1, title: "Exhibit A", caption: "Oh he's cute. Normal reaction. I'm fine." },
  { img: "img/02.jpg", pos: "50% 30%", credit: "Jesse Kornblum / Wikimedia Commons, CC BY-SA 4.0", art: "🎓", level: 1, title: "The Prodigy", caption: "Youngest Hobey Baker winner EVER. At 17. I was doing algebra homework at 17." },
  { img: "img/03.jpg", pos: "50% 40%", credit: "Jesse Kornblum / Wikimedia Commons, CC BY-SA 4.0", art: "🦈", level: 2, title: "#1 Overall", caption: "#1 overall pick in 2024. Also #1 in my heart. Sorry, I had to." },
  { img: "img/04.jpg", pos: "50% 30%", credit: "Jesse Kornblum / Wikimedia Commons, CC BY-SA 4.0", art: "🥹", level: 2, title: "That Smile", caption: "I'm only looking at the stats. The stats are smiling at me." },
  { img: "img/05.jpg", pos: "30% 50%", credit: "Jesse Kornblum / Wikimedia Commons, CC BY-SA 4.0", art: "🚨", level: 3, title: "Goal Mode", caption: "Every time he scores, I scream. My neighbors have filed a complaint." },
  { img: "img/06.jpg", pos: "50% 50%", credit: "Jesse Kornblum / Wikimedia Commons, CC BY-SA 4.0", art: "📈", level: 3, title: "115 Points", caption: "A Sharks single-season record. I have it on a mug. And a pillow." },
  { img: "img/07.jpg", pos: "62% 40%", credit: "Leah Hennel / COC", art: "🇨🇦", level: 4, title: "Milan 2026", caption: "Led the Olympics in goals. I led the Olympics in crying at my TV." },
  { img: "img/08.jpg", pos: "60% 40%", credit: "NHL.com", art: "🥈", level: 4, title: "Silver Medal", caption: "Silver?? Robbery. I've drafted a strongly worded letter to the IOC." },
  { img: "img/09.jpg", pos: "50% 30%", credit: "Jesse Kornblum / Wikimedia Commons, CC BY-SA 4.0", art: "🌍", level: 5, title: "World's Best", caption: "IIHF Player of the Year. Not to be dramatic, but I'd let him break my ankles." },
  { img: "img/10.jpg", pos: "50% 30%", credit: "NHL.com / The Hollywood Reporter", art: "💍", level: 5, title: "Future Plans", caption: "I've already picked our wedding venue: SAP Center, center ice, obviously." },
  { img: "img/11.jpg", pos: "50% 30%", credit: "Jesse Kornblum / Wikimedia Commons, CC BY-SA 4.0", art: "😵‍💫", level: 5, title: "Final Form", caption: "I am clinically unwell about this man. There is no cure. I don't want one." },
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
];

const QUIZ_RANKS = [
  { min: 10, title: "Certified Celebrini Scholar 🎓", text: "Perfect score. You could teach a class on this man." },
  { min: 7, title: "Top-Line Fangirl ⭐", text: "Elite knowledge. You definitely have notifications on." },
  { min: 4, title: "Third-Line Fan 🏒", text: "Solid! A few more highlight reels and you'll be on the top line." },
  { min: 0, title: "Bandwagon Rookie 🐣", text: "That's ok, everyone starts somewhere. Rewatch the gallery and try again!" },
];
