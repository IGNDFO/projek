// (4) Buat Schema Mahasiswa

const mongoose = require('mongoose')

const MahasiswaSchema = mongoose.Schema({
    // Buat Schema data

    email: {
        type: String,
        required: true
    },
    nama: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },

    alamat: {
        type: String,
        required: true
    },
    tempat_L: {
        type: String,
        required: true
    },
    tanggal_L: {
        type: String,
        required: true
    },
    nik: {
        type: String,
        required: true
    },
    asal: {
        type: String,
        required: true
    },
    j_pendaftaran: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Calon_Mahasiswa', MahasiswaSchema)