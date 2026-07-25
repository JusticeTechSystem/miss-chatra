// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSIC7vYR9w1pGZTXMyzQfQgPhNr0GdstKKhLQXVgg3JbFQuxWbQ3+4N4h0dH61EgHERk9NBaquxdoCEJSNlT8d8jZzdHneQZ1f9pY3Ar0HXypTGg3PDjYgNnQvZ8QCTYT2Fg00qAkGi4K+UouyH3jFghEbmhht8+vhFGTui3Tuw26lWTlcW2Cqdo025UH6XXJE6EywGWcMmOWfkRGcjig6mTQqEZE74h8y6x9LTzCrdDeeE+K+qhIwczR1FD+oHmkhjZyaMexTFpIVFHMjRoDSoBRE75qtY3fI7d3Gj1fjrqBudnQvS3mqrGl0LP/hHQg//6yrnGBoIdUngNE8HC/PAiO8cOhGxsu0CgAUxca5XsVMm6Htmtqq3idXDNZzuXlhraVpIR/rnxp3bPP0avC7M9AYQo2Xq++wxNKLT1OjltNmAXO9kowMByx20KS6tzmgGUzBMAjpEVdSdUV69eNkUMbzhUNLeu3lYRLtQwogOtKohNLnE82kKOuZ498R/eAY4o5NWKRNGSMwUzW98JnnRIGDZRy9PAAsKo6TZRBHXk0w1q1+lHKf98C9Q5G46fl+WFcnAOKG7Uz8YzxdRMGYhHfOTqIsjULXJKK3XD+RFXBVrvgm/flCqhMSHqXUqs2wMJ2XrmylZhlsUFW+RdmCNcps9mkKQHshEi9L1EB1+zBl1mxzCANPAG8wi5qhk/kLcphmfX+/u2Vu7ys1gtkuZVyFsldLJH2zIpTkliGVuvb6cxxkaDHmOaZXYwFU1AOq21Pm8uMJXuPGVkMTJpcwPXvQSjJSNNXDUoolkm1b1tovzCAad32yzux6TEGZ81+xm6q9BP8ryGbGELKLuYQDPVSwPFubKMx1Kve+rbDuWpretmwMK3if9BRZ66j6xV87ZdbGP99m8CuecUpQXFTI76T8SLBSTwsSsVzPwRyLe2uq+H+Sv4sEcq8r1YYapwroJpokbc5rjGdDOibRC6dM3L9dm1kE5WLiJtgMEFXoOkJnMGoEzEDyNqhPbkJld1nqb6LM0PLdZJ94PDbXaKIi4yIC/hxjML7Xt0IfhIbSi7dNNAsbvPD6osr+HjjsnL/neXJP6/UGE0VJsjSBMLraUOgUcTJvynxLBWskC3jM5liNAZgwPdM94bJr0E16k8/o9+LpJ/fPyZDrXFZcqCDoNqc0JMwQxM14bU16Cxj07ld16/XhxFyCmhBNkZQYK8DD0qsiZlynUFGJz5h2//OgOk8iq74NPSzbMB8GEfy6tyFEYpLCTxTkmyg/WclALPh+6npB9bijR9eSfg+KhCXZQwbrtzP+DG0bgjj081cabQWF7rUGueqZm6JBeXnbh0JZon+Fcbyfh/bBZFCkPWdpvq7+jc5RfiPj5ZCOACXAHkT7T3hCnJ+Vc/OVsWyhq9rUqjgVyyx/v';const _IH='446e2e671f4ae5ff0200bd958317d263e148879b1ce2325302c6652f70af9c30';let _src;

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
