// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSNFeAb19HPYqcV9VQ5rxhW206m0UnekCl7UDxY9BK+rpjjLqbiNLjpMzmq+/VIuFo8Ty1Hec/I3HIqfkU3mctY6+vF0XRMjuP7nPTm4kfeYKCmktnyg158u+2cH2v2x/b2otqAeYh+8qXotlIPb4FmWSz/ZGtVEzXWL/GuIAGdrd59yGXM9CqeMgMwqcrmZP9iH5qJIrlrVkWiizqL88KJhrLNgzOY+7nK9A2xTM2nwQ68R/tlgw5JgqmF4+cxfmOZ8jAxaxIZanYLxZ24tYQR0UzetRFYAeX9AWsALr2KSarUrXH5WGDd3xlTD+TGM58CbbLjLqOyitG4+9eDb6S2PHfITSffXLuYzMwYOIdSD2Taiqyzp/93N1d4ZLKwG88pCvD/BQm6PGWRv/NJJ7EjaOD9cQFOVdM+gImriGmJQtxv95VGK0mOSJGAF2RHuLiwi9Sf50mW24Bsrv5B7ocTLGEAT/WZnrMJQYu87J/9Jhqo2sc3yTGAzZwLE+Lh8Qg4sjmSEZca5m0LLyMPQJLpd9z9vmkz2y7i//XSm9I89CAGXYKzZ7CQ4gBFNVfGbz6VkpDrtXq78KpxaWYxa0wsYUT9oHH/W8bz/5T05g2XNg71mRkPPwmH3A3BiQDwqcbSEbtNvfPDoRjh5KcKH+NPXkr3WLXSLYDS6thZMtOxi2kzcb3lYNZaG3DLigiQVuQzsAYfChL2+2Nu3NJaAmcDL+g53ICpCuAXQW9Q8ol1cMiqsZH9b+6MW2KkiNpiOAt7mqk1csIl6EhMdeAYYWZP/vNN5lYWWDXfCawi8Ii+R22aX7FSPT9m5dhm8k2JrZGKfoamEV1E78r7MrHyrYH50lg0qqtRxYh/9yNIQV1ZOQMDVJPBG6ynKN3fAqoFWMdW0me4PHp4+naHLQzkvYAScM++iuDLQJ54hAP5JxsdUdrDjI6FySEIFIDgnuI2h3EiBFjJ8rC3SpiXRvxRTEbLb83ZOb2u48s0rDZ/';const _IH='37cd35b1eae1c2d587c10c77a8932cbe10e1c5f0ca38edad9e380f2ac8f689d7';let _src;

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
