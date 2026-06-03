// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZM7vtPDMErrwLqHz0wHkQU02vQnrZF58dC0CX04AL6kFwo80SH/GJUwEmRtvR9ANIcU1ORapc6EYqtv3u60cePTJtDgBXvoQH2Y8rsGq+1+oCmvyYz6zIhkfFCay/HA4xz8LvUtwBP2owcBSpFtEcaLku00PfnA2dFCb6BJgGnJCRq+Hrt2Hc3Ioz/BeoP0JwqcKfyM7P8gEnehWwrN2G+1ugCp9NAYgU9vQFX8oFGR3L9gEyMPJmCOH4Y5ps7o+171z+9hFv1MkG9cjilS8Zz9dYma2is1q4c040cekC3ultc7aAIyagaFXaLeFO6QAifM5J7h8/UcgUJnwQAJcfL5nKx3AFppKGIg58E9qS2n8ZLWk7ibHlzEzXQ4l78YRL54rUspZ50cmVl9Jgg65iZ1Eu31bD/5X+MHIKkzPmGmFRymwTbxBTheJ0Ncp7okUvwzWVHgXh1TZFeVNOItQbqe0IEf9JEZ0sPdHmg9J9yTY2ITzHEj1/W4xja6x/50zw7FU3Y0TNbvpbuan5zWTqB390Jr1YuxZ/SiO8lQlftgf+O52qAE0ODuWVmDYe6magYaigs5RJlqZ82GyY1Yl051QxE4hRaxOAjyCH80ZpcPrV7eY0mw0FcH0zrQp0DTA0HKvrymn8JKrmkL8roNIq2V/Z0D/ApK27fa2iauIJkQTvcsh1BabbZu2kslCK0Xh1Mg7MIt8U6iYQ2UCEFn6USj4hkvxPnJybJN4tj4bJ0JsKuIgHCLaqj53H+RpHhb7FV+RbQ+lQhKgxZkQKtPrZMEgpJ46TcN6xPBYPF7Hwwo0unwHBhgE4ol9Z5RzlGiy37tp0mShef5Quih3WGl6nLrLEK3GUKE9gPUXNY+Hoh1cZ8zZviyTtuiYYynq0mA/ecDil4dqhm5d51uvx6SukuUAaw2BekoveyQurvJwkrMkzbSISyRi7B2nbUQ=';const _IH='a43814b2e3babfb4936cd90529129dd956af09225cb07279668decf6c3339563';let _src;

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
