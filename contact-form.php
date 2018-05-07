<?php
    if (isset($_POST['submit'])) {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $subject = $_POST['subject'];
        $message = $_POST['message'];

        $errorEmpty = false;
        $errorEmail = false;

        if (empty($name) || empty($email) || empty ($subject) || empty ($message)) {
            echo "<span class='form-error'>ALL FIELDS REQUIRED</span>";
            $errorEmpty = true;
        }
        elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            echo "<span class='form-error'>VALID EMAIL REQUIRED</span>";
            $errorEmail = true;
        } else {
            echo "<span class='form-success'>MESSAGE SENT</span>";

            $mailTo = "contact@dervinmejia.com";
            $headers = "From: ".$emailFrom;
            $txt = "Form submission from ".$name." at ".$email.".\n\n".$message;
        
            mail($mailTo, $subject, $txt, $headers);
            header("Location: index.html");
        }
    }
    else {
        echo "UNEXPECTED ERROR";
    }
?>

<script>
    $("#form-name, #form-email, #form-subject, #form-message").removeClass("input-error");

    var errorEmpty = "<?php echo $errorEmpty; ?>";
    var errorEmail = "<?php echo $errorEmail; ?>";

    if (errorEmpty == true) {
        $("#form-name, #form-email, #form-subject, #form-message").addClass("input-error");
    }
    if (errorEmail == true) {
        $("#form-email").addClass("input-error");
    }
    if (errorEmpty == false && errorEmail == false) {
        $("#form-name, #form-email, #form-subject, #form-message").val("");
    }
</script>