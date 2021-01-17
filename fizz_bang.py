# FIZZ BANG #
# create an function such that an integer divisible
# by 3 iwill retrun 'FIZZ', if divisible by 5
# it will retrun 'BANG' and if divisible by both 3 and 5
# 'FIZZBANG' will be returned.

# FIZZ BANG FOR AN INTEGER
def fizz_bang(n):
    if n % 3 == 0 and n % 5 == 0:
        return 'FIZZBANG'
    if n % 3 == 0:
        return 'FIZZ'
    if n % 5 == 0:
        return 'BANG'

# FIZZ BANG FOR A RANGE


def fizz_bang_rng(rng):
    for n in rng:
        if n % 3 == 0 and n % 5 == 0:
            print('FIZZBANG')
        elif n % 3 == 0:
            print('FIZZ')
        elif n % 5 == 0:
            print('BANG')
        else:
            print(n)


fizz_bang_rng(range(1, 16))
