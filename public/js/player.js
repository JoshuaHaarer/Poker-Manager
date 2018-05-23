$(document).ready(function () {
    var url = window.location.search;
    var profileId;
    var updating = false;

    if (url.indexOf("?post_id=") !== -1) {
        profileId = url.split("=")[1];
        getPostData(postId);
        console.log(postId);
    }

    
    function changeImage(a) {
        event.preventDefault();
        document.getElementById("profile-image1").src = a;
        console.log(a);
      };
    

    
    $(proForm).on("click", function () {
        event.preventDefault();

        //User input values
        var userName = $("#userName").val();
        var nickName = $("#nickName").val();
        var firstName = $("#firstName").val();
        var lastName = $("#lastName").val();
        var email = $("#email").val();
        var password = $("#createPassword").val();

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
            username: userName.trim(),
            nickName: nickName.trim(),
            playerFirstName: firstName.trim(),
            playerLastName: lastName.trim(),
            password: password.trim()
        };

        console.log(newProfile);

        $.ajax({
            url: '/api/profiles/create',
            method: 'POST',
            data: newProfile
        }).then(function(response) {
            console.log(response);
            alert('Account created successfully. You can now log in.');
        })
        


        // if (updating) {
        //     newProfile.id = profileId;
        //     updateProfile(newProfile);
        // } else {
        //     submitProfile(newProfile);
        // }

    });
});