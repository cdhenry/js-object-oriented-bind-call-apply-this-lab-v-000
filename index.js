function justInvoke(fn){
  return fn();
}

function setThisWithCall(fn, thisValue, arg){
  return fn.call(this, thisValue, arg);
}

function setThisWithApply(fn, thisValue, args){

}

function returnNewFunctionOf(functionToBeCopied, thisValue){

}
