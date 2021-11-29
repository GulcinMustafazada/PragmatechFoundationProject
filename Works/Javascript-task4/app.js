let username=prompt('Zəhmət olmasa istifadəçi adınızı daxil edin:')
let password=prompt('Zəhmət olmasa parolunuzu daxil edin:')
if((username=='')|| (password=='')){
alert('Dəyərlər boş ola bilməz')
}
else{
    if((username=='admin')&&(password=='123456')){
        alert('Təbriklər siz sistemə daxil oldunuz')
    }
   
    else{
        if((username!='admin')){
            alert('İstifadəçi adı düzgün daxil edilməyib')
        }
        if((password!='123456')){
            alert('Parol düzgün daxil edilməyib')
        }
        
    }

}
