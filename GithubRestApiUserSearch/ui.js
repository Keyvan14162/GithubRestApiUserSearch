class UI {
    constructor (){
        this.profileDiv = document.getElementById("profile");
        this.repoDiv = document.getElementById("repos");
    }
    showUserInfo(user) { // githubdan gelen response.user icinden cekcez verileri
        // resme basınca kendş profilimize gidelim githubdan o yuzden resim a nın iicnde olsun
        // anın linkini de user icinde kendi sayfamızın linki var o yapalım
        this.profileDiv.innerHTML = `
                            <div class="form-group">
                                <div class="input-group mb-2" title="User Name"> 
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"><i class="fa fa-user text-info"></i></div>
                                    </div>
                                    <input type="text" class="form-control" id="user-name" name="user-name"
                                        placeholder="User Name" value="${user.name}"readonly>
                                </div>

                                <div class="input-group mb-2" title="Company">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"><i class="fa fa-building text-info"></i></div>
                                    </div>
                                    <input type="text" class="form-control" id="company" name="company"
                                        placeholder="Company" value="${user.company}"readonly>
                                </div>

                                <div class="input-group mb-2" title="Location">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"><i class="fa fa-location-arrow text-info"></i>
                                        </div>
                                    </div>
                                    <input type="text" class="form-control" id="location" name="location"
                                        placeholder="Location" value="${user.location}"readonly>
                                </div>

                                <div class="input-group mb-2" title="Mail">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"><i class="fa fa-envelope text-info"></i></div>
                                    </div>
                                    <input type="text" class="form-control" id="mail" name="mail" placeholder="Mail"
                                        readonly value="${user.email}">
                                </div>
                            </div>

                            <img class="img-fluid mb-2"
                                src="${user.avatar_url}"> </a>

                            <hr>

                            <button class="btn btn-secondary">
                                Followers <span class="badge badge-light">${user.followers}</span>
                            </button>
                            <button class="btn btn-info">
                                Following <span class="badge badge-light">${user.following}</span>
                            </button>
                            <button class="btn btn-danger">
                                Repos <span class="badge badge-light">${user.public_repos}</span>
                            </button>
                            <hr>
        `
    }



    // repo bilgileri ekleyelim, id = repos olan divin altna
    showRepoInfo(repos){
        // eger baska kullanıcı sorgulandıysa temizleyek
        this.repoDiv.innerHTML = "";
        // birden cok repooldugundan foreach
        repos.forEach((repo, i)=> {  // i de indexi tutar
            // https://api.github.com/users/Keyvan14162/repos repo bilgilerine bak
            // ustune basılınca repoya gitsin githubdan
            
            if (i == 0) // ilk başta repos yazisini eklesin
                this.repoDiv.innerHTML += " <h3 class='page-heading mb-2 bg-info text-white text-center py-2'>Repos</h3>"

            this.repoDiv.innerHTML += `
                                <div class="mb-2 card-body">
                                    <div class="row">
                                        <div class="col-md-0">
                                            <a href="${repo.html_url}" target="_blank" id="repo-name">${repo.name}</a>
                                        </div>
                                        <div class="col-md-3 pl-0">
                                            <!-- pl-0 soldak boslugu sil-->
                                            <button class="btn btn-secondary">
                                                Stars <span class="badge badge-light"
                                                    id="repo-star">${repo.stargazers_count}</span>
                                            </button>

                                            <button class="btn btn-info">
                                                Forks <span class="badge badge-light"
                                                    id="repo-fork">${repo.forks_count}</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
            `
        });
    }

}