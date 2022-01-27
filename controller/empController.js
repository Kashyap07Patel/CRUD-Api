const express = require('express');
const employeemodel = require('../db/EmployeeSchema')
function getPost() {
    console.log("Get Post Called")
    // res.send("Get post")
    let a = 5;
}
async function login(name, mobile) {
    let ins = await new employeemodel({ name: name, mobile: mobile });
    ins.save((err) => {
        if (err) {
            console.log(err)
            // res.send("Already Added")
            console.log("Already added")
        }
        else {
            // res.send("ok")
            console.log("LOGIN ok")
        }
    })
    // console.log("data "+data)
}
async function postdata(name, mobile) {
    let ins = await new employeemodel({ name: name, mobile: mobile });
    ins.save((err) => {
        if (err) {
            console.log(err)
            // res.send("Already Added")
            console.log("Already added")
        }
        else {
            // res.send("ok")
            console.log("POST ok")
        }
    })
    // console.log("data "+data)
}
async function editdata(id, name) {
    await employeemodel.updateOne({ _id: id }, { $set: { name: name } }, (err) => {
        if (err) throw err;
        else {
            // res.send("ok")
            console.log(" UPDATE ok")
        }
    })
}

async function deletedata(id) {
    await employeemodel.deleteOne({ _id: id }, (err) => {
        if (err) throw err
        console.log("no err")
    })
}
module.exports = { getPost, postdata, editdata, deletedata, login }