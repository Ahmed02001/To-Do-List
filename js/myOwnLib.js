function setCookie(cookieName,cookieValue,expiryDate){
    if(expiryDate == undefined){
      document.cookie = cookieName + '=' + cookieValue
    }
    else{
      document.cookie = cookieName + '=' + cookieValue + ';expireDate=' + expiryDate;
    }
}


function checkCookie(cookieName){
  
  let user = getCookie(cookieName);

  return (user != "") ? true : false;
}



function getCookie(cookieName) {
  let name = cookieName + "=";
  let cookies = document.cookie.split(';');

  for(let i = 0; i < cookies.length; i++) {
    let cook = cookies[i];
    while (cook.charAt(0) == ' ') {
      cook = cook.substring(1);
    }
    if (cook.indexOf(name) == 0) {
      return cook.substring(name.length, cook.length);
    }
  }
  return "";
}

function getAllCookieList(){
  let cookieObj = {};
  let cookies = document.cookie.split(';');
  cookies.forEach(cookies =>{
    let[name, value] = cookies.split('=');
    cookieObj[name] = value;
  });

  return cookieObj;
}



function deleteCookie(cookieName){
  if(checkCookie(cookieName)){
    let cookie = getCookie(cookieName);
    setCookie(cookieName, cookie, new Date("2/12/2000"))
    return true;
  }
  else{
    return false;
  }
}