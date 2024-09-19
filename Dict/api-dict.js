

var doc = document.getElementById('result');

function run(value) {
  // Define the URL of the resource you want to fetch

  const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/'+value;

  // Use the fetch function to make a GET request
  fetch(url)
    .then(response => {
      // Check if the response is successful (status code 200-299)
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      // Parse the JSON from the response
      return response.json();
    })
    .then(data => {
      // Handle the data
      output = data[0]['meanings'][0]['definitions'][0]['definition']; 
      console.log(output);
      doc.innerHTML = `${output}`
      
    })
    .catch(error => {
      // Handle errors
      console.log(output);
      alert('There was a problem with the fetch operation:', error);
    });
}

function send() {
  var x = '';
  x += document.getElementById('inputt').value;
  console.log(x);
  run(x);
}

