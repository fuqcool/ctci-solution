#include <stdio.h>

char* replace(char* s) {
  int s_len = 0;
  int i = 0;
  int space_count = 0;

  while (s[i] != '\0') {
    if (s[i++] == ' ') {
      space_count++;
    }

    s_len++;
  }

  s_len++;

  int news_len = s_len + 2 * space_count;

  char* news = malloc(sizeof(char) * news_len);
  news[news_len - 1] = '\0';

  int j = 0;

  for (i = 0; i < s_len - 1; i++) {
    if (s[i] == ' ') {
      news[j] = '%';
      news[j + 1] = '2';
      news[j + 2] = '0';
      j += 3;
    } else {
      news[j++] = s[i];
    }
  }

  return news;
}


int main(char** argv, int argc) {
  char s[] = "this is cool";

  printf("%s\n", replace(s));
}
