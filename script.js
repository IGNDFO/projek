let name = document.getElementById("nama")
let gender = document.getElementById("gender")
let email = document.getElementById("email")
let asal= document.getElementById("asal")
// let alert = document.getElementById("alert")
let reset = document.getElementById("btnreset")
let save = document.getElementById("btnsave")
let nik= document.getElementById("nik")
let tempat_L= document.getElementById("tempat_L")
let tanggal_L =document.getElementById("tanggal_L")
// let nilai = document.getElementById("N_rapot")
let j_pendaftaran= document.getElementById("j_pendaftaran")
let alamat = document.getElementById("alamat")
let data=[]


// function show(value,index){
//     list.innerHTML+=`<tr><td>${value.email}</td><td>${value.name}</td><td>${value.gender}</td><td class>${value.tempat_L}</td><td class>${value.tanggal_L}</td><td class>${value.nik}</td><td class>${value.asal}</td><td class>${value.j_pendaftaran}</td><td><button class="btn btn-info"onclick ="editUser(${value.id})">EDIT</button></td><td><button class="btn btn-danger" onclick ="deleteuser(${value.id})">DELETE</button></td><tr>`
// }

function simpan(){
     console.log("Button simpan ditekan")
    // untuk ambil data nama dan npm
    console.log(email.value)
    console.log(name.value)
    console.log(gender.value)
    console.log(tempat_L.value)
    console.log(tanggal_L.value)
    console.log(nik.value)
    console.log(asal.value)
    console.log(j_pendaftaran.value)
    console.log(alamat.value)
     



    //cek data local storage ada atau tidak
    if(localStorage.getItem("lsmhs")===null){
        localStorage.setItem("lsmhs",JSON.stringify(data))//jika blm ada local storage dengan key lsmhs blm ada
        data.push(
            {
            "email": email.value,
            "name": nama.value,
            "gender": gender.value,
            "alamat":alamat.value,
            "tempat_L": tempat_L.value,
            "tanggal_L":tanggal_L.value,
            "nik":nik.value,
            "asal":asal.value,
            "J_pendaftaran":j_pendaftaran.value
        })
    }
    else{
    //ambil data di lokal storage dengan key lsmhs, ppush data ke array dan baru simpan ke local soarage
let datals = JSON.parse(localStorage.getItem("lsmhs"))
console.log(datals)
datals.push({
"email": email.value,
"name": nama.value,
"gender": gender.value,
"alamat": alamat.value,
"tempat_L": tempat_L.value,
"tanggal_L":tanggal_L.value,
"nik":nik.value,
"asal":asal.value,
"J_pendaftaran":j_pendaftaran.value})
localStorage.setItem("lsmhs",JSON.stringify(datals))
    }
    tampil()
}

function tampil(){
    //clear listmhs
    tblmhs.innerHTML=" "
    // listmhs.innerHTML=" "
data.forEach(listdata)
let datatampil = JSON.parse(localStorage.getItem("lsmhs"))
datatampil.forEach(listdata)
}
    
function listdata(item,index){

tblmhs.innerHTML+=`<tr><td>${item.email}</td><td>${item.name}</td><td>${item.gender}</td><td>${item.alamat}</td><td>${item.tempat_L}</td><td>${item.tanggal_L}</td><td>${item.nik}</td><td>${item.asal}</td><td>${item.J_pendaftaran}</td></tr>`
}

function Reset() {
console.log("tombol reset berhasil di tekan")
document.getElementById("email").value='';
document.getElementById("nama").value='';
document.getElementById("gender").value='';
document.getElementById("alamat").value=' ';
document.getElementById("tempat_L").value='';
document.getElementById("tanggal_L").value='';
document.getElementById("nik").value='';
document.getElementById("asal").value='';
document.getElementById("j_pendaftaran").value='';
}