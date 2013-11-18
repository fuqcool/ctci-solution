/**
 * GIVEN: a string
 * RETURNS: whether the given string has unique characters
 */

#include <stdio.h>

#define TRUE 1
#define FALSE 0
#define SET_SIZE 255

int is_unique(char* s) {
  char set[SET_SIZE];
  int i;

  for (i = 0; i < SET_SIZE; i++) {
    set[i] = FALSE;
  }

  while (*s != '\0') {
    if (!set[*s]) {
      set[*s] = TRUE;
      s++;
    } else {
      return FALSE;
    }
  }

  return TRUE;
}

int main(char** argv, int argc) {
  char s[] = "12r3fuqo02";
  printf("%d\n", is_unique(s));
}
