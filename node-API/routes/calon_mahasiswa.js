// (5) Buat router Mahasiswa
const express = require('express')
const router = express.Router() 
const Calon_Mahasiswa = require('../models/Calon_Mahasiswa')

// Create 
router.post('/', async(req, res) => {
    // tampung input mahasiswa 
    const mahasiswaPost = new Calon_Mahasiswa({
        email: req.body.email,
        nama: req.body.nama,
        gender:req.body.gender,
        alamat: req.body.alamat,
         tempat_L: req.body.tempat_L,
         tanggal_L: req.body.tanggal_L,
         nik:req.body.nik,
         asal:req.body.asal,
         j_pendaftaran:req.body.j_pendaftaran

        
    })

    try {
        // simpan data 
        const calon_mahasiswa = await mahasiswaPost.save()
        // response
        res.json(calon_mahasiswa)
    } catch (error) {
        res.json({message: error})
    }
})

router.get('/',async(req,res)=>{
    try {
        const calon_mahasiswa=await Calon_Mahasiswa.find()
        res.json(calon_mahasiswa)
    }
    catch(error){res.json({message:error})
    }
})

router.delete('/:Calon_mahasiswaId',async(req,res)=>{
try{
    const calon_mahasiswa= await Calon_Mahasiswa.deleteOne({_id:req.params.Calon_mahasiswaId})
    res.json(calon_mahasiswa)
    }
    catch(error){
        res.json({
            message:error
        })
    }
})

router.put('/:Calon_mahasiswaId', async(req,res)=>{
    const data={
        email: req.body.email,
        nama: req.body.nama,
        gender:req.body.gender,
        alamat: req.body.alamat,
         tempat_L: req.body.tempat_L,
         tanggal_L: req.body.tanggal_L,
         nik:req.body.nik,
         asal:req.body.asal,
         j_pendaftaran:req.body.j_pendaftaran
    }
  
    try{
        const calon_mahasiswa = await Calon_Mahasiswa.updateOne({_id:req.params.Calon_mahasiswaId}, data)
        res.json(calon_mahasiswa)
    }
    catch(error){
        res.json({
            message:error
        })
    }
})

module.exports = router