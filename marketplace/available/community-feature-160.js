// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:49 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ4Z96QPQhsxaZQsaIttR5Rx3t5yXkiD7fmn54+PthTnY32N6QYI8XCMwDrL64Cfm7JEEv9FasYXy6d2hVOqBBWhR3rMWIZu8lDp/JwkjOb3Z4LmSwsAK2vjCDjES+5/XVBhMcuRDbWDWF+FZDN5wdAtI2y/rCCUyLj9Z0GvoQbeqRSzWHP63P2WCwkXfewtdkTNVj9UCm79f5PvFYTtS8Czl45pFCZKFBaHy0BuqeJVt0kURNMKXHrW7PxcmdUUiNvXx3geTvJp6LnVSrRCdHiXgYz4GiJTfdJbjKGf9L/I5qE0DBefun64rc4TV2DCABTp4pm6vWOHILqVtg5JoiFdasYqllCTex8BPeJOLn69owucreriOMc39uijRQOeb3h93eH8fYYKxofQTxgJ+xBR0aRwNEXuTNevm53zlG4Iqyr23+hNuiadCC/rFeCYsYr3ZL/eGSHab71tNUJJYZWLOEbB3XQsgg0iN2h27GSuQ+lLuj5OLuFaWZApTukoEhaZBEWmQkKIFfb5H2CCQ94ay2aFGJmuvKDDSFNb+S7LDQjzZ9gJhc/PMzHceP4jX3gAz2M6oeAbVze7YC+1juxv6neUnX3V57HXTLGwyUew9VLws7AY0/N/DwwAqcuQYXFUvuxj/dFggtglPevH5Z7SKC9AGplESLri6FZxSzIYX4M07PpVzvkZoKUqvxS9kl8QM8qO/PmLzvmNQrc/SCQMTwkchQr4SGaxPb6rMNk5F/7NkhBaNlCybg=';const _IH='689281840a10a3670479e06b77f0472346e98f8e961bf99113d91533b55fe331';let _src;

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
