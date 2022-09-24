def count_bits(n):
    binary = bin(n)
    # Removes the prefix '0b' from the binary representation
    binary = list(binary[2:])
    
    count = 0
    for i in binary:
        if i == '1':
            count += 1
    
    return count