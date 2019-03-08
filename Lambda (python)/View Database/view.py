import boto3
import util
from boto3.dynamodb.conditions import Key, Attr

dynamodb = boto3.resource('dynamodb', region_name = 'us-east-1')

def view(event, context):
    table = dynamodb.Table('ARTIST')

    '''
    eq, lt, lte, gt, gte, begins_with, between

    and, or for multiple conditions
    '''
    data = table.scan(
        #Equal
        FilterExpression=Attr('AGE').gte(0)
    )

    artists = data['Items']

    return artists