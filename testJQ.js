 $(function(){

var firstQ = $( "input[name='q1']" );
var secondQ = $( "input[name='q2']" );
var thirdQ = $( "input[name='q3']" );
var fourthQ = $( "input[name='q4']" );
var fifthQ = $( "input[name='q5']" );

$("#testresult").click(function() { 
    testResult(); 
    });

 
var result = 0;


function testResult() {
	result = 0;
	if ($("input")[0].checked) {
		result += 2;
	};
	
	if ($("input")[6].checked) {
		result += 2;
	};
	
	if ($("input")[11].checked) {
		result += 2;
	};

    checkRes = 0;
    
       if (!($("input")[12].checked) && ($("input")[13].checked) && !($("input")[14].checked) && ($("input")[15].checked)) {
        checkRes +=2;   
    };    
      if (checkRes > 1) result +=2; 
    
    checkRes = 0;
   
   
   if (($("input")[16].checked) && ($("input")[17].checked) && !($("input")[18].checked) && !($("input")[19].checked)) {
         checkRes +=2;  
    };
      if (checkRes > 1) result +=2; 

	
alert("Вы набрали " + result + " баллов " + result * 10 + "% правильных ответов!"); 
}
});