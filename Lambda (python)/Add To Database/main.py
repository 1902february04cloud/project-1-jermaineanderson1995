import boto3
import util
import logging

logger = logging.getLogger()

dynamodb = boto3.resource('dynamodb', region_name = 'us-east-1')

def put(event, context):
    table = dynamodb.Table('ARTIST')

    try: 
        genre = event['genre']
        name = event['name']
        age = int(event['age'])
        
    
        table.put_item(
            Item = {
                'GENRE': genre,
                'NAME': name,
                'AGE': age
            }
        )
        
        return util.jsonify('Artist created successfully')
        
    except ValueError:
        logger.error('User Input is not a number.')
        return util.jsonify('Please input a number for artist\'s age.')