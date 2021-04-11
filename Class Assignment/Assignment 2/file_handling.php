<?php
    $fptr=fopen("read.txt", "w");
    fwrite($fptr, "string<br>");
    fwrite($fptr, "string2");
    fclose($fptr);
    
    $fptr=fopen("read.txt", "r");
    check($fptr);
    $content=fread($fptr,filesize("read.txt"));
    echo $content;

    function check($fptr)
    {
    	if(!$fptr) {
    		echo("Error Opening File");
    	}
    }
?>