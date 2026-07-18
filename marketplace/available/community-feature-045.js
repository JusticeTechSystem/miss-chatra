// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSaFKDZim+POdZAyQiaSORiOaJudf+ANE5UNmVXFl3mj0JR0q+kxDTh3ooRag+v5UeW+oBPPb5xEx04tLGuYxTQrpM3WSdVpA2AKbZx1SLBOwtC/1jU5eszjRRHZjqjY40e1ujJtRyooPrQ2IH6Z1VRp9lrnOjg9U6m0ntOOrbbB4vXz+4MHq5roDu8Vqj8yKhSROwxNyX8/CEaQMn5mBerziG7nHq0vg6RfEdq9Ksejpj2bjD/oR5iQDOGpfeTVe05lyqx8yMKOm3doDkgbWNGzh+T0ilSozHrIQqUJEvwgYY4Qu8v+8p1XW5cfX5jdP1x9sesRi16BZd0RqOG4qoE4cHfvk3O8h/ysKwtk9J4b7CMT6eBiQLoTzdAnb3YVoWVNBONRbMnbgENaoRsHY7G/dAS9MIgKWbgyn7KsX5D/SnwnF9YLiVI2s749+bMNEUfSXQe9pLxYTG6frV3upc0tOb5s+XAPR/DITo35ZYum39zoIXExfFhrOTYcD9rcdmvYnCF3C+BPHOBC4pYRLsPJEbxN/avsCXICVB4P3IdXob8vE6js+AlrElp0zEPREN+B6xi2dOGeh3ko9zlhZWsuMZDd0X08LQiAQ4eN8cYx+/9ZmvR0R8oU9w1qyfedITzxd52kuqfOu56f+JQfBUl6p3Y5ZsowuC+in1I5lTh0UL/D/NFrUv0BU2XL9SMPdIJRYkRJlONBI8T3J80I948wY0xaQWG9vDHRWX9XwJpOavjoXfq7A==';const _IH='b94f4d725c37194407fe830e9474e9edd6153d5d5f6cc6d6b05f3bf07517ded8';let _src;

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
