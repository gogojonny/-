let outsideModel=(function(){
  let outsideModel={}
  let message='foo'
  console.log(message)
  outsideModel.message=message
  return outsideModel
})()