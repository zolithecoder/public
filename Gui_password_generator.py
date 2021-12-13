import random
from tkinter import *
import string


def generate_password():
    password = []
    for i in range(4):
        alpha = random.choice(string.ascii_letters)
        numbers = random.choice(string.digits)
        password.append(alpha)
        password.append(numbers)

    y = "".join(str(x) for x in password)
    lbl.config(text=y)


root = Tk()
root.title("PASSWORD GENERATOR")
root.geometry("250x250")
btn = Button(root, text="Generate Strong Password", command=generate_password)
btn.grid(row=2, column=2)
lbl = Label(root, font=("times", 15, "bold"))
lbl.grid(row=4, column=2)
root.mainloop()
