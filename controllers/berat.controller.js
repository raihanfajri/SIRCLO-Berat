var express = require('express'),
	router = express.Router(),
    sequelize = require('../connection'),
    berat = sequelize.import('./../models/berat.model');

class BeratController{
    constructor(){

    }
    /* Create new record */
    create(req, res){
        berat.create({
            tanggal : req.body.tanggal,
            max : req.body.max,
            min : req.body.min
        }).then(result => {
            let message = "Data berat baru berhasil ditambahkan!"
            res.status(201).json({status: true, message: message, data: result});
        }).catch(error => {
            let message = "Data berat baru gagal ditambahkan!"
            res.status(500).json({status: false, message: message, data: error});
        });
    }

    /* Update a record where tanggal = req.tanggal */
    update(req, res){
        berat.update({
            max : req.body.max,
            min : req.body.min
        },{
            where : { tanggal : req.body.tanggal }
        }).then(result => {
            let message = "Data berat berhasil diupdate!"
            res.status(201).json({status: true, message: message, data: result});
        }).catch(error => {
            let message = "Data berat gagal diupdate!"
            res.status(500).json({status: false, message: message, data: error});
        });
    }

    /* Show all berat data descending ordered by tanggal */
    showAll(res){
        berat.findAll({
            order : [
                ['tanggal', 'DESC']
            ]
        }).then(result => {
            let message = "";
            if(result.length == 0){
                message = "Tidak ada data dalam database!";
                console.log(message)
                res.json({empty: true, message: message, data: result});
            }else{
                message = "Data ditemukan!";
                res.status(200).json({status: true, message: message, data: result});
            }
        }).catch(error => {
            let message = "Gagal mengambil data!"
            res.status(500).json({status: false, message: message, data: error});
        });
    }

    /* Show detail of a record depends on tanggal */
    showDetail(req, res){
        let tanggal = new Date(req.params.tanggal)
        if(tanggal == null){
            let message = "Invalid input!";
            res.status(400).json({status: false, message: message, data: null})
        }
        berat.findOne({
            where: {
                tanggal : tanggal
            }
        }).then(result => {
            let message = "";
            if(result == null){
                message = "Tidak ada data dalam database!";
                console.log(message)
                res.json({status: true, message: message, data: result});
            }else{
                message = "Data ditemukan!";
                res.status(200).json({status: true, message: message, data: result});
            }
        }).catch(error => {
            let message = "Gagal mengambil data!"
            res.status(500).json({status: false, message: message, data: error});
        });
    }
}
module.exports = BeratController;