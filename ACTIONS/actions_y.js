
function greet(){
    alert('Welcome to my dynamic application')
    document.getElementById('click').onclick = function(){
      alert("Button was clicked")
    }
  }
  
  function changeColor(){
    document.body.style.backgroundColor = "lightblue"; 
  
  }
  
  let text = 0;
  function changeText(){
    if (text === 0){
      document.getElementById('text').innerText = 'testing inline JS'
      text = 1
    }else{
      document.getElementById('text').innerText = 'This is the first HTML, CSS and Javascript'
      text = 0
    }
  
  }
  
  
