class GitHub{
    constructor(){
        this.url = "https://api.github.com/users/";
    }

    async getGitHubData(username){ // searched user name

        const responseUser = await fetch(this.url + username);  
        const responseRepo = await fetch(this.url + username + "/repos"); // returns json array

        const userData = await responseUser.json(); // .json() returns another promise 
        const repoData = await responseRepo.json();

        // return as object
        return {
            user:userData,
            repo:repoData
        }
    }

}