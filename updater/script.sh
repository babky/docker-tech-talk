#!/bin/sh

if [ '!' -f /vol/f ]
then
	echo 0 > /vol/f
fi

read x < /vol/f
let x+=1

echo $x
echo $x > /vol/f

