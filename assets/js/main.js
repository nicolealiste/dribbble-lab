/* Acá va todo el jquery */
$(document).ready(function() {
	$('.dropdown-button').dropdown();

	var clienToken = "fd4886cd9ba1523144ac4aabdd303e330c31193b7df2ca4837c1a1b53130a7d5", //Client Access Token
        shots = 12; 
       $(function() {
        $.getJSON('https://api.dribbble.com/v1/users/DanielHaire/shots?access_token=' + clienToken + '&callback=?', function(e) {
            if (e.data.length > 0) {
                console.log('data', e.data);
                $.each(e.data.reverse(), function(i, val) {                                  
                    var d = /<p>(.*?)<\/p>/g.exec(val.description)[1];//obtenemos la descripción
                    console.log('d', d);

                    $('#shots').prepend(
                        '<div class="col s4 m4">' +
                        '<a class="grey" target="_blank" href="' + val.html_url + '">' +
                        '<li class="card">' +
                        '<img id="img-' + val.id + '" class="responsive-img img-tooltip" src="' + val.images.normal + '" />' +
                        '<p class="right"><i class="shots-i fa fa-eye" aria-hidden="true"></i>' + val.views_count + " " +
                        '<i class="shots-i fa fa-comment" aria-hidden="true"></i>' + val.comments_count + " " +
                        '<i class="shots-i fa fa-heart" aria-hidden="true"></i>' + val.likes_count +'</p>' + '</li>' +'</a>'+'</div>'
                    );
                    $('#data-' + val.id).tooltip({ delay: 100, html: true, tooltip: d });
                });
            } else {
                $('#shots').append('<li>Ups! an error</li>');
            }
        });
    });    

      
});