
export function onLoad(){
    // console.log(navigator)
    fetch("http://localhost:3000/api/v1/sessions", {
        method: "POST",
        body: JSON.stringify({
            page_name: "some_chimeric_page",
            user_agent: navigator["userAgent"],
            language: navigator["language"]
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then(response => response.json())
        .then(data => 
            schedulePing(data.id)
        )
        .catch(error => console.log("onLoad error: ", error));
}


function schedulePing(id) {
    let delay = 1000; // Initial delay is 1 second
  
    function recursiveCall() {
      ping(id); 
      delay *= 2; // Double the delay for the next call
      setTimeout(recursiveCall, delay); // Schedule the next call
    }
  
    // Initial call
    setTimeout(recursiveCall, delay);
  }

function ping(id){
    console.log('ping')
    fetch(`http://localhost:3000/api/v1/sessions/${id}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).catch((error) => console.log("ping error: ", error));
   
}
  