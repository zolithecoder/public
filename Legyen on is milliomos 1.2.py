import random

print("Legyen on is milliomos")

database=["Which country is home to flamenco danceing? \n 1. Spain \n 2. Norway \n 3. Germany \n 4. Russia",
          "WWW is an acronym for what? \n 1. World Work Web \n 2. World Wide Web \n 3. World Wide Wig \n 4. World Web Wander",
          "Who painted the Mona Lisa? \n 1. Van Gogh \n 2. Renoir \n 3. da Vinci \n 4. Monet",
          "H2O is an abbreviation for what liquid? \n 1. Milk \n 2. Liquid nitrogen \n 3. sodium \n 4. Water",
          "At the beginning of a game how many chess pieces does each player have? \n 1. 10 \n 2. 12 \n 3. 14 \n 4. 16",
          "Who wrote the MOBY DICK? \n 1. Carson \n 2. Swift \n 3. Melville \n 4. Defoe",
          "To which country does the island of Sicily belong? \n 1. Italy \n 2. France \n 3. Greece \n 4. Denmark",
          "Which automobile company manufactures the Mustang? \n 1. Chrysler \n 2. Dodge \n 3. Ford \n 4. Toyota",
          "Which breed of dog was named after a state in Mexico? \n 1. Chihuahua \n 2. Mastiff \n 3. Lhasa Apso \n 4. Labrador",
          "What is the second letter of the Greek alphabet? \n 1. Beta \n 2. Sigma \n 3. Omega \n 4. Zeta",
          "What is the last letter of the Greek alphabet? \n 1. Omega \n 2. Sigma \n 3. Zeta \n 4. Eta",
          "Who is the real writer of Sherlock Holmes?? \n 1. J.K. Rowling \n 2. Conan Doyle \n 3. J.R.R. Tolkien \n 4. George Orwell"
          ]


x=input("Your name? ")

print("Hello",x)
print("Lets play")




balance=0
print('your balance:',balance,'$')


while True:
    a = database[random.randint(0, len(database) - 1)]
    print(a)
    for i in range(len(database)):
        if database[i]==a and database[i]!='':
            if i==0:
                s=int(input())
                if s==1:
                    print('ok')
                    database[0]=''
                else:
                    print('not ok')
                    print('you won', balance,'$')
                    quit()
            if i==1:
                t=int(input())
                if t==2:
                    print('ok')
                    database[1]=''
                else:
                    print('not ok')
                    print('you won', balance,'$')
                    quit()
            if i==2:
                o=int(input())
                if o==3:
                    print('ok')
                    database[2]=''
                else:
                    print('not ok')
                    print('you won', balance,'$')
                    quit()
            if i==3:
                w=int(input())
                if w==4:
                    print('ok')
                    database[3]=''
                else:
                    print('not ok')
                    print('you won', balance,'$')
                    quit()
            if i==4:
                ww=int(input())
                if ww==4:
                    print('ok')
                    database[4]=''
                else:
                    print('not ok')
                    print('you won', balance,'$')
                    quit()
            if i==5:
                yy=int(input())
                if yy==3:
                    print('ok')
                    database[5]=''
                else:
                    print('not ok')
                    print('you won', balance,'$')
                    quit()
            if i==6:
                yyy=int(input())
                if yyy==1:
                    print('ok')
                    database[6]=''
                else:
                    print('not ok')
                    print('you won', balance,'$')
                    quit()
            if i==7:
                yz=int(input())
                if yz==3:
                    print('ok')
                    database[7]=''
                else:
                    print('not ok')
                    print('you won', balance,'$')
                    quit()
            if i == 8:
                yk = int(input())
                if yk == 1:
                    print('ok')
                    database[8] = ''
                else:
                    print('not ok')
                    print('you won', balance, '$')
                    quit()
            if i == 9:
                yc = int(input())
                if yc == 1:
                    print('ok')
                    database[9] = ''
                else:
                    print('not ok')
                    print('you won', balance, '$')
                    quit()
            if i == 10:
                yp = int(input())
                if yp == 1:
                    print('ok')
                    database[10] = ''
                else:
                    print('not ok')
                    print('you won', balance, '$')
                    quit()
            if i == 11:
                ys = int(input())
                if ys == 2:
                    print('ok')
                    database[10] = ''
                else:
                    print('not ok')
                    print('you won', balance, '$')
                    quit()
            balance+=100
            print('your balace: ', balance,'$')

s=input()
