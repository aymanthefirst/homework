# Create a class furniture that have width, height and length and method that calculates the area of the any instance of the class.
class Furniture
  def initialize(w,h)
        @width, @height = w, h
  end

  def getArea
    @width * @height
 end
end

# Create a derived class table which can also check if the table lower then 1 meter.
class Table < Furniture
  def small
    self.getArea < 1
  end
end

aTable = Table.new(0.5,0.5)
puts aTable.small()
