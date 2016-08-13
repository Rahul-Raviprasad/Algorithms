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

#### Working with Matrix
#include<stdio.h>
#include<conio.h>
int a[20][20];
int b[20][20];
int i,j,r1,r2,c1,c2;
void get_matrix_a()
	{
	printf("\n Enter the details of matrix A   :");
	printf("\n Number of rows     :");
	scanf("%d",&r1);
	printf("\n Number of columns  :");
	scanf("%d",&c1);
	printf("\nEnter the elements of matrix    :");
	for(i=0;i<r1;i++)
		{
		for(j=0;j<c1;j++)
			{
			scanf("%d",&a[i][j]);
			}

		}
	}
void get_matrix_b()
	{
	printf("\n Enter the details of matrix B   :");
	printf("\n Number of rows     :");
	scanf("%d",&r2);
	printf("\n Number of columns  :");
	scanf("%d",&c2);
	printf("\nEnter the elements of matrix    :");
	for(i=0;i<r2;i++)
		{
		for(j=0;j<c2;j++)
			{
			scanf("%d",&b[i][j]);
			}
		}
	}
void add_matrix()
	{
	int c[20][20];
	if((r1==r2)&&(c1==c2))
		{
		for(i=0;i<r1;i++)
			{
			for(j=0;j<c1;j++)
				{
				c[i][j]=a[i][j]+b[i][j];
				}
			}
		}
	else
	{
	printf("\nMatrix addition is not possible  :");
	}
	printf("\nAddition result   :Matrix C \n:");
	for(i=0;i<r1;i++)
		{
		for(j=0;j<c1;j++)
			{
			printf("%d\t",c[i][j]);
			}
		printf("\n");
		}
	}
void sub_matrix()
	{
	int c[20][20];
	if((r1==r2)&&(c1==c2))
		{
		for(i=0;i<r1;i++)
			{
			for(j=0;j<c1;j++)
				{
				c[i][j]=a[i][j]-b[i][j];
				}
			}
		}
	else
	{
	printf("\nMatrix subtraction is not possible  :");
	}
	printf("\nSubtraction result   :Matrix D \n:");
	for(i=0;i<r1;i++)
		{
		for(j=0;j<c1;j++)
			{
			printf("%d\t",c[i][j]);
			}
		printf("\n");
		}
	}
void mul_matrix()
	{
	int c[20][20],k;
	if(c1==r2)
		{
		for(i=0;i<r1;i++)
			{
			for(j=0;j<c2;j++)
				{
				c[i][j]=0;
				for(k=0;k<c1;k++)
					{
					c[i][j]+=a[i][k]+b[k][j];
					}
				}
			}
		}
	else
	printf("\nMatrix multiplaction  is not possible  :");
	printf("\nMultiplaction result   :Matrix E \n:");
	for(i=0;i<r1;i++)
		{
		for(j=0;j<c2;j++)
			{
			printf("%d\t",c[i][j]);
			}
		printf("\n");
		}
	}
void dis_matrix_a()
	{
	for(i=0;i<r1;i++)
		{
		for(j=0;j<c1;j++)
			{
			printf("%d\t",a[i][j]);
			}
		printf("\n");
		}
	}
void dis_matrix_b()
	{
	for(i=0;i<r2;i++)
		{
		for(j=0;j<c2;j++)
			{
			printf("%d\t",b[i][j]);
			}
		printf("\n");
		}
	}
void main()
	{
	int ch,ans;
	clrscr();
	get_matrix_a();
	get_matrix_b();
	do
		{
		clrscr();
		printf("\n\nÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ");
		printf("\n\n\t\tMAIN MENU   ");
		printf("\n\nÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ");
		printf("\n1.DISPLAY MATRIX A        ");
		printf("\n2.DISPLAY MATRIX B        ");
		printf("\n3.DISPLAY ADDITION RESULT        ");
		printf("\n4.DISPLAY SUBTRACTION RESULT        ");
		printf("\n5.DISPLAY MULTIPLACTION RESULT        ");
		printf("\n\nÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ");
		printf("\nENTER YOUR CHOICE  [1-5]     :");
		scanf("%d",&ch);
		switch(ch)
			{

			case 1:printf("\nMATRIX A IS GIVEN BELOW  \n");
				dis_matrix_a();
				break;
			case 2:printf("\nMATRIX B IS GIVEN BELOW  \n");
				dis_matrix_b();
				break;
			case 3:add_matrix();
				break;
			case 4:sub_matrix();
				break;
			case 5:mul_matrix();
				break;
			default : printf("\nWrong choice Try again  :");
			}
		printf("\nWant to see results again [for yes 1 & for no 2]  :");
		scanf("%d",&ans);
		}
	while(ans==1);
	getch();
	}

