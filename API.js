let nama = document.getElementById("nama")
let gender = document.getElementById("gender")
let email = document.getElementById("email")
let asal= document.getElementById("asal")
let reset = document.getElementById("btnreset")
let save = document.getElementById("btnsave")
let nik= document.getElementById("nik")
let tempat_L= document.getElementById("tempat_L")
let tanggal_L =document.getElementById("tanggal_L")
let j_pendaftaran= document.getElementById("j_pendaftaran")
let alamat = document.getElementById("alamat")



// https://api-mahasiswa.vercel.app/calon_mahasiswa


function getuser(){
     fetch("https://api-mahasiswa.vercel.app/calon_mahasiswa/")
     .then(response => response.json())
    .then(data =>
    {
         console.log(data)
         data.forEach(show)
        
    })
    .catch(error => {
        console.log(error)
    });
    }
   

    getuser()

    function listdata(item,index){
        tblmhs.innerHTML+=`<tr><td>${item.email}</td><td>${item.nama}</td><td>${item.gender}</td><td>${item.alamat}</td><td>${item.tempat_L}</td><td>${item.tanggal_L}</td><td>${item.nik}</td><td>${item.asal}</td><td>${item.J_pendaftaran}</td><td><button class="btn btn-info"onclick ="editUser(${value.id})">EDIT</button></td><td><button class="btn btn-danger" onclick ="deleteuser(${value.id})">DELETE</button></td></tr>`
        }

        
function deleteuser(id){
    console.log("HAPUS DATA ID: "+ id)
    fetch("https://api-mahasiswa.vercel.app/calon_mahasiswa/"+ id,{
        method : "DELETE",
       
    })
    .then( response=> { console.log
    (response)
        list.innerHTML=""
        getuser()
})
    .catch (error =>{
        console.log(error)
    })}
    function createuser(statussimpan=0,id =0){
      if(statussimpan==0){
        console.log("berhasil disimpan")
        fetch("https://api-mahasiswa.vercel.app/calon_mahasiswa/",{
        method : "POST",
         
        body: JSON.stringify({
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
        })
        
        .then(response => {response.json()
        console.log(response.status)
        if( response.status==201){
            alert.innerHTML = `<div class="alert alert-success" >USER BERHASIL DISIMPAN</div>`}
            else {
                alert.innerHTML = `<div class="alert alert-danger" >PENYIMPANAN GAGAL</div>`}
        
        
        })
        .then(result=>{ console.log(result)
    })
        .catch(error => {
            console.log(error)
        });                                                 
    
      }
      else{
        console.log("tombol ubah berhaasi ditekan")
        fetch("https://api-mahasiswa.vercel.app/calon_mahasiswa/"+id,{
          method : "PUT",
           
          body: JSON.stringify({
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
          
        })
        .then(response => {response.json()
          console.log(response.status)
          if( response.status==200){
              alert.innerHTML = `<div class="alert alert-success" >USER BERHASIL DIUBAH</div>`}
              else {
                  alert.innerHTML = `<div class="alert alert-danger" >GAGAL MENGUBAH DATA</div>`}
                  list.innerHTML=" "
         getuser()
         })
         
          .then(result=>{ console.log(result)
      })
          .catch(error => {
              console.log(error)
          });
      }
    }
   

    
    
function editUser(id){
console.log(id);
  

fetch("https://api-mahasiswa.vercel.app/calon_mahasiswa/")

.then(response => response.json())
.then(data =>
{
     console.log(data)
     //panggil data ke form
   email.value= data.email
   nama.value=data.nama
   gender.value = data.gender
   alamat.value=data.alamat
   tempat_L.value= data.tempat_L
   tanggal_L.value= data.tanggal_L
   nik.value= data.nik
   asal.value= data.asal
   j_pendaftaran.value= data.j_pendaftaran


   
   // SIMPAN TEXT SIMPAN JADI UBAH
   btncreate.innerHTML="CHANGE"
   btncreate.setAttribute("onclick","createuser(1," + id + ")")

    
})
.catch(error => {
    console.log(error)
});
}