

exports = module.exports = {
    mul:function(a,b){
        return a*b;
    }
}

exports.add = function(a,b){
    return a+b;
  }
exports.sub = function(a,b){
    return a-b;
  }

  console.log('exports==',exports)
  console.log("require=",require)
  console.log("module=",module)
  console.log("__filename", __filename)
  console.log("__dirname",__dirname)