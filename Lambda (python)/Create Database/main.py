import boto3

dynamodb = boto3.resource('dynamodb', region_name = 'us-east-1')

def create(event, context):
    table = dynamodb.create_table(
        TableName = 'ARTIST',
        KeySchema = [
            {
                # Also known as Partition Key
                'AttributeName': 'GENRE',
                'KeyType': 'HASH'
            },
            {
                # Also known as Sort Key
                'AttributeName': 'NAME',
                'KeyType': 'RANGE'
            }
        ],
        AttributeDefinitions = [
            {
                'AttributeName': 'GENRE',
                'AttributeType': 'S'
            },
            {
                'AttributeName': 'NAME',
                'AttributeType': 'S'
            }
        ],
        # Defined in units per second
        ProvisionedThroughput = {
            'ReadCapacityUnits': 5, 
            'WriteCapacityUnits': 5
        }
    )

    return 'Table created successfully'