
var title = document.querySelector('.title')
var turn ='X'
var sqaures =[]
function end(num1, num2, num3){
  document.getElementById('item'+num1).style.backgroundColor = '#000';
document.getElementById('item'+num2).style.backgroundColor = '#000';
document.getElementById('item'+num3).style.backgroundColor = '#000';

  setInterval(function (){title.innerHTML += '.'}, 1000)
  setTimeout(function(){location.reload()}, 3000);

}
function winner(){
  
  for( let i=1 ; i<10 ; i++){
    sqaures[i]=document.getElementById ('item'+i).innerHTML 
    
  }
  if (sqaures[1]==sqaures[2]&&sqaures[2]==sqaures[3]&&sqaures[1]!='')
  {
    title.innerHTML= sqaures[1]+' is the winner'
    end(1,2,3)
  }
 if (sqaures[4] == sqaures[5] && sqaures[5] == sqaures[6] && sqaures[5] != '')
    {
      title.innerHTML = sqaures[5] + ' is the winner'
      end(4,5,6)
    }
 if (sqaures[7] == sqaures[8] && sqaures[8] == sqaures[9] && sqaures[7] != '')
    {
        title.innerHTML = sqaures[7] + ' is the winner'
        end(7,8,9)
    }
 if (sqaures[1]==sqaures[4]&&sqaures[4]==sqaures[7]&&sqaures[1]!='')
  {
    title.innerHTML= sqaures[1]+' is the winner'
    end(1,4,7)
  } 
if (sqaures[2] == sqaures[5] && sqaures[5] == sqaures[8] && sqaures[2] != '')
  {
     title.innerHTML = sqaures[2] + ' is the winner'
     end(2,5,8)
  }
if (sqaures[3] == sqaures[6] && sqaures[6] == sqaures[9] &&sqaures[6] != '')
 {
   title.innerHTML = sqaures[3] + ' is the winner'
   end(3,6,9)
 }
if (sqaures[1] == sqaures[5] && sqaures[5] == sqaures[9] && sqaures[1] != '')
   {
     title.innerHTML = sqaures[1] + ' is the winner'
     end(1,5,9)
   }
if (sqaures[3] == sqaures[5] && sqaures[5] == sqaures[7] && sqaures[5] != '')
     {
       title.innerHTML = sqaures[5] + ' is the winner'
       end(3,5,7)
     }
 
   
}
function game(id){
  let sqr= document.getElementById(id)
  if( turn ==='X' && sqr.innerHTML==''){
    sqr.innerHTML='X'
    turn='O'
    title.innerHTML=' now \'O\' will play '
  } else if (turn==='O' && sqr.innerHTML=='' ){
    sqr.innerHTML = 'O'
    turn = 'X'
    title.innerHTML = ' now \'X\' will play '
  }
  winner() 
}
