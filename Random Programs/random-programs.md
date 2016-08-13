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

#### Sorting n numbers
```c
//sorting n numbers
#include<conio.h>
#include<stdio.h>
#include<stdlib.h>
void reorder(int n,int *x);
void main()
	{
	int i,*x,n;
	clrscr();
	printf("\nHow many numbers  ?  :");
	scanf("%d",&n);
	printf("\n");
	x=(int*)malloc(n*sizeof(int));
	printf("\nEnter the numbers   :");
	for(i=0;i<n;i++)
		{
		printf("\ni=%d x=",i+1);
		scanf("%d",x+i);
		}
	reorder(n,x);
	printf("\nReordered list    :");
	for(i=0;i<n;i++)
	printf("\n\n\ti=%d x=%d\n",i+1,*(x+i));
	getch();
	}
void reorder(int n,int *x)
	{
	int i,j,temp;
	for(j=0;j<n-1;j++)
		{
		for(i=j+1;i<n;++i)
			{
			if(*(x+i)<*(x+j))
				{
				temp=*(x+j);
				*(x+j)=*(x+i);
				*(x+i)=temp;
				}
			}
		}
	return;
	}


```

####
//program to dynamically memory allocation
#include<stdio.h>
#include<conio.h>
#include<stdlib.h>
#define NULL 0
void main()
	{
	char *buffer;
	clrscr();
	if((buffer=(char*)malloc(10))==NULL)
		{
		printf("\nMalloc Failed  ");
		exit(0);
		}
	printf("\nBuffer of size 10 is created    ");
	strcpy(buffer,"DELHI");
	printf("\n\nBuffer contains  %s   ",buffer);
	if((buffer=(char*)realloc(buffer,15))==NULL)
		{
		printf("\nReallocation  Failed  ");
		exit(0);
		}
	printf("\nBuffer size is modified  ");

	printf("\nBuffer  size contains %s    ",buffer);
	strcpy(buffer," NEW DELHI");
	printf("\n\n Now Buffer contains  %s   ",buffer);
	free(buffer);
	getch();
	}

#### Employee  Database


//employee database
#include<stdio.h>
#include<conio.h>
struct date
	{
	int day,mon,year;
	};
struct emp
	{
	char name[80],deg[80];
	int  code,basic,hra,da,ta,gross;
	struct date doj;
	}e[100];
void main()
	{
	int i,n;
	clrscr();

	printf("\n\nHow many records do you want   :");
	scanf("%d",&n);

	for(i=0;i<n;i++)
		{
		printf("\n\nEnter details of employee %d ",i+1);
		printf("\nName                  :");
		scanf("%s",e[i].name);
		printf("\n\nID number           :");
		scanf("%d",&e[i].code);
		printf("\n\nDesignation         :");
		scanf("%s",e[i].deg);
		printf("\n\nBasic Salary        :Rs ");
		scanf("%d",&e[i].basic);
		e[i].hra=e[i].basic*40/100;
		e[i].da=e[i].basic*10/100;
		e[i].ta=e[i].basic*10/100;
		e[i].gross=e[i].basic+e[i].hra+e[i].ta+e[i].da;
		printf("\nDate of joining [dd/mm/yy]  :");
		scanf("%d%d%d",&e[i].doj.day,&e[i].doj.mon,&e[i].doj.year);
		}
	clrscr();
	printf("\n\n\t\tEMPLOYEE DATABASE  ");
	printf("\n\nÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ");
	printf("\n\nS.No ID No.  NAME\tDESIGNATION\tDATE OF JOIN \tBASIC\tGROSS");
	printf("\n\nÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ");
	for(i=0;i<n;i++)
		{
		printf("\n\n%d   %d\t%s\t\t%s\t%d/%d/%d\t%d\t%d",i+1,e[i].code,e[i].name,e[i].deg,e[i].doj.day,e[i].doj.mon,e[i].doj.year,e[i].basic,e[i].gross);
		}
	getch();
	}


#### Student DATABASE
//student database
#include<stdio.h>
#include<conio.h>
struct date
	{
	int day,mon,year;
	};
struct student
	{
	char name[80], clas[5];
	int roll,mp,mc,mcs,mm,me,total,avg;
	struct date doj;
	}e[100];
void main()
	{
	int i,n;
	clrscr();

	printf("\n\nHow many records do you want   :");
	scanf("%d",&n);

	for(i=0;i<n;i++)
		{
		printf("\n\nEnter details of student %d ",i+1);
		printf("\nName                  :");
		scanf("%s",e[i].name);
		printf("\n\nClass               :");
		scanf("%s",e[i].clas);
		printf("\n\nRoll Number         :");
		scanf("%d",&e[i].roll);
		printf("\n\nMarks in 5 subjects   :");
		scanf("%d%d%d%d%d",&e[i].mp,&e[i].mc,&e[i].mm,&e[i].mcs,&e[i].me);


		e[i].total=e[i].mp+e[i].mc+e[i].mcs+e[i].mm+e[i].me;
		e[i].avg=e[i].total/5;
		printf("\nDate of Birth [dd/mm/yy]  :");
		scanf("%d%d%d",&e[i].doj.day,&e[i].doj.mon,&e[i].doj.year);
		}
	clrscr();
	printf("\n\n\t\tSTUDENT DATABASE  ");
	printf("\n\nÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ");
	printf("\n\nS.No   NAME\tCLASS\tROLL \tDATE OF BIRTH\tTOTAL\t AVERAGE");
	printf("\n\nÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ");
	for(i=0;i<n;i++)
		{
		printf("\n\n%d    %s\t%s\t%d\t%d/%d/%d\t%d \t%d",i+1,e[i].name,e[i].clas,e[i].roll,e[i].doj.day,e[i].doj.mon,e[i].doj.year,e[i].total,e[i].avg);
		}
	getch();
	}


####File handling

#include<conio.h>
#include<stdio.h>
void main()
	{
	char ch,inf[40],in2f[40],ofile[40];
	FILE *fin,*fout,*fin2;
	clrscr();
	printf("\nEnter  file1  :");
	gets(inf);
	printf("\nEnter  file2  :");
	gets(in2f);
	printf("\nEnter  destination file  :");
	gets(ofile);
	if((fin=fopen(inf,"r"))==NULL)
	printf("\nFile does not exist  ");
	if((fin2=fopen(in2f,"r"))==NULL)
	printf("\nFile does not exist  ");
	if((fout=fopen(ofile,"w"))==NULL)
	printf("\nFile does not exist  ");
	else
		{
		while(!feof(fin))
			{
			ch=getc(fin);
			putc(ch,fout);
			}
		while(!feof(fin2))
			{
			ch=getc(fin2);
			putc(ch,fout);
			}
		}
	fcloseall();
	getch();
	}
