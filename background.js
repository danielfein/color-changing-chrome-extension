if(location.hostname.match('facebook.com')){

var html = document.documentElement.innerHTML;
html = html.replaceAll("3a5795", "f65f16");
document.getElementById('blueBarNAXAnchor').style.backgroundColor="#f65f16";
document.getElementById('blueBarNAXAnchor').style.backgroundImage="url()";



}

String.prototype.replaceAll = function(target, replacement) {
  return this.split(target).join(replacement);
};
