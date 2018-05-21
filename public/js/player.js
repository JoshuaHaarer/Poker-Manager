$(document).ready(function () {
    var url = window.location.search;
    var profileId;
    var updating = false;

    if (url.indexOf("?post_id=") !== -1) {
        profileId = url.split("=")[1];
        getPostData(postId);
        console.log(postId);
    }




    $(proForm).on("click", function () {
        event.preventDefault();

        //User input values
        var userName = $("#userName").val();
        var nickName = $("#nickName").val();
        var firstName = $("#firstName").val();
        var lastName = $("#lastName").val();
        var email = $("#email").val();

        //Submit button
        var proForm = $("#proForm");

        
        //If they enter nothing it will return false
        if (userName === "") {
            alert("Please fill every field!");
            return;
        } else if (nickName === "") {
            alert("Please fill every field!");
            return;
        } else if (firstName === "") {
            alert("Please fill every field!");
            return;
        } else if (lastName === "") {
            alert("Please fill every field!");
            return;
        } else if (email === "") {
            alert("Please fill every field!");
            return;
        };


        var newProfile = {
            userName: userName.trim(),
            nickName: nickName.trim(),
            firstName: firstName.trim(),
            lastName: lastName.trim(),
            email: email.trim()
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