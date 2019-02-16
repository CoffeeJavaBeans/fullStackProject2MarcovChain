function getArray(str){
    str=str.toLowerCase();
    str=str.replace(/[^a-zA-Z]+/ig, " ");
    let arr=str.split(" ");
    return arr;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function makeDict(theArray){
    let dict={}
    for(let i=0; i<theArray.length-1; i++){
        if(theArray[i] in dict){ 
                dict[theArray[i]].push(theArray[i+1]); 
            continue;
        }else{ //insert it
            dict[theArray[i]] = [theArray[i+1]];
        }
    }
    //console.log(dict)
    return dict;
}

function makePoem(dictObj, startingWord='the', howManyWords=10){
    console.log(dictObj);
    let poem=[];
    let nextWord=startingWord;
    for(let i=0; i<howManyWords; i++){
        let randNextWord=dictObj[nextWord][getRandomInt(dictObj[nextWord].length)];
        poem.push(randNextWord);
        nextWord=randNextWord;
    }
    return poem;
}

function makePoemPretty(arr){
    let str='';
    for(let i=0; i< arr.length ; i++){
        if(i%7===0){
            str+="<br></br>";
        }
        str+=arr[i]+' ';
        
    }
    return str;
}

///////////////////
function writePoem(inp){
    let str =document.getElementById(inp).value;
    let arr=getArray(str);
    let arrLength=arr.length;
    let startingWord=arr[getRandomInt(arrLength-1)];
    let dict=makeDict(arr);
    let autoLength=parseInt(Math.floor(arrLength/4));
    let poem=makePoem(dict, startingWord,autoLength);
    let pretty=makePoemPretty(poem);
    document.getElementById("default").innerHTML = pretty;
    
}
