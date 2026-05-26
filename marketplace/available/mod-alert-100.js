// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yx0HphfrrVSgzYcPYayoG3kdQXD7XbIr4ORTFnkQLUMEoerPOmHMZsaUEx+MK3geKzzevlNtid//wsosPW2LNa5P87VZKoXrF5wMqX/9FbJTAynmwK1YjiS0IonvcNv0LLMeNb9X5eVolVF48C3XjqcrFz1TpEwjvja7ee0Fc+Qnr4G8k3dsvHuWJ63GXeYxl+IG+6zqgx7NA2hQdvuUa7dkAMK+TApenKrIgqjIye5VUBtJ9VjvZ5mz6BOux8lT+i7iccwiBMkiuvtB9BjVR2nQCg2v7JfDzKNu1xm1JwyNXV/gg6H9rUKAZGJ8iVuYkPviua5wyCeQfi5cO+VLGeJSjiR9K9ldP+EnSBwROZRw9LDN4WdC60oKLO12MR4+oiKK8zJvDtaieD7rHxr144zKq1erK/kagy49Of/vE+H0OfDs1d2tW4ogCDRmqBjDTaC+7Ld19U3ejQYULGl3x2QJte5Fy6lnMuK+eHSwkuNC09WANN1H/IItIDwIllYx3xSdj5F4i1/43LTzFY7+kp8Q4/XjOVU4PWTyssp26uck0v70gOhNsnbv+uxMgnUiaRHK1eZdboL6vOd6O+MhJnuB2TuamflieJnREfxWA4VsLAYBiuqRWcjrvhA5GCAF7abTAsxPQ8kCQ9RHtxVH+7ZS52qHfZ9j+OVabsEhIH7uTrkX5sbi+GBDu5nj32dk/y3p+ngt2xsKoleD5BjRNc0TBUUXxxv7E6ukaCTKlr0DhOKDoZ1XNTl5zakU1SkciU//edoNYT4gMaSEJrKfhquMNY8zQs/amdPih3VCETY7SotLcgWGWGj/Xk5Sh8E4wvqwTWtTZuQczwowyDrC8kM16PYBinQQlqfPUXPkR31TVcKPU6vVZWfx/r99bCxX6pYkXt+cEKoEYH7A9ukWUP2T10u6C5O/Hux9lMh6KqwwGLyArEmLzQO0ZoqQRpehJoIoxru35O2JQCXR34GE1awMJ9A+WbF0sUjUPPJREJ+tW1SguKlwa2BkUUvuL0udYTP0h93pkK30xJqQf+fu7hJnrqfwS/01hra5IHKKpP5gPzzzjZoBhx4jaKO8ClLw0t6ic0aaSg4PFqAjM/VqKW8mXHtZ1ef3g7+PRTl1+0skfDwpJwISL6yDxGPxbtq4d3NpmthgC3qcI17T5cYJmevNnXnHbt6Eebqz6Lp21haXOBxAUWRSLwfdDsF5INwp+gShz9ILsXmTpW9tlaH9sNqsveGD53M7wI/hPVKniB2ivISBX9FoVCwuyaioo99PPy0KvBuKe85+4T9UGKqmP14I/beWYQ5pDKpvICpjTAd+T+QYJSs0E+hNnVHUzWbrTZJENsGy1o9Jta0lrmblpu3w13R9UjFDae+nkFpo';const _IH='8d4cf4ab80afe3fead9aac2e49e41b418a7b64cb9e02893eef3461ddad1785c9';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
