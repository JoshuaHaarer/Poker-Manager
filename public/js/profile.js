$(document).ready(function(){


function changeImage(a) {
  event.preventDefault();
  document.getElementById("profile-image1").src = a;
  console.log(a);
};

$(".profile").on("click", function () {
  event.preventDefault();
  $(".profbutton").attr('style', 'visibility: visible');
  $(".saveProfile").attr('style', 'visibility: visible');

});

$(".saveProfile").on("click", function () {
      event.preventDefault();
      $(".profbutton").attr('style', 'visibility: hidden');
      $(".saveProfile").attr('style', 'visibility: hidden');

    //   var profileImg = document.getElementById("profile-image1").src;

    //   app.get('/profile/:id', function (req, res) {
    //     var id = req.params.id;

    //     db.playerProfile.findOne({
    //         where: {
    //           id: id
    //         },
    //       })
    //       .on('success', function (profile) {
    //         // Check if record exists in db
    //         if (profile) {
    //           project.updateAttributes({
    //               profilePic: profileImg
    //             })
    //             .success(function () {})
    //         }
    //       })
    //     });
    // })
});
});
    