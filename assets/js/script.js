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