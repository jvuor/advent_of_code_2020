import { solveDifferences } from '../solver';

export const testInput1 = `16
10
15
5
1
11
7
19
6
12
4`;

export const testInput2 = `28
33
18
42
31
14
46
20
48
47
24
23
49
45
19
38
39
11
1
32
25
35
8
17
7
9
4
2
34
10
3`;


describe('Day 10 unit tests', () => {
  test('Part 1 solutions', () => {
    expect(solveDifferences(testInput1)).toBe(7 * 5);
    expect(solveDifferences(testInput2)).toBe(22 * 10);
  });
});
