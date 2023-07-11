
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
  
  // Add an event listener to the "New Quote" button
  document.getElementById("new-quote").addEventListener("click", generateQuote);
  
  // Generate an initial quote when the page loads
  generateQuote();
  