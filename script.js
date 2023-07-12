const quotes = [
    {
      quote: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    {
      quote: "Innovation distinguishes between a leader and a follower.",
      author: "Steve Jobs"
    },
    {
      quote: "Your time is limited, don't waste it living someone else's life.",
      author: "Steve Jobs"
    },
    {
      quote: "Stay hungry, stay foolish.",
      author: "Steve Jobs"
    },
    {
      quote: "The best way to predict the future is to create it.",
      author: "Peter Drucker"
    },
    {
      quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill"
    },
    {
      quote: "The only limit to our realization of tomorrow will be our doubts of today.",
      author: "Franklin D. Roosevelt"
    },
    {
      quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      author: "Nelson Mandela"
    },
    {
      quote: "Don't watch the clock; do what it does. Keep going.",
      author: "Sam Levenson"
    },
    {
      quote: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt"
    }
  ];
  
  // Function to generate a random quote
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
  
    // Get the quote and author at the random index
    const randomQuote = quotes[randomIndex].quote;
    const randomAuthor = quotes[randomIndex].author;
  
    // Update the HTML with the random quote and author
    document.getElementById("quote").innerHTML = randomQuote;
    document.getElementById("author").innerHTML = randomAuthor;
  }
  
  
  document.getElementById("new-quote").addEventListener("click", generateQuote);
  
  // An initial quote when the page loads
  generateQuote();
  