#### Matrix diagonals

#include<conio.h>
#include<stdio.h>
int a[20][20];
int i,j,c,r;
void get_matrix()
	{
	printf("\n Enter the details of matrix A   :");
	printf("\n Number of rows     :");
	scanf("%d",&r);
	printf("\n Number of columns  :");
	scanf("%d",&c);
	printf("\nEnter the elements of matrix    :");
	for(i=0;i<r;i++)
		{
		for(j=0;j<c;j++)
			{
			scanf("%d",&a[i][j]);
			}

		}
	}
void add_diag()
	{
	int diag1=0;//diag2=0;
	for(i=0;i<r;i++)
		{
		for(j=0;j<c;j++)
			{
			if(i==j)
			diag1+=a[i][j];
			//else if(i+j==c-1)
		       //	diag2+=a[i][j];
			}
		}
	printf("\nSum of main diagonal   =%d",diag1);
	//printf("\nSum of other  diagonal =%d",diag2);
	//printf("\nSum of all  diagonal   =%d",diag1+diag2);
	}
void add_diag2()
	{
	int diag1=0;
	for(i=0,j=c-1;i<r,j>=0;j--,i++)
	diag1+=a[i][j];
	printf("\nSum of sub diagonal    =%d",diag1);
	}
void add_rows()
	{
	int sumr=0;
	for(i=0;i<r;i++)
		{
		sumr=0;
		for(j=0;j<c;j++)
			{
			sumr+=a[i][j];
			}
		printf("\nSum of row %d   =%d",i+1,sumr);
		}
	}
void add_columns()
	{
	int sumc=0;
	for(j=0;j<c;j++)
		{
		sumc=0;
		for(i=0;i<r;i++)
			{
			sumc+=a[i][j];
			}
		printf("\nSum of column %d   =%d",j+1,sumc);
		}
	}
void main()
	{
	clrscr();
	get_matrix();
	add_diag();
	add_diag2();
	add_rows();
	add_columns();
	getch();
	}

#### String operations

```c
#include<stdio.h>
#include<conio.h>
char text[10];//temp[10],texta[10],textc[10],temp1[10];
void string_cpy()
	{
	char textb[10];
	printf("\nEnter a string to copy ");
	scanf("%s",textb);
	printf("\n\nstring after copying is %s",strcpy(text,textb));
	}
void string_rev()
	{
	printf("\n\nString after reversing  is %s",strrev(text));
	}
void main()
	{
	char texta[10],textc[10],temp1[10];
	int ch,ans;
	clrscr();
	printf("\nEnter the sting to perform operation  :");
	scanf("%s",text);
       //	clrscr();
	do
		{
		clrscr();
		printf("\n\nÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ");
		printf("\n\n\t\tMAIN MENU   ");
		printf("\n\nÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ");
		printf("\n1.COMPARE A STRING        ");
		printf("\n2.SHOW LENGTH OF STRING      ");
		printf("\n3.COMBINE THE STRING      ");
		printf("\n4.SHOW THE REVERSE OF STRING        ");
		printf("\n5.COPY A STRING        ");
		printf("\n\nÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ");
		printf("\nENTER YOUR CHOICE  [1-5]     :");
		scanf("%d",&ch);
		switch(ch)
			{

			case 1:	printf("\n\nEnter the sting to compare  :");
				scanf("%s",texta);
				if(strcmp(text,texta)!=0)
				printf("\n\n%s and %s are not equal  ",text,texta);
				else
				printf("\n\n%s and %s are  equal  ",text,texta);
				break;

			case 2:printf("\n\nLength of given string is  :%d",strlen(text));
				break;

			case 3:printf("\n\nEnter a text to combine   :");
				scanf("%s",textc);
				printf("\n\nCombined text is  :%s",strcat(text,textc));
				break;
			case 4:string_rev();
				break;
			case 5:string_cpy();
				break;
			default : printf("\nWrong choice Try again  :");
			}
		printf("\n\nWant to show again [for yes 1 & for no 2]  :");
		scanf("%d",&ans);
		}
	while(ans==1);
	getch();
	}

```

#### program to swapping

```c
#include<conio.h>
#include<stdio.h>
void swap(int *a,int *b)
	{
	int *temp;
	*temp=*a;
	*a=*b;
	*b=*temp;
	}
void main()
	{
	int x,y;
	clrscr();
	printf("\nEnter the two numbers  :");
	scanf("%d%d",&x,&y);
	printf("\n\nNumbers before swapping  :");
	printf("\n\n\tA=%d\tB=%d",x,y);
	swap(&x,&y);
	printf("\n\nNumbers after swapping  :");
	printf("\n\n\tA=%d\tB=%d",x,y);
	getch();
	}

```
