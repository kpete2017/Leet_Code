class SumZero
    def self.sum_zero n
        result = []
        if n % 2 == 1
            result << 0
        end
        i = 1
        while(i < n)
            result << i
            result << -i
            i += 2
        end
        result
    end
end