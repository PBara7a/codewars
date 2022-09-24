def duplicate_encode(word):
    word = word.lower()
    encode = ''
    
    for i in word:
        if word.count(i) > 1:
                encode += ')'
        else:
                encode += '('
    return encode   