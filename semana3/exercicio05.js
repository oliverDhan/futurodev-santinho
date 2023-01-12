//Closures

var family = function (){
    var  members = [];

    return{
        addMember: function(member){
            members.push(member);
        },
        getMembers: function(){
            for(var i=0; i<members.length; i++){
                console.log(members[i]+ "<br>");
            }
        }
    }
}

var myFamily = family();
myFamily.addMember("Daniel");
myFamily.addMember("Ana");
myFamily.addMember("Mãe");
myFamily.addMember("Rogerio");

myFamily.getMembers();
