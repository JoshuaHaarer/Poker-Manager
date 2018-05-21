$(document).ready(function () {
    var url = window.location.search;
    var profileId;
    var updating = false;

    if (url.indexOf("?post_id=") !== -1) {
        profileId = url.split("=")[1];
        getPostData(postId);
    }




    $(proForm).on("click", function () {
        event.preventDefault();

        var userName = $("#userName").val();
        var nickName = $("#nickName").val();
        var firstName = $("#firstName").val();
        var lastName = $("#lastName").val();
        var email = $("#email").val();
        var proForm = $("#proForm");

        

        // if (userName.val() === "") {
        //     return;
        // } else if (nickName.val() === "") {
        //     return;
        // } else if (firstName.val() === "") {
        //     return;
        // } else if (lastName.val() === "") {
        //     return;
        // } else if (email.val() === "") {
        //     return;
        // };


        var newProfile = {
            userName: userName,
            nickName: nickName,
            firstName: firstName,
            lastName: lastName,
            email: email
        };

        console.log(newProfile);


        // if (updating) {
        //     newProfile.id = profileId;
        //     updateProfile(newProfile);
        // } else {
        //     submitProfile(newProfile);
        // }

    });
});