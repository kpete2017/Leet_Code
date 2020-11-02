import unittest
import mymodule

class MyModuleTest(unittest.TestCase):

    def test_calc_x(self):
        assert(mymodule.calc_x(2) == 4)

if __name__ == '__main__':
    unittest.main()