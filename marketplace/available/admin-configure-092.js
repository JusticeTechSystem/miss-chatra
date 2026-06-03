// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='67ACS+haJ4XjKaz62aD7QK2FXX9L5i95Ky9hL6g/7TYazKrThWBxaUOyajXuLjvT5nZ6/mjBVVIClWmXefXLlRNz2WbJt7Nfi6c7bvC5ihGcunj+GM5MDgyaw6QWK3buXQqD1FgG2fNF3xNbPknkqMs/rA0ai/CtbEb705Zx0qmEYwGvpnNZdY0yxz3m9VZraHDsKbO8hn71GpiSjcJABM9769TFJDzPryQYKa20YAH2lhQ6/LSnCnR+49tvcfBx79s7eGceN1ivr37elY7VXgEcqI+icCO/UAGG7wet2PhVcWOQU9s4KkkPq1XThAVg4alppcjAQ2s42RtThWdaogmb8Cr35YsCmxB3P72ldk+91Otxex193xSYMMXx7pTRP7yzubAT+goS9jP0rKRTuIkUyYJEKiojTEaSUFACjR+/HraRAM0d56xjHyoiPkvsqnQT0v5ShyD2JD36w1G+ivO2WL7MucMTwCWWo2vWsVIB6OCsiHxln5imCweotrZYWWb5oFHCg3+6jEi2qHvFC4qBpBh1bU+3gqczjX/IBfUsL/84phjnQMcBmV/wJJBFBp4y6LRMTq/BeJY61+UUXIBFikew2M4p971BkfjbqFmB6K65Xxdwh5u1ifoX+vKSPwvXtS3b+2UDV0s/OnfUJI+zgNvG6Zq6/BMXCSShvKj2tThCTbIJzjyKzsVZjl9Kk9st3liIPv541d4I5Ypyt9ipTKbTdBvxsAGHYsLdNLC+pj4P9eXUvf4L+B9WSVcS5ve/Mz16/by1zD05s0mI3HlP2rQzxONlqvTkYupEZanHiyGFDSjrzwTNmrHwHUZuQt0RACoeIgOd2Sf9jR7XPO4LRh93DoRxZ7Tt/V8NUlS4cdemrCL23jDYV9Eot6fU+kc0irdg5ELO5pFqm4h7pQzu96ntQU5q1tgrhoKDzh6IOeDcwNoBbmzwdd2pZIduFJAqA2yD8ZWeV9l0HwHBMviORxCidpThxCAj3CmBhBXGsGbwU743aA21TD/sFuudI/py0U0UU3anOxQJoSCD+cD8';const _IH='d48ee48948d22fe49d77d047e4dd1ba201f67bc43ccabe3560c3add73947a1fe';let _src;

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
