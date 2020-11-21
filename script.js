$(document).ready(function(){
    var pick="Choose";
    var drop_point="Choose";
    var cabType="Choose";
    var lugRate=0;
    $("#pickup").change(function(){
        pick = $(this).val();
    });
    $("#drop").change(function(){
        drop_point = $(this).val();
    });
    $("#cab").change(function(){
        cabType = $(this).val();
  
        if(cabType == 'CedMicro'){
            $("#lug").prop('disabled', true); 
        } else {
            $("#lug").prop('disabled', false); 
        }
    });
    $("#b1").click(function(){
        if (pick=="Choose"){
            alert("Please Enter Pickup Point");
            return;
        }
        if (drop_point=="Choose"){
            alert("Please Enter Drop Point");
            return;
        }
        if (cabType=="Choose"){
            alert("Please Select Cab");
            return;
        }
        lugRate = $('#lug').val();

        $.ajax({            
            type: "POST",
            url:  "farecal.php",          
            data:{
                pickUp:pick, drop:drop_point, cab:cabType, rate:lugRate
            },
            success: function(data) {
                $("#core").html(data);
            },
            error: function() {
              alert("Error");
            }
        });
      }); 
});