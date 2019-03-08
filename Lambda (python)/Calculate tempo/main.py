import logging
import util

logger = logging.getLogger()

def primer(event, context):

    try:
        n = int(event['number'])
        orginalN = n
        result = 'Similar Tempo(s): '
        
        while n / 2 > 10:
            number = n / 2
            stringNumber = str(number)+'BPM | '
            result += stringNumber
            n = number

        while orginalN * 2 < 999:
            number = orginalN * 2
            stringNumber = str(number)+'BPM | '
            result += stringNumber
            orginalN = number
        
        return util.jsonify(result)
        
    except ValueError:
        logger.error('User Input is not a number.')
        return util.jsonify('Please input a number [0-999].')