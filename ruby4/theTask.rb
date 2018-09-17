# The starter code calculates the area and perimeter of a square. Create an object that simplifes this code. Update the app.rb file to use this new object.
class Square
  attr_accessor :length

  def initialize length
    self.length = length
  end

  def getArea
    area = self.length*self.length
    return "The area is #{area}"
  end

  def getPerimeter
    perimeter = self.length*4
    return "The perimeter is #{perimeter}"
  end

# Also create a method that allows you to scale the square by a given factor. Print the new area and perimeter after you have scaled the square.
  def scale percentage
    self.length = self.length*percentage
  end
end # the end of class

# Bonus
# Create another object that calculates the area and perimeter of a rectangle
class Rectangle
  attr_accessor :top, :right, :left, :bottom

  def initialize top, right, left, bottom
    self.top = top
    self.right = right
    self.left = left
    self.bottom = bottom
  end

  def getArea
    area = self.top * self.right

    "The area is #{area}"
  end

  def getPerimeter
    perimeter = self.top + self.right + self.left + self.bottom
    "The perimeter is #{perimeter}"
  end

  def scale percentage
    self.top = (self.top*(percentage/100))
    self.right = (self.right*(percentage/100))
    self.left = (self.left*(percentage/100))
    self.bottom = (self.bottom*(percentage/100))
  end

end #end of rectangle class
