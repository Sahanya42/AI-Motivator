const moodInput = document.getElementById("moodInput");
const getQuoteBtn = document.getElementById("getQuote");
const quoteDisplay = document.getElementById("quoteDisplay");


const moodQuotes = {
  happy: "Happiness is not by chance, but by choice. – Jim Rohn",
  sad: "Even the darkest night will end and the sun will rise. – Victor Hugo",
  tired: "Take a rest. A calm mind brings inner strength. – Buddha",
  stressed: "Do not let what you cannot do interfere with what you can do. – John Wooden",
  anxious: "You don’t have to control your thoughts. You just have to stop letting them control you. – Dan Millman",
  motivated: "The secret of getting ahead is getting started. – Mark Twain",
  default: "Keep going! Every day is a new opportunity to grow. – Unknown"
};

getQuoteBtn.addEventListener("click", () => {
  const mood = moodInput.value.trim().toLowerCase();
  const quote = moodQuotes[mood] || moodQuotes.default;
  quoteDisplay.textContent = `"${quote}"`;
});
document.getElementById("scrollBtn").addEventListener("click", () => {
  document.getElementById("quotes").scrollIntoView({ behavior: "smooth" });
});
