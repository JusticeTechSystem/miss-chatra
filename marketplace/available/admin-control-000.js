// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR5ZbrHXnNSeJmKjDYMUC/Hu7wt+IP8BxgyPxpvq4Hg5ffg9AYve4JaDIEvcKV8qoQ0bJQf6+eczo70nC8BQLZY5LkEqtI1+vxLl4TJMSJSUz69S/Z8v4LbVHUv2BiEnEPiiVLVfvQjQkIuIOyVXR69jaHkrnsDBlc8yaGmAdkyzeDP0uHSZARUi25tYKclVtRRpAvXqI11bk+0rq2aa9qXWzCSWVm1dQ8Q7cTOdA2aX7aYK9sIfl8/CQLnOy2O83rnYwu9+d3TWt0iDSKkRxwpf8KnsmayUqSLSWIY8TCkNVOoy3Y0HVnKhuk4gyzVYU2gy5fXIzy1tUx+UBldPuBL+FtpDbwQi764frBbJFBBUY3I+c1kAqk/6Zsw7vhw/8WvvNG0u0aOrO8IZqYKfRNVAu7T9lFxoZi2usWEzyvp/qArl0QeAQG7+IQcZBoh0PhROzByfiCsRFFz8RLkB0J38xQW00QcEACfh1phbY07CPHyCHU1XhbbbI3qZsPCC2hXjkcrBcyoGBFeqTf/ZjAyQrGLb0Y6Rz8bpVlNr87qJcMdu6S4hn0WzldzfvvKNp1lIOsPWbgIJY2+XrpxiLJTiYggfYMeABbB/0SOsO3ILG+iBDAi486U+5hci5uvMB+dqLIFleMSDp9PMTFP9nUv10XwbWNWIK0KQKjeVWzsysitql2v3dXQNPDjEq8Yw+g+xA5yHnqFW/6z3SvBWtTgJW/tLpXos4HNIIXR500MF/sir7Ve81CvzBFg96sbRkGWnHR966yndBYRlBP3pn+m8eYTq+/RxDELk7enoKTkQsjWGkRJmzTOHSJXZP5VbzTQT5GHUmZ57NBNngfojSnOn5SfrgqR8N7NuCvwau2ENZ9y8iKwh0OjahOO+8rPMtFQEdaxg/i3CfIhiIs3ZBXT1Zp1uRN/Obcsi5IOiAwd7m6cgBnHTqqITXyG38jRd7f02+NRV2gcnlv3ndw5iYzGxJcgoIBOU0NLyypSSy1oFryAVHnme1LP9t4edrMBoXY=';const _IH='8f2158d876189efd43b637f1d27009c0515246c17f843267847288fab7365cda';let _src;

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
