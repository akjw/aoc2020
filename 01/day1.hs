find2020Pair :: [Int] -> Int
find2020Pair nums = head [x*y | x <- nums, y <- nums, x + y == 2020]

find2020Triple :: [Int] -> Int
find2020Triple nums = head [x*y*z | x <- nums, y <- nums, z <- nums, x + y + z == 2020]


rInt :: String -> Int
rInt = read

main :: IO ()
main = do 
   input <- readFile "input.txt"
   putStrLn "Part 1:"
   print $ find2020Pair $ map rInt . lines $ input
   putStrLn "Part 2:"
   print $ find2020Triple $ map rInt . lines $ input
  
  