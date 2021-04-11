<?php

$numbers=[10,8,2,6,15,5,12];
sort($numbers);
echo"Array Sort in Ascending Order<br>";
foreach ($numbers as $num) {
	echo "$num ";
}

rsort($numbers);
echo"<br><br>Array Sort in Descending Order<br>";
foreach ($numbers as $num) {
	echo "$num ";
}

$salary=["Front-End Developer"=>15000,"Full-Stack Developer"=>80000,"Back-End Developer"=>60000];
asort($salary);
echo"<br><br>Array Sort in Ascending Order, According to value<br>";
foreach($salary as $level=>$pay){
	echo "$level: $pay ";
}

echo"<br><br>Array Sort in Ascending Order, According to Key<br>";
ksort($salary);
foreach($salary as $level=>$pay){
	echo "$level: $pay ";
}

arsort($salary);
echo"<br><br>Array Sort in Descending Order, According to value<br>";
foreach($salary as $level=>$pay){
	echo "$level: $pay ";
}

echo"<br><br>Array Sort in Descending Order, According to Key<br>";
krsort($salary);
foreach($salary as $level=>$salary){
	echo "$level: $salary ";
}

?>