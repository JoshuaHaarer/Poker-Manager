$(document).ready(function(){
    var url = window.location.search;
    var profileId;
    var updating = false;

    if (url.indexOf("?post_id=") !== -1) {
        profileId = url.split("=")[1];
        getPostData(postId);
    }

    var playerName = $("#playerName");
    var nickName = $("#nickName");
    var proForm = $("#proForm");

    $(proForm).on("submit", function handleFormSubmit(event){
        event.preventDefault();
        if (!playerName.val().trim()){
            return;
        }
    
    var newProfile = {
        playerName: playerNameInput.val().trim(),
        nickName: nickNameInput.val().trim()
    };

    console.log(newProfile);


    if (updating) {
        newProfile.id = profileId;
        updateProfile(newProfile);
    }
    else{
        submitProfile(newProfile);
    }
    });
});