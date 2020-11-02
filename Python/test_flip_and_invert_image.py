import unittest
import flip_and_invert_image

class MyModuleTest(unittest.TestCase):
    def test_flip(self):
        input = [[1,1,0],[1,0,1],[0,0,0]]
        output = [[1,0,0],[0,1,0],[1,1,1]]
        assert(flip_and_invert_image.flipAndInvertImage(input) == output)

if __name__ == '__main__':
    unittest.main()