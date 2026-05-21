function JumpUrl(url){
    if(typeof window.flutter_inappwebview!="undefined"){
        window.flutter_inappwebview.callHandler('JumpUrl',url).then(function(result) {
                
        });
    }else{
        window.location.href=url; 
    }
}
async function IsInstall(package) {
    if(typeof window.flutter_inappwebview!="undefined"){
        return await window.flutter_inappwebview.callHandler('IsInstall',package);
    }
}
function UrlJump(url){
    if(typeof window.flutter_inappwebview!="undefined"){
        window.flutter_inappwebview.callHandler('UrlJump',url).then(function(result) {
                
        });
    }else{
        window.location.href=url; 
    }
}
function OpenUrl(url){
    window.location.href=url; 
}
function Back(){
    if(typeof window.flutter_inappwebview!="undefined"){
        window.flutter_inappwebview.callHandler('Back').then(function(result) {
                
        });
    }
}
function Exit(){
    if(typeof window.flutter_inappwebview!="undefined"){
        window.flutter_inappwebview.callHandler('Exit').then(function(result) {
                
        });
    }
}