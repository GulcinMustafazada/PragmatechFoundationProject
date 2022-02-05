users=[]
file=open('data.txt','a')
class User:
    def __init__(self,username,parol):
        self.username=username
        self.parol=parol
        file.write(f'{self.username} ,{self.parol}/n')
        
    def ShowUserData(self):
        print(f'{self.username} ,{self.parol}')
        
while True:
    emr=input("Qeydiyattdan keçmək üçün 1 yazın:")
    if emr=='1':
        username=input("İstifadəçi adınızı daxil edin:")
        parol=input("Parolunuzu daxil edin:")
        user=User(username,parol)
    elif emr=="2":
        for user in users:
            user.ShowUsersData()
    else:
        break
emr1=input("Sistemə daxil olmaq üçün 2 yazın:")
if emr1=='2':
    print("siz sisteme daxil oldunuz")
emr2=input("Ana menyuya qayitmaq üçün 3 yazın:")
if emr=='3':
     emr=input("Qeydiyattdan keçmək üçün 1 yazın:")
     if emr=='1':
        username=input("İstifadəçi adınızı daxil edin:")
        parol=input("Parolunuzu daxil edin:")
        user=User(username,parol)
     elif emr=="2":
        for user in users:
            user.ShowUsersData()
emr3=input("Ana ekrandan cixmaq ucun 4 yazin:")


