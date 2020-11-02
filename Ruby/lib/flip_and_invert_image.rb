class FlipAndInvertImage
    def self.flip_and_invert_image(a)
        result = []
        i = 0
        while a.length() > i do
            reversedArray = a[i].reverse()
            j = 0
            while reversedArray.length() > j do
                reversedArray[j] = reversedArray[j] === 1 ? 0 : 1
                j += 1
            end
            result.append(reversedArray)
            i += 1
        end
        result
    end
end