<?php
$value = 'something from somewhere';

setcookie("TestCookie", $value);
//setcookie("TestCookie", $value, time()+3600);  /* expire in 1 hour */
//setcookie("TestCookie", $value, time()+3600, "/~rasmus/", "example.com", 1);
?>
<?php
// Print an individual cookie
echo ($_COOKIE["TestCookie"]);
print_r($_COOKIE);  // Another way to debug/test is to view all cookies
?>
