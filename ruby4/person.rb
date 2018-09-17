class Person
  attr_accessor :name, :sex, :age, :weight, :height

  def initialize name, sex, age, weight, height
    puts "I am a constructor"
      self.name = name
      self.sex = sex
      self.age = age
      self.weight = weight
      self.height = height
    end

  def say
    puts @name
  end

  def calculate_bmi
    (@weight / (@height  ** 2))
  end

  def calculate_calories
    if sex == "Male"
      bmr = 66.47 + (13.7 * @weight) + (5 * @height * 100) - (6.8 * @age)
    else
      @bmr = 655.1 + (9.6 * @weight) + (1.8 * @height * 100) - (4.7 * @age)
    end
    bmr.to_i
  end
  def displayInfo
  puts "name: #{@name} bmi: #{self.calculate_bmi} and colors: #{self.calculate_calories}"
  end
end
