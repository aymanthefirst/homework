# puts "Hello world"
# anArray = ['1','2','3','4','5']
# puts anArray
# puts anArray.max
#
# i = 0
# while i < anArray.length
# item = anArray[i]
# puts "current item: #{item}"
#   i+=1
# end

# x = 5
# if x > 2
#   puts "x is greater than 2"
# elsif x <= 2 and x !=0
#   puts "x is 1"
# else
#   puts "i can't guess the number"
# end
#.....................................................................
#   largest 2
#
#
# maxNum = 0
# secondMax = 0
# anArray = [7,1,8,3,4]
# i  =0;
#
# while i < anArray.length
#   if anArray[i] > maxNum
#     maxNum = anArray[i]
#   end
# i+=1
# end
#
# i  =0;
# while i < anArray.length
#   if anArray[i] > secondMax && anArray[i] != maxNum
#     secondMax = anArray[i]
#   end
# i+=1
# end
#
#   puts maxNum
#   puts secondMax
#
#//................................................................
  smallest 2


  smallestNum = 100
  second = 100
  anArray = [7,1,8,3,4]

  i  =0;
  while i < anArray.length
    if anArray[i] < smallestNum
      smallestNum = anArray[i]
    end
  i+=1
  end

  i  =0;
  while i < anArray.length
    if anArray[i] < second && anArray[i] != smallestNum
      second = anArray[i]
    end
  i+=1
  end


  puts smallestNum
  puts second
