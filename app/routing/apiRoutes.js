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
    //if (tableData.length < 5) {
      console.log("in post")
      findMatch(req.body);
      friendData.push(req.body);
      
      res.json(true);
      //console.log(friendData);
    //}
    
  })
};

function findMatch(userInp){
    //var diff = [];
    var diff = 0; // calculate total of difference b/w scores
    var matchCheck = [];
    console.log("userinp - ",userInp)
    console.log("friend data - ",friendData)
    for(i=0;i<friendData.length;i++){
        for(j=0;j<friendData[i].scores.length;j++){
            diff += Math.abs(friendData[i].scores[j]) - userInp.scores[j];
        }
        matchCheck.push(diff);
    }
    matchCheck.sort(function(a,b){
        return (a-b);
    })
    return(matchCheck[0])
}

