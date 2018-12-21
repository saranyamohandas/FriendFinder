var friendData = require("../data/friends");
//var waitListData = require("../data/waitinglistData");

module.exports = function(app){
    app.get("/api/friends",function(req,res){
        res.json(friendData)
    });
    app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
    
      var getMatch = findMatch(req.body);
     
      friendData.push(req.body);
      
      //res.json(true);
      res.json(getMatch);
     
    //}
    
  })
};

function findMatch(userInp){
    
    var matchCheck = [];
    var rating = {};
    for(i=0;i<friendData.length;i++){
        var diff = 0;
        for(j=0;j<friendData[i].scores.length;j++){
            
            diff += Math.abs((friendData[i].scores[j]) - parseInt(userInp.scores[j]))
            
        }
        matchCheck.push(diff);
        
        
    }

   
    var getMin = Math.min(...matchCheck); //returns min arr
    var getData = matchCheck.indexOf(getMin);
    return(friendData[getData]);
  
}

