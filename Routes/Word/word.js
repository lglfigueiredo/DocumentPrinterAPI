const express = require('express');
const router = express.Router();

router.post('/', (req,res)=>{

    var PizZip = require('pizzip');
    var Docxtemplater = require('docxtemplater');
    
    var fs = require('fs');
    var path = require('path');

    const objreq = req.body;

    var template_name = getTemplate(objreq.template_code);

     //Load the docx file as a binary
    var content = fs.readFileSync(path.resolve('./Templates/Policy', template_name), 'binary');

    var zip = new PizZip(content);
    var doc = new Docxtemplater();
    doc.loadZip(zip);

    /*var jsonDocument;
    for(var attributename in objreq){
        jsonDocument += (attributename + " : '" + objreq[attributename] + "',");
    }
    jsonDocument = jsonDocument.substring(0,jsonDocument.length-1);

    jsonDocument = '{ ' + jsonDocument + ' }';*/
    
    //set the templateVariables
    doc.setData(
        //jsonDocument
     {   
        policy_n : objreq.policy_n
        ,issue_date : objreq.issue_date
        ,name : objreq.name
        ,birthdate : objreq.birthdate
        ,hashbchain : objreq.hashbchain
        ,person_address : objreq.person_address
        ,person_neighborhood : objreq.person_neighborhood
        ,person_zip : objreq.person_zip
        ,person_phone : objreq.person_phone
        ,person_email : objreq.person_email
        ,manufactor : objreq.manufactor
        ,model : objreq.model
        ,coverage_1 : objreq.coverage_1
        ,coverage_2 : objreq.coverage_2
        ,limit_1 : objreq.limit_1
        ,limit_2 : objreq.limit_2
        ,deductible_1 : objreq.deductible_1
        ,deductible_2 : objreq.deductible_2
        ,premium_1 : objreq.premium_1
        ,start_date : objreq.start_date
        ,end_date : objreq.end_date
    }
    );
    
    doc.render();

    var buf = doc.getZip().generate({type: 'nodebuffer'});

    // buf is a nodejs buffer, you can either write it to a file or do anything else with it.
    fs.writeFileSync(path.resolve('./Templates/Policy', 'output.docx'), buf);
    res.send({message: 'documento criado'})
})

function getTemplate(template_code){
    if (template_code == 'T1'){
        return 'T1_ApoliceCelular.docx';
    }
    else{
        return 'T1_ApoliceCelular.docx';
    }
}

module.exports = router;