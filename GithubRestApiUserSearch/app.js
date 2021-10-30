const userSearchForm = document.getElementById("user-search-form"); // search form
const nameInput = document.getElementById("user-name"); // input
const github = new GitHub();
const ui = new UI();


// eventListeners
eventListeners();

function eventListeners(){
    userSearchForm.addEventListener("submit", getData);
}

function getData(e){ 
    let username = nameInput.value.trim(); // input control 
    if(username === ""){
        alert("Please enter a valid name");
    } 
    else {
        github.getGitHubData(username) // returns a object that includes user and repo 
        .then(response => { // response.user, response.message
            if(response.user.message === "Not Found") { // if user not found
                alert(username + " Not Found");
            }
            else { // show user infos and repos 
                ui.showUserInfo(response.user);
                ui.showRepoInfo(response.repo); // repo json that includes repos 
            }
                
        })
        .catch(err => console.log(err));
    }
    e.preventDefault(); // prevent page refresh
}



