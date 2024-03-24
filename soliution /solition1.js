let grade = 58
 
function gradingSystem(grade){

    if(grade> 79){
         
        console.log("A")
    }else if(grade>=60){

        console.log("B-")
    }else if(grade>=49){

        console.log("c-")
    }else if(grade>=40){

        console.log("D-")
    }else {
        console.log("E")
    }

}

gradingSystem(grade)