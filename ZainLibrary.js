function bounceOff(v1,v2){
    if (v1.x - v2.x < v2.width/2 + v1.width/2
      && v2.x - v1.x < v2.width/2 + v1.width/2) {
    v1.velocityX = v1.velocityX * (-1);
    v2.velocityX = v2.velocityX * (-1);
  }
  if (v1.y - v2.y < v2.height/2 + v1.height/2
    && v2.y - v1.y < v2.height/2 + v1.height/2){
    v1.velocityY = v1.velocityY * (-1);
    v2.velocityY = v2.velocityY * (-1);
  }
}
  function isTouching(a1,a2) {
    if (a1.x -  a2.x < a2.width/2 + a1.width/2
      && a2.x - a1.x < a2.width/2 + a1.width/2
      && a1.y - a2.y < a2.height/2 + a1.height/2
      && a2.y - a1.y < a2.height/2 + a1.height/2) {
  
      return true;
  }
  else {
    return false;
  }
  }