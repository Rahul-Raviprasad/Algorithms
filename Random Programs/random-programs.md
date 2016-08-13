## Few old C programs I found.

#### PROGRAM  : REVERSING A GIVEN NUMBER  .
```c
#include<conio.h>
#include<stdio.h>
void main()
{
long a,b,c=0;
clrscr();
printf("\n\nREVERSE A NUMBER   ");
printf("\n\nEnter the number    :");
scanf("%ld",&a);
while(a>0)
 {
 b=a%10;
 a/=10;
 c=b+c*10;
 }
printf("\n\nReverse of given number is   =%ld  ",c);
getch();
}
```
OUTPUT :
Enter the number   : 473
Reverse of given number   :374


#### PROGRAM  : SUM OF DIGITS OF A NUMBER  .

```c
#include<stdio.h>
#include<conio.h>
void main()
	{
	long x,y,z=0;
	clrscr();
	printf("\n\nEnter a number  :");
	scanf("%ld",&x);
	while(x>0)
		{
		y=x%10;
		z+=y;
		x/=10;
		}
	printf("\n\n Sum of digits of given number is = %ld",z);
	getch();
	}
```
OUTPUT :

Enter a number     : 473
Sum of digits of given number is = 14
