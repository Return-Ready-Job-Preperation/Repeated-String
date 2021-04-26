# Repeated String

## Description

You are building a very long string. You are provided a string `pattern` of lowercase letters that you will repeat in order to build a longer string. You are also provided an integer `length` which represents the length of the larger string. For example:

    pattern: "abca"
    length: 15

If you repeat the pattern `abca` for 15 characters, your longer string will be `abcaabcaabcaabc`. The goal of the problem is to determine how many times the letter `a` will occur in the larger string given a pattern and length.

## Specifications

### Input

    pattern: a string of characters to be repeated
    length: the number of characters in the larger string

### Returns

    int: the frequency of a in the substring

## Examples

### Sample Input 0

    aba
    10

### Sample Output 0

    7

### Explanation 0

The first `10` letters of the larger string are `abaabaabaa`. Because there are 7 a's, we return 7.

### Sample Input 1

    a
    1000000000000

### Sample Output 1

    1000000000000

### Explanation 1

Because all of the first 1000000000000 letters of the larger string are `a`, we return 1000000000000.

## Submission

Push all of your changes to you GitHub Repo
