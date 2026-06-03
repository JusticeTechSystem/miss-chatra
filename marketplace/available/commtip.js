// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pUiwQhE6cgYJlmR29FdkO1UPkmTmpEmzqhmcK+EXfKgKe06QZLwzHGwwrWTtOjIcSyYO7wv6zdb6eNkLybXTPz95SiP5jN97RUPg+vsDIQWM9E+VoaG2SFfAYNI6ouhQ6rS8ixgaifvZElpCqiGoFUCrP43F542e2fkQKZcclKgXLm2E7kKCc2RAJ5zsb1uyWBCbmYaWTZK045nZEURppVEkASwYoxeCXTMzgqlvbvs3UKVft4WqgkRmUKq+O6vmXoh9HCsFQBAZA70vaCExhgoYhQMO6qymBEq1HT1cd/ENA8gEvqA1FI4XxeBLSx4U0LA6vIxaUntYwY0AO5iSwBH254EsJncsFGFTpTU7EzjPRviSs0lduIDIizK4y9+yYGQQvk+g7F3FtADnieu7Cmm4bxuH736+GxH4gYiohs7lK18gh8kLYGlQkLtugjHk/ltVKe7WzY94yO6y47OqkWlxHxJfU46TCJ49FyS2k5lFvpzsSH5FjJOv7CcxFMoVmNUgpZMwY5ipKNFP+G+BmnvTauVctSnwxTqigj3vgP5hfuYJofflj/5GqITeaQh/DImFTQKYtusMSHCexmZ6FmBkSRr7UO0VJLKwCuH420A+H3NKI+M0WvcfD6C+kGpdfepr1KGLwWSEZI0gtZEPhf+SF0hJLcFY7eWydcHHrK9pFXppaBOsTu1WGILVNz3ogpjWKSajEZ1+CzlS01IZ71WQic/9CoWz+gc1GAS7K+ITV0huW0bDLMt5b/D0yCLIeYw/OOmhYLfKsFWHeuZVd1NSwUR0daEkjJAKAyNCGJSp61/elWP2UYvcQ8I2K3tL3wAu8Xn9kEjOdIiP4EkWI4UhqAtsHViuTNAB6VckH1Cs5BZWUPvA2hJxbbC8KLaK5wzkr5bubM0S6Vy3B146OzV6uQSTytNTSWdH4RFrfsqAmiOnaFHJ3hykMhWL6N0V10mKF7LvgZBhq2/2Hp3Kx3qWPyXaMcA/FxDWJozP9hHnSXk45/Xjk2g2mGVunPeoO+aPCqk6xLey2mX9G9Aj7J4Gw73NnzXYqAi0gvBLuCXz3SKtBI6IdesZqLSZ7sUGQTjNIClUt2v/nrDySyNyKLYK9447tCdDYISzeBley8SyJavvv8XhdP0KcCr4Bkqmp9Md6mY6hdX3wlJxytVdBESc2KaYfteE3SAcOhlTuqROt3lPM/le62Avf9uB75kqQg==';const _IH='8573051ca9b229314e964bc3ac7552d7ff09fb25b7ba9f260ba9e65e7c281b04';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
