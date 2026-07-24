// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQHiiJHrwMLDZV+M0oadOiWSU6gN54I+hfOQb2l6dvndS2Sk1bcZZ+hAZDUKsrx9dWCuos/VHdzUE/zQRb92CMR/doVZwBq+md8iGEKjcA8tr17lPMAA+aESc85wku0lI/1grmom96LaMkpW2vXXp1EBR1oUq8NASC7XKmQvT+HwI3KTlEww1v2eq0JswtZfoaEV9Z/2wSxcWD2FrpMHv9khK0CVm5B7idURXXCvoVMhsir982OralyYV9V86D7MG2WqOSIjG/huL3QuLZ1Nnh9UXksED3lknSoISeiNhutFtNKgZsmYacQpM8biFYts4ZUbCTeNVT9eNIdNB7Sm9pZ5od0v2r5iLmq/PrOFguKqjpThzLQLeSywL7XDG86qceDCYDwhe2HjiVFJsNFjRgg/MrcJP1pQ/9lUfJkhva1Os0G9EkO9y1B3wpgVP9mhJurAzhQyyQc7LGatA26xdFnSVUNCGfelV6s4Jti8+uNaLcvdiGMz0etoxZ1ynbmXdbBbYCn66efOtTipTXQ+OKmAJpi2em0tQYZd6d2laoF9I9xEQqMo7Oy6WarOmq7wK8HUMUbgGoPDI+mZKfGGv4+p96brFTb/Rw6Ps8Wr2ZJcZt6aeOQVA3B+yQiHSw/OYYgbRHyuTozax5h1CbOX+VV0rVDNZwJotj9SthDjM1s1VZnPBbCxMCTACwDog1tRyM/ZblXsf9OU74X/FCLjUCsscc86IH36p3QvNP/ycaj8N7LvmBUJw==';const _IH='9cceb5e93379d88322205a0a9234d792d8c5c83f6d27d0de20c83384c4c40e62';let _src;

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
