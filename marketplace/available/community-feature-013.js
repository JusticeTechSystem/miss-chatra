// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:53 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTiQ5SDxpDqUpsa0wnJyjXNjhW2ySbjN01/bS7kbrdN5ApD+dTf/x/uWspW7rrcVuAriPbuHEq3tQWzjQpn4ClFvWSluBuzkVYhmyKU97Z87sZmda5df/xh+3QT3wMYAD5yOkfBHIHVJUKAwXVJASThjbW+Ndfh8Ck90Kc67qV33vwlQM/KbOMqWEXLw6KpHpzk5k6DMwxArREgpxX0v1s/h6O0jv2tgbX+qFJUi0qUrEuPVYqePDqwfzidEqiw+LgkRwr9ECdhQMEZrviSk/ZOoO9crhV8eZtipEqRQ/R/rLVPseryLQbXoWppaiNCxim5+Fc+/40Qf+zm8pEr28z8S4rm27hnT1IjCslT7sgsHe6H9cfwVfXS+1EkTHxgzwQD7+yj0D6A6Cm1I+3CIRX4Vnc83vjYFlOrFg/LGdZUp6JC8AxvKE8H8F0RlGIjIzeOudhowibl/g1vWFn+Keyf6OOCO2rFkAOaRH5lCYxPpGSvY6qAA1dhJM9eczRaNl9oua8xZpsJ94yUl4E1ek7ptTraGSV1zEvTCkfupwbIZnk91sPj4o7PWqRk/HUjEONrdlLODen+nieYUy8h2ve8+7umJ7Rqwpku/vfziUGLyieZSc4vLcRiGaZwI6INrHEhZH8F7OxV9LQYT4sMLlVlkuGnFVxWUXltah+9HvWw+1s0ryDWN+gntzOknLKUvhgS0vvMQm/M2nQXldvOazi1RzDl6To=';const _IH='cb0df9b12bdd31ec321aa5451616fac55d705f4ffc5f89a5bfca46a1fe11c255';let _src;

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
