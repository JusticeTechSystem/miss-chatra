// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSYfyVDeIz7pEfXzmnPsbyyjh/7B0h0tKCFM1m0k4l/+oFa+FY9W24xDSjLDFABexjeMWaZZcvUCgfTzqcWPfk6Iq8jC0b6RtHYF57RdCsHoJ0OzINXw1g/E+iuhsvcr5EMSG0S01amRQ9TeafWG+kn0AtW/xzOFgvl65Vvx9Ell1IwAtFO+v+1oqW+GFVfu5G52Ye6SwLl0U2aoWDUdaoCc+eFM+gktGvJ749AzTRT4c4Rm354PUOx6EWJQ0mH9I2al+pvu3D7GYtThqiY6Cqs44HfKR1Q2FdOV/zfo4AaePbCaz5xy6A96nMnuHXjjcNUb91BCd7p2ts33gzunEo+N9kItzZU7Uub+mazETba7P3+6NqjASfegDu2eHT6yLMcb0eW4ZuIVQxmZ21CD62hc+sfybgCQPSq6JMiiqUPsBz0mWyh5UxayfClJisJFVQ4RSP8DWilhzPP8qD3OFy5Q8VGGudGYiSPXBWGwETuw0QvtyphvIoAJY73HIdCkjCAyiW9Ul/kD/7g9QmbhvgDQrCJDjW8SmfcW6z3CCY0udeaXjPz3QbFcmCnRYP3ZUy9VrXF+AEWM70248D1WeSyvB89DJoHdnhHxdHSfUTXehJgzifYyuk7NSTBudT8IR7nizQ=';const _IH='90cb034842b9a6743418c906b82ddea1a215462bdc75ada4a443c841bf32399b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
