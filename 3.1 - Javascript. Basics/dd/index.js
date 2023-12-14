function search(files) {
  let path="";
  for(let key in files){
   
    if(files.hasOwnProperty(key)){
      if(key.includes(".")){
      
        return key;
      }
      else{
        path+= "/"+search(files[key]);
      }
    }
    if(!path.includes("."))
    path = "";
  }
  if(path.includes("."))
  return path
else { 
return "";
}
}


let files = {
  'New folder': {
    'New folder': {}
  },
  'New folder (1)': {
    'New folder': {
      'funnyjoke.txt': 'lol i pranked you!!!'
    }
  },
  'New folder (2)': {}
};
console.log(search(files));