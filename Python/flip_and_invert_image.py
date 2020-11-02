def flipAndInvertImage(A):
    result = []
    for x in range(len(A)):
        temp = [ele for ele in reversed(A[x])] 
        for j in range(len(temp)):
            if temp[j] == 1:
                temp[j] = 0
            else:
                temp[j] = 1
        result.append(temp)
    return result
                