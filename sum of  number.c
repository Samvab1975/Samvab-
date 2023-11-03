#include<stdio.h>
#include<conio.h>
void main ()
{
    int a,b,sum,avg,
    clrscr (),
    printf("enter the number\n");
    scanf("%d %d",&a,&b);
    sum=a+b;
    avg=sum/2;
    printf("sum of number = %d",sum);
    printf("avg of number = %d",avg);
    return 0;
}