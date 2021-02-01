// Progression #1: Greatest of the two numbers
 
var greatestOfTwoNumbers = (num1,num2)=>
{
  if(num1>num2)
  {
    return num1;
  }
  else
  {
    return num2;
  }
}


// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

var findScaryWord = (words) => 
{
  if(words.length == 0) //return null if array is empty
  return null;
  var tempMax ="";
  for ( let i=0 ; i <words.length ; i++) //iterate till array length
  {  
      if(words[i].length > tempMax.length)  //compare from 0 index names with empty string tempmax & store the max name in tempMax for further iteration comparison
      {
        tempMax = words[i];
      }
  }
  return tempMax; // returns max value stored in tempMax after the full loop completion 
}


// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

var netPrice = (numbers)=>{
   if(numbers.length == 0)
   {
      return 0;
   }
   else
   {
      return numbers.map ((num)=>{
        return num;
        }).reduce((total, num) =>total + num)
  }
}
 
// Progression #3.1: 
const mixedArr = [63, 122, 'audi', 61, true, 'volvo', '20', 'lamborghini', 38, 156,[]];

var add = (mixedArr) =>
{ 
  var nTotal = 0;
  if(mixedArr.length == 0)
  {
    return 0;
  }
  else
  {
      for(let i=0 ; i < mixedArr.length ;i++)
      {
        if(typeof(mixedArr[i]) == "object" || typeof(mixedArr[i]) == [])
        {
           return "Unsupported data type sir or ma'am";
        }
        if(typeof(mixedArr[i]) == "string")
        {
            nTotal +=mixedArr[i].length;
        }
        else if(typeof(mixedArr[i]) == Boolean)
        {
            if(mixedArr[i]==true)
            {
              nTotal += 1;
            }
            else
            {
              nTotal += 0;
            }
        }
        else
        {
            nTotal += mixedArr[i];
        }
      }
      return nTotal;
}
}

// Progression #4: Calculate the average
// Progression 4.1: Array of numberss
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
var midPointOfLevels = (numbersAvg) =>{
  var nTotal =0;
    if(numbersAvg.length == 0)
    {
      return null
    }
    else
    {
      nTotal = netPrice(numbersAvg);
      return (nTotal/(numbersAvg.length));
    }
}

//const mixedArr = [6, 12, 'miami', 1, 'barca', '200', 'lisboa', 8, false];
function avg(mixArrayAvg)
{
    var total=0;
    if(mixArrayAvg.length==0)
    return null;
    for(let i=0 ; i < mixArrayAvg.length ;i++)
    {
        if(mixArrayAvg.length === 0)
        {
          return null;
        }
        else if(typeof(mixArrayAvg[i]) == "string")
        {
          total +=mixArrayAvg[i].length;
        }
        else if(typeof(mixArrayAvg[i]) == Boolean)
        {
          if(mixArrayAvg[i]==true)
          {
            total += 1;
          }
          else
          {
            total += 0;
          }
        }
        else
        {
          total += mixArrayAvg[i];
        }
   }
   return parseFloat((total/(mixArrayAvg.length)).toFixed(2)); //fixed added for value upto 2 decimals
}



// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

var averageWordLength = (wordsArr) =>
{
  //var nSum = 0;
  if(wordsArr.length == 0)
  {
    return null;
  }
  else
  {
    // for(let i = 0 ;i<wordsArr.length ;i++)
    // {
    //   if(typeof(mixedArr[i]) == "string")
    //   {
    //     nSum += mixedArr[i].length;
    //   }
    // }
    // return (nSum/(mixedArr.length));
    // Sum up all the quotes lengths
      const totalAverage = wordsArr.reduce(function (sum, words) 
      {
        return sum + words.length;
      }, 0);
      //Calculate avg length of the quotes
      return (totalAverage / wordsArr.length);
  }
}


// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];

var uniqueArray =(wordsUnique) =>{
  var arr = []; 
  var tempString ="";
  if(wordsUnique.length == 0)
  {
      return null;
  }
  else
  {
    for(let i = 0 ; i<wordsUnique.length ;i++)
    {
        if(arr.indexOf(wordsUnique[i])==-1)
        {
          arr.push(wordsUnique[i]);
        }
    }
    return arr;
  }
}

// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
var searchElement =(wordsFind,word)=>{
  var bIsFound = 0;
  if(wordsFind.length == 0)
  {
      return null;
  }
  else
  {     
    for(let i = 0 ; i<wordsFind.length ;i++)
    {
      if(word == wordsFind[i])
      {
        bIsFound = 1;
      }
    }
    if(bIsFound == 1)
    {
      return true;
    }
    else
    {
      return false;
    }
  }
}




// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];
function howManyTimesElementRepeated(wordsCount,wordToSearch)
{
    var nCount = 0;
    if(wordsCount.length == 0)
    {
      return 0; 
    }
    else{
      for(let i=0;i < wordsCount.length; i++)
      {
        if(wordsCount[i] == wordToSearch)
        {
          nCount ++;
        }
      }
      return nCount;
    }
}

// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];

function maximumProduct()
{
  return 1
}
