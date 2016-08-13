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

#### PROGRAM  : FINDING A NUMBER IS   PALINDROME OR NOT                 .                 

```c
#include<stdio.h>
#include<conio.h>
void main()
	{
	long int a=0,b=0,c=0,d=0,e=0;
	clrscr();
	printf("\n\nEnter the number   :");
	scanf("%ld",&a);
	e=a;
	while(a>0)
		{
		b=a%10;
		c+=b;
		a/=10;d=b+d*10;
		}
	if(e==d)
	printf("\n\n%ld is a palindrome number :",e);
	else
	printf("\n\n%ld is not a palindrome number :",e);
	getch();
	}
```
OUTPUT :

Enter the number     : 151

 151 is a palindrome number

Enter the number     :  567

567 is  not a palindrome number

####    PROGRAM  : FACTORIAL OF A NUMBER          .

#include<conio.h>
#include<stdio.h>
void main()
	{
	long n,f=1,i;
	clrscr();
	printf("\n\nEnter the number  :");
	scanf("%ld",&n);
	if(n==0)
		{
		printf("\n\n%Factorial of given number is  :%ld",n);
		}
	else
		{
		for(i=1;i<=n;i++)
		f*=i;
		printf("\n\nFactorial of given number is  :%ld",f);
		}
	getch();
	}

OUTPUT:
Enter the number   : 5
Factorial of given number  = 120

#### Program for simple calculator
#include<conio.h>
#include<stdio.h>
void main()
	{
	float a,b,r;
	int ch;
	clrscr();
	printf("\n\nEnter two numbers to perform calculations   :");
	scanf("%f%f",&a,&b);
	printf("\n\nMAIN MENU  ");
	printf("\n\n1. ADDITION        :  ");
	printf("\n\n2. SUBTRACTION     :  ");
	printf("\n\n3. MULTIPLACTION   :  ");
	printf("\n\n4. DIVISION        :  ");
	printf("\n\n. ENTER YOUR CHOICE       :  ");
	scanf("%d",&ch);
	switch(ch)
		{
		case 1 :r=a+b;
			printf("\n\nRESULT  =%f",r);
			break;
		case 2 :r=a-b;
			printf("\n\nRESULT  =%f",r);
			break;
		case 3 :r=a*b;
			printf("\n\nRESULT  =%f",r);
			break;
		case 4 :r=a/b;
			printf("\n\nRESULT  =%f",r);
			break;

		default : printf("\n\nWRONG CHOICE  ");
		}
	getch();
	}

#### Fibonacci series
#include<conio.h>
#include<iostream.h>
void main()
	{
	clrscr();
	long int f,s,t,n,i;
	char ch;
	do
	{
	f=0;
	s=1;
	cout<<"\nHow many terms do you want :";
	cin>>n;
	cout<<"\nFibonacci series upto "<<n<<" terms is  :";
	cout<<"\nÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ\n";
	cout<<"\nÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ\n";
	cout<<f<<"\t"<<s<<"\t";
	for(i=3;i<=n;i++)
		{
		t=f+s;
		cout<<t<<"\t";
		f=s;
		s=t;
		}
	cout<<"\nÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ\n";
	cout<<"\nÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ\n";
	cout<<"\nWant again [y/n]  ?:";
	cin>>ch;
	}
	while(ch=='y');
	getch();
	}

#### Bubble sort
//program to bubble sorting
#include<conio.h>
#include<stdio.h>
void main()
	{
	int a[20],temp=0,i,j,n;
	clrscr();
	printf("\n Enter the size of array   :");
	scanf("%d",&n);
	printf("\nEnter the elements of array  :");
	for(i=0;i<n;i++)
		{
		scanf("%d",&a[i]);
		}
		for(i=0;i<n-1;i++)
			{
			for(j=i;j<n;j++)
				{
				if(a[i]>a[j])
					{
					temp=a[i];
					a[i]=a[j];
					a[j]=temp;
					}
				}
			}

	printf("\nThe sorted array is   :");
	for(i=0;i<n;i++)
		{
		printf("\n%d\t",a[i]);
		}
	getch();
	}
