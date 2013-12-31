/**
 * GIVEN: a string and string length
 * RETURNS: remove duplicate characters
 */

#include <stdio.h>

void rm_dup(char* s, int len) {
  char* tail = s + 1;
  char* p = tail;

  while (*p) {
    char* q = s;

    while (q < p) {
      if (*q == *p) {
        break;
      }

      q++;
    }

    if (q == p) {
      *tail = *p;
      tail++;
    }

    p++;
  }

  *tail = '\0';
}

int main(int argc, char** argv) {
  char s[] = "aaabbbccccddddssssaaabbbccc";

  rm_dup(s, 28);

  printf("%s\n", s);
}
