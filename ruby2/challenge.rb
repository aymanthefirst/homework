# #  test whether string is palindrome
def check aString
  if aString == aString.reverse
    return "this string is a palindrome"

  else
  return  "this string is not a palindrome"
  end
end
$stdout.puts "please provide the string"
$stdout.flush
aString = $stdin.gets.chomp

testing = check aString
puts testing

# write a program that prints a multiplication table for numbers up to 12
def calc num1
  for i in 0..12
      puts "#{i} * #{num1} = #{i*num1}"
  end
end

$stdout.puts "Please provide the number"
$stdout.flush
number = $stdin.gets.chomp.to_i

calc number
