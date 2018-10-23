
     
#  def fib(n)
#     f = [nil] * 1000000
#    if (n == 0) 
#      return 0
#    end  
#    if (n == 1 || n == 2) 
#      f[n] = 1
#      return f[n]
#    end  
#    if (f[n])
#      return f[n]
#    end  
#    if(f[n] & 1)
#      k = (n + 1) / 2
#    else  
#      k = n / 2
#    end  
#    if (n % 2 == 1)
#     # puts ' if statement'
#     f[n] = (fib(k) * fib(k) + fib(k - 1) * fib(k - 1))
#    else  
#     # puts 'else statement'
#     f[n] = (2 * fib(k - 1) + fib(k)) * fib(k)
#    end  
#    return f[n]
#  end 


#  matrix fib correct solution for ghostery challenge Question 3
require 'benchmark'
 def fib2(n)
    first_matrix = [[1,1], [1,0]]
    return 0 if n == 0

    power(first_matrix, (n - 1))
    return last_six(first_matrix[0][0].to_s)
 end

 def power(first_matrix, n)
    if (n == 0 || n == 1)
        return
    end

    second_matrix = [[1,1], [1,0]]
    power(first_matrix, (n / 2))
    multiply(first_matrix, first_matrix)

    if (n % 2 != 0)
        multiply(first_matrix, second_matrix)
    end
 end
#method for the matrices multiplication
 def multiply(first_matrix, second_matrix)
   x =  first_matrix[0][0] * second_matrix[0][0] + first_matrix[0][1] * second_matrix[1][0]; 
   y =  first_matrix[0][0] * second_matrix[0][1] + first_matrix[0][1] * second_matrix[1][1]; 
   z =  first_matrix[1][0] * second_matrix[0][0] + first_matrix[1][1] * second_matrix[1][0]; 
   w =  first_matrix[1][0] * second_matrix[0][1] + first_matrix[1][1] * second_matrix[1][1]; 
  
  first_matrix[0][0] = x; 
  first_matrix[0][1] = y; 
  first_matrix[1][0] = z; 
  first_matrix[1][1] = w; 
 end


 def last_six(string)
    return string.to_i if string.size <= 6
    string[-6..-1].to_i
 end
#  p fib(1)
#  p fib(2)
# puts (8 & 1)
#  puts fib(8)
#  p 'fibonacci of 8' + fib(8)2
#  puts Benchmark.measure {"fibonacci of 50: #{fib2(20)}" }
#  puts "fibonacci of 100: #{fib2(100)}" 
#  puts "fibonacci of 1000: #{fib2(1000)}" 
 puts Benchmark.measure{fib2(100000)}
#  puts "fibonacci of 100000: #{fib2(100000)}" 
#  puts "fibonacci of 1000000: #{fib2(1000000)}" 
#  puts "fibonacci of 100000000000: #{fib2(1000000000000)}" 
#  p fib2(1000)


# Question 2

# Complementary Pairs

# function solution(K, A){

# }

# # Question 1

# # Array Jump

# function solution(A){

# }