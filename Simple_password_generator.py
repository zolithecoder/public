import string
import random

print('random password with 8 character: ') 

def Generate_Password(num):
    password = ''

    for n in range(num):
        x = random.randint(0, 94)
        password += string.printable[x]
    return password


print(Generate_Password(8))
