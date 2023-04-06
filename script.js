function generatePrompt() {
  const topics = document.getElementById("topic").value;
  const context = document.getElementById("context").value;
  const length = document.getElementById("length").value;
  const tone = document.getElementById("tone").value;
  const language = document.getElementById("language").value;
  const audience = document.getElementById("audience").value;
  const textType = document.getElementById("text-type").value;
  const genre = document.getElementById("genre").value;
  const format = document.getElementById("format").value;


  // Generate the prompt based on the user's input
  const prompt = `Topic:${topics}\n\n   Context:${context}\n\n  Text Type:${textType}\n\n  Genre:${genre}\n\n
  Format: ${format}\n\n  Length:${length}\n\n  Tone:${tone}\n\n  Language Style:${language}\n\nAudience Type: ${audience}\n\n`;

  // Display the generated prompt on the page
  document.getElementById("prompt").innerHTML = `<p>${prompt}</p>`;
}
