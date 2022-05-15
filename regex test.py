#regex
import re

telefonszam = "+36123456789"

if re.match("^\+36[0-9]{9}$",telefonszam):
    print(telefonszam)
else:
    print('not valid')

telefonszam2 = "+361245689"
if re.match("^\+36[0-9]{9}$",telefonszam2):
    print(telefonszam2)
else:
    print('not valid')

email="gmzo@gmail.com"

if re.match("^[a-zA-Z0-9]+@[a-zA-Z]+\.(com|net|hu)$", email):
    print(email)
else:
    print('not valid')

email2="gmzo@gmail.co"

if re.match("^[a-zA-Z0-9]+@[a-zA-Z]+\.(com|net|hu)$", email2):
    print(email2)
else:
    print('not valid')










#filekezelés:
    def inputStops(self,fileName):
        try:
            file = open(fileName,"r")
            for str in file:
                tmp = str.split(";")
                time = tmp[len(tmp)-1][:-1].split('.')
                self.__stops.append(Station(tmp[2],time[0],time[1]))
        except FileNotFoundError:
            print("A megadott fájl nem található!")







    def __str__(self):
        tmp = self.__name + "(" + self.__id + ")" + "  from: " + self.__arrival + "  to: " + self.__dest + ":\n"
        if len(self.__stops) == 0:
            return tmp + "Ismeretlen információ."
        else:
            self.__stops.sort()
            for i in self.__stops:
                tmp += i.__str__() + "\n"
            return tmp





