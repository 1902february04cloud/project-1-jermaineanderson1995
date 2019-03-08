import boto3
import util
import logging
import botocore

s3 = boto3.resource('s3')

def handler(event, context):
    
    
    try:
        # Check if input was a string and add extension
        name = str(event['name'])
        image = name+'.png'
    except ValueError:
        # Input was not a string
        logger.error('Input name is not a string.')
        return util.jsonify('Please input a string only!')
    
    try:
        # Check if image exist
        s3.Object('music-jermaine-anderson', image).load()
        return util.jsonify('https://s3.amazonaws.com/music-jermaine-anderson/'+image)
        
    except botocore.exceptions.ClientError as e:
        if e.response['Error']['Code'] == "404":
            # The object does not exist
            return util.jsonify('The Image Does Not Exist!')
        else:
            # Something else has gone wrong
            return util.jsonify('Lambda Function Error!')