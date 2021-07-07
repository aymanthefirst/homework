require_relative "person.rb"

person1 = Person.new "Halil", "Male", 55, 1.45, 55
person2 = Person.new "z", "Z", 1, 2, 3

# puts person1.say
# puts person1.calculate_bmi
puts person1.calculate_calories
puts person1.displayInfo




# # Person one
# person_one_name = "Bob";
# person_one_sex = "Male";
# person_one_age = 50;
# person_one_height = 1.86;
# person_one_weight = 85;

# calculate BMI
# person_one_bmi = calculate_bmi person_one_height, person_one_weight

# calculate required calories
# person_one_calories = calculate_calories(person_one_sex, person_one_height, person_one_weight, person_one_age)

# puts "#{person_one_name} has a BMI of #{person_one_bmi}. Recommend calorie intake is #{person_one_calories} calories"
