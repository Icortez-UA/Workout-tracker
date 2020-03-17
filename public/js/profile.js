$(document).ready(function(){
    $('.datepicker').datepicker();
    $('.sidenav').sidenav();
    $('.timepicker').timepicker();
    $('.modal').modal();
    $.get("/api/all",function(res){
      console.log(res);
      for(i=0;i<res.length;i++){
        let data_id = res[i]["_id"];
        var newdate = res[i].workout[0].date
        var starttime = res[i].workout[0].startTime
        var endtime = res[i].workout[0].endTime
        var list = $('#workouts');
        let card1 = `<div class="card deleteCard" data-id= ${data_id}>`
        card1 += '<div class="card-content">'
        card1 += '<ul>'
        card1 += `<li>work-it day: ${newdate}</li>`
        card1 += `<li>work-it start time: ${starttime}</li>`
        card1 += `<li>work-it end time: ${endtime}</li>`
        card1 += '</ul>'
        card1 += `<button  class=" btn-floating btn-large waves-effect waves-light red"><i data-id= ${data_id} class="material-icons">delete</i></button>`
        card1 += '</div></div>'
        $(card1).appendTo(list);

      
      }
    })
    $('form').submit(function(event){
      
      var chosenDate = $("#date").val().trim();
      var start = $('#startTime').val().trim();
      var end = $('#endTime').val().trim();

      var workout = {
        date: chosenDate,
        startTime: start,
        endTime: end
      }

console.log(workout);
      $.post("/api/new",{workout},function(res){
        console.log(res);

      });
      setInterval(location.reload(),5000);

    })
    $(document).on("click","button",function(event){
      let data= $(event.target).attr("data-id");
      if(data===undefined){
        return;
      }else{      
        $.post("/api/delete",{data}).then(res=>{
        console.log(res);
        let deleted = $("[data-id="+res._id+"]");
        M.toast({html: 'deleted your wokrout'})
        deleted.remove();
      })
    }

   
      
      
    })
  });

