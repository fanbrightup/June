#include <stdio.h>
#include <float.h>

int main()
{
   printf("float 存储最大字节数 : %lu \n", sizeof(float));
   printf("float 最大值: %E\n", FLT_MAX );
  //  printf("精度值: %d\n", FLT_DIG );
   printf("hello");
// /   return 0;
  printf("float 最小值: %E\n", FLT_MIN );
  return 0;
}
