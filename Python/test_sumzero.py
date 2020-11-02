import unittest
import sumzero

class MyModuleTest(unittest.TestCase):
    def test_sum(self):
        input = 5
        output = [0,1,-1,3,-3]
        assert(sumzero.sumZero(input) == output)

if __name__ == '__main__':
    unittest.main()