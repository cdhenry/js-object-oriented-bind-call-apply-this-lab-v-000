function justInvoke(fn){
  return fn();
}

function setThisWithCall(fn, thisValue, arg){
//  debugger;
  return fn.call(this, arg) = thisValue;
}

function setThisWithApply(fn, thisValue, args){

}

function returnNewFunctionOf(functionToBeCopied, thisValue){

}
