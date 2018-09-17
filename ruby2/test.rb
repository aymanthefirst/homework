# # puts "hello world"
# my_name = "ayman"
# puts "hello #{my_name}"
# first_num = 5.7
# second_num =3
# puts first_num + second_num
# puts "division #{first_num.to_f/second_num}" # to float
# # to string .to_s
# # to intiger .to_i
# puts first_num.ceil
# # puts first_num.methods
# # question mark means true or false
#
# puts "foo".is_a? String
# puts "foo".length
# puts "foo".downcase
# # puts "foo".uppercase
# puts "foo".reverse
# puts "foo".taint
# my_label = :text # static or symbol in ruby
# puts my_label
#
#
# ar = [1,4,5,6,:my_label]
# puts ar.last
# puts ar.pop
# puts ar.shift # oposite to pop
# puts ar.class
# puts my_name.class
#
#
# # map with key value
# person = {
#   :name=> "Halil",
#   :age=> 55
# }
# puts person[:name]
# # don't for got to use [:name] needs the : or there will be an eror
#
# puts "person is #{person[:name]} and age is #{person[:age]} "
#
# person2 = {
#   name: "dan",
#   age: 33
# }
#
# puts "person is #{person2[:name]} and age is #{person2[:age]} "
#
# 100 car
#
# number = 100
# item = ""
# if number > 1000000
#   item = "house"
# end
# if number < 1000000 && number > 5000000
#   item = "boat"
# end
# if number < 200000 &&  number > 200000
#   iem = "car"
# end
# if number < 200000 && number > 300000
#   item = "bank"
# end
# if number < 300000
#   item = "life"
# end
#
# puts item
# name = gets
# # puts greeting.chars.sort.join
# # if name starts with a or ends with n say hello, if not say hi
# if  name[0] == "a" || name[0] == "A" || name[name.length-2] == "l" || name[name.length-2] == "L"
#   puts "hello #{name.capitalize}"
# else
#   puts "hey #{name.capitalize}"
# end

# x = "3000"
# case x
# case 1000000..(Float::INFINITY)
#   puts "house"
# when 500000..100000
#   puts "boat"
# when 200000..500000
#   puts "car"
# when 200000..300000
#   puts "bank"
# when -(Floar::INFINITY)..30000
#   puts "life"
# else
#   puts "ERROR ERROR"
# i=0
# loop do
#   puts "Smth"
#   i+=1
#   if i>5
#     break
#   end
# end
# ar = [1,2,3,4,5,6,7,8,9,10]
# i=0
# while i<10 do
#   # puts ar[i]
#   puts "#{ar[i]}"
#   i+=1
# end

# find sum of elements
ar = [1,2,3,4,5]
# i = 0;
# sum = 0
# begin
# sum = sum+ar[i]
# i+=1
# end while i<ar.length
# puts sum
# mean = sum/2
# puts mean
#
#print elements on odd positions
# inverse loop
# i = 0
# until i>ar.length do
#   if i%2 == 0
#       puts ar[i]
#
#   end
#   i+=1
# end
# begin
#   puts ar[i]
#   i+=2
# end until i>ar.length

# for i in 0..ar.length
#   puts ar[i]
# end
# for i in "a".."z"
#   puts i
# end
# (3..7).each do |i|
#   puts i
# end

# ar.each_with_index do |value, index|
#   puts value
#   puts index
# end

# ar2 = ["halil","ayman","three"]
# reverse = ar2.map do |word|
#  puts word.reverse
# end

# ar = [1,2,3,4,5,6,7,8]
# sum = ar.reduce (0,:+)
# puts sum

# sum = ar.reduce 1 do |total, number|
#   total*number
# end
#   puts sum
# s= sum 3,5
#
# def sum num1,num2
#   num1+num2
# end
#
# su = sum 3,5
# puts su

# weight = 100
# height = 1.50
# weight = weight*0.45
# height = height*0.025
# height = height*height
# bmi = weight/height.to_f
# puts "height: #{height} weight: #{weight} bmi: #{bmi}"
#
# distance = 6
# fuelEf = 3
# costPG = 5
# speed = 67
# if speed > 60
#   for i in 60..speed
#       fuelEf -=2
#       i+=1
#   end
# end
# time = speed/distance.to_f
# price = costPG/fuelEf.to_f
#
# puts "You're trip will take #{time.to_f.round(2)} hours and cost #{price.to_f.round(2)}"
# require "natural_time.rb"
# require 'rainbow'

# puts NaturalTime.to_sentence(65)


# puts Rainbow("this is red").red + " and " + Rainbow("this on yellow bg").bg(:yellow) + " and " + Rainbow("even bright underlined!").underline.bright
#
# "this string".red
# # => \e[31mthis string\e[0m
# "my string".blue
# # => \e[34mmy string\e[0m
# # etc...
#
# require 'colorize'
#
# String.colors                       # return array of all possible colors names
# String.modes                        # return array of all possible modes
# String.color_samples                # displays color samples in all combinations
# String.disable_colorization         # check if colorization is disabled
# String.disable_colorization = false # enable colorization
# String.disable_colorization false   # enable colorization
# String.disable_colorization = true  # disable colorization
# String.disable_colorization true    # disable colorization
#
# puts "This is blue".colorize(:blue)
# puts "This is light blue".colorize(:light_blue)
# puts "This is also blue".colorize(:color => :blue)
# puts "This is light blue with red background".colorize(:color => :light_blue, :background => :red)
# puts "This is light blue with red background".colorize(:light_blue ).colorize( :background => :red)
# puts "This is blue text on red".blue.on_red
# puts "This is red on blue".colorize(:red).on_blue
# puts "This is red on blue and underline".colorize(:red).on_blue.underline
# puts "This is blue text on red".blue.on_red.blink
# puts "This is uncolorized".blue.on_red.uncolorize
#
rspec ./spec/person_spec.rb:11 # Person name should be a string
"ayman"./spec/person_spec.rb:11
