const AWS = require('aws-sdk');

function recordFileS3(filename, fileobject, bucketName){

    const AWSAccessKeyId = 'AKIAJA6JJY3R2GTACEIA';
    const AWSSecretKey = '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';

    const s3 = new AWS.S3({"accessKeyId":AWSAccessKeyId,"secretAccessKey":AWSSecretKey});

    const params = {
        "Bucket": "policy88i",
        "Key": filename,
        "Body": fileobject
    }

    s3.upload(params, function(err, data) {
        if (err) {
            throw err;
        }
        console.log('File uploaded successfully');
    }
}

module.exports(recordFileS3);