require 'spec_helper'
require 'flip_and_invert_image.rb'

describe FlipAndInvertImage do
    it 'Flips and Inverts a matrix' do
        input = [[1,1,0],[1,0,1],[0,0,0]]
        output = [[1,0,0],[0,1,0],[1,1,1]]
        expect(FlipAndInvertImage.flip_and_invert_image input).to eq output
    end
end