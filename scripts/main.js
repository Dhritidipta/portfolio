
const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));
    
    
app.addEventListener("keypress", async function(event){
  if(event.key === "Enter"){
    await delay(150);
   getInputValue();
   
    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function(event){
  const input = document.querySelector("input");
  input.focus();
})


async function open_terminal(){
  createText("Welcome");
  await delay(700);
  createText("Starting the server...");
  await delay(1500);
  createText("You can run several commands:");
 
  createCode("about me", "Who am i and what do i do.");
  createCode("all", "See all commands.");
  createCode("social -a", "All my social networks.");

  await delay(500);
  new_line();
}


function new_line(){
  
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path")
  p.textContent = "# user";
  span1.textContent = " in";
  span2.textContent = " ~/dhritidipta";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
  
}

function removeInput(){
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue(){
  
  const value = document.querySelector("input").value;
  if(value === "all"){
    trueValue(value);
    
    createCode("projects", "My github page with my projects. Follow me there ;)");
    createCode("about me", "Who am i and what do i do.");
    createCode("social -a", "All my social networks.");
    createCode("clear", "Clean the terminal.");
    
  }
  else if(value === "projects"){
    trueValue(value);
    createText("<a href='https://github.com/dhritidipta' target='_blank'><i class='fab fa-github white'></i> github.com/dhritidipta</a>")
  }
  else if(value === "about me"){
    trueValue(value);
    createText("Hi, my name is Dhritidipta ;)")
    createText(`<pre style="white-space: pre-wrap; overflow: visible;">
    Developer with a solid background in designing and scaling enterprise applications. Over the past few years, I’ve worked with leading organizations like Hyland Software and UST, where I led key initiatives across .NET development, CI/CD automation, and plugin engineering for desktop and web environments.
    From automating legacy workflows to building tools adopted across teams, I focus on shipping clean, maintainable code that solves real business problems. My tech stack includes .NET, SQL Server, ASP.NET Core, Jenkins, and a healthy obsession with DevOps best practices.
    When I'm not debugging code, I’m either playing outdoor sports, traveling to new places, or deep into a playlist that makes the world disappear.
    </pre>`)
  }
  else if(value === "social -a"){
    trueValue(value);
    createText("<a href='https://github.com/dhritidipta' target='_blank'><i class='fab fa-github white'></i> github.com/heberleonard2</a>")
    createText("<a href='https://www.linkedin.com/in/dhritidipta-roy/' target='_blank'><i class='fab fa-linkedin-in white'></i> linkedin.com/in/heber-leonard</a>")
    createText("<a href='https://www.instagram.com/roy.dhritidipta/' target='_blank'><i class='fab fa-instagram white'></i> instagram.com/roy.dhritidipta</a>")
  }
  else if(value === "social" || value === "socials"){
    trueValue(value);
    createText("Didn't you mean: social -a?")
  }
  
  else if(value === "clear"){
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
    createCode("all", "See all commands.");
  }
  else{
    falseValue(value);
    createErrorText(`command not found: ${value}`)
  }
}

function trueValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname){
  const p = document.createElement("p");
  
  p.innerHTML =
  text
  ;
  app.appendChild(p);
}

function createCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =
 `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

function createErrorText(text) {
  const p = document.createElement("p");
  p.innerText = text;
  app.appendChild(p);
}

open_terminal();
