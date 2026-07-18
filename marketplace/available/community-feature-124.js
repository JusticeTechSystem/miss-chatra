// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTYonwVqVB6PiOezgPXj7lBu5qtGgy2H37V97zo+8aiizYVIa+ElneC5u8y//5c4ExXFbAZ3UM6Gl7ijf+HdF/CMIaVyvIM8SeOSCHZGNMFrOcouoQNeMKfhBkGJWWxHVatTGj3I8NyRlPxjWTrUyFxhNMfCIGwgtvS3/nI0aQURfIKHDJ9g/W3TsTP1U3bbTvPfkCjfb/hz3Nyhijt/IhwgMiGtJfMTtLhuaAdfZ98O9N/0qgRcxxwjmJAQsmtN21Ejv+6xP1vU7pLGcmEs66KEpm84gXHl/Wt+NdSp0M41KOPvKa2MtOTw4qoNucp9/0JHe9kSNTQGOwWQd0wiVbMLGSLusH3mU/rmbCoUDUFXFJvKgrOEjZn0x42Z5BrlVVWjEdMi7sLlFeSxAG9FL6Nb3HST1I7h8pD/rB4lXKrs+NYgmNNV01IbwIfXiWecFrpixGJpA/PqhxCyP9m80gXhnfYj5h9U+P6XFRhS2DrgOAjUndJFdG0UHOfA7fP7/0f2N9wBUt0cK9moYmM4JGo3FB28SV5lzXRLL1CVGScJIEAo81F6fYUK+lxCxcDiHT0eFOLHb7X3Hl4AHhK/oFFSAbun1Q5f+LDzPb5Z4dkQTWXiFTy6F2yD06Nqzc87yenFY8U1mg4BFxXcgn3qqQlKSOkd2xc5eU9+6XF7bt0upkOsI2Oyeyf1t+3awAq5+/t2mPqJmNep4oMx7USQg47gO1EDVL1EnBhCxw8oyCeST86KYPMJg==';const _IH='047b31b44c01b3a44689ca6f980f6ed6ea02b0f1a5992b288e04cd2c3e8c84a2';let _src;

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
