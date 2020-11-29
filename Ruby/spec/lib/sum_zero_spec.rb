require 'spec_helper'
require 'sum_zero.rb'


describe SumZero do
    it 'creates a an array containing n unique integers that add to 0' do
        input = 5
        output = [0,1,-1,3,-3]
        expect(SumZero.sum_zero input).to eq output
    end
end