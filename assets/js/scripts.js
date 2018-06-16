$(function() {

	// CONTENT FADE IN EFFECT
	$(".splash").animate({"opacity":1}, 2000);

	// FORM VALIDATION & POST METHOD
	$(document).ready(function() {
		$("#menu-icon").on("click", function() {
			$("#menu-items").toggleClass("open");
		});

		$("form").submit(function(event){
			event.preventDefault();
			var name = $("#form-name").val();
			var email = $("#form-email").val();
			var subject = $("#form-subject").val();
			var message = $("#form-message").val();
			var submit = $("#form-submit").val();
			$(".form-alert").load("contact-form.php", {
				name: name,
				email: email,
				subject: subject,
				message: message,
				submit: submit
			});
		});
	});
});




// const skills = document.querySelectorAll('.devi')

// function scrollReveal(e) {
// 	console.log(window.scrollY);
// 	skills.forEach(skill => {
// 		const revealAt = (window.scrollY + window.innerHeight) - skill.height / 2;

// 		if (revealAt) {
// 			skills.removeClass('hidden');
// 			console.log('NOW')
// 		}
// 	});
// }

// window.addEventListener('scroll', scrollReveal());



// function Scroll() {
// 	var skills = $('div#skills-list');
// 	var ypos = window.pageYOffset;
// 	if(ypos > 1000 && skills.hasClass('hidden')) {
// 		skills.removeClass('hidden');
// 	}
// }

// window.addEventListener('scroll', Scroll());


// $(window).scroll(function () {
//     $('.devi').each(function () {
//         var imagePos = $(this).offset().top;
//         var imageHeight = $(this).height();
//         var topOfWindow = $(window).scrollTop();

//         if (imagePos > topOfWindow + imageHeight) {
//             $(this).removeClass('hidden');
// 			}
//     });
// });


// $(document).ready(function() {
// 	$(window).scroll(function(event) {
// 		var y = $(this).scrollTop();
// 		if (y >= 300) {
// 			$('#skills-list').removeClass('hidden');
// 		}
// 	});
// });

// (function() {
// 	const skills = $('div#skills-list');
// 	const skillsOffset = skills.offset().top/2;
// 	const doc = $(document);

// 		doc.on('scroll', function() {
// 			if (doc.scrollTop() > skillsOffset && skills.hasClass('hidden')) skills.removeClass('hidden');
// 		});
// })();

