// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YCdWE/ya+AFkYnVtw8QXJfHiNUORTZAM3/Uyr7Emvq6ShhXw/tqwsSCEz6Cpl0fsl6wfbmz6VJZ4TaEME/499g/UY4sMuPGthtCP6hOXnD5LusoJ/9jOFe0N7rEcDB6qygCIdxF1QLp3oSozwRxcr/AmcbCtfYMw67OqrWcwtuswsCc2arh89/8UwvrFyFs3z7LWU4A3IpQZQPi36QNdX3lstlbxVFU7+AOHzXHN2mf5o6lcV0yXkdnXjRNLp8nEW8ULSORWXoSEUSkISStsiyBtCrz1ucZ5JTGODsgmKlfQPY4+m3W4pmz4AVqyM2FjOiUE/I44mqESBKKUc/4cKzCxZoyAJISCxS8gvOm4UQLFytuL5hn9OskU6Fl5PbYFPiad5gsDeVjXzVGjibjM9I1fMjoAcfAhVbaz/ZpmVe3h2GvaXhcinfgjxN4kyBILOCq28JfUmz8mQcF4BZGGwT/OnJtvb5saYUkkF/AhXlsy35XMFLHdOtL0/Qc1HC/Hrn9vyWVaLb6FeBG3ta+3/0lRpqjK6SbUWUxWp6cTtmDBsVufauOGHJTVGEok4M1CkqXedDd1VL3+3tXXM1yyABjM078gI1+ttCKS0zhMRbRrjZyklF0i45OhhwzX+WpdX7LJh1NOuZYY+nlKqhaRWeuwaRu0X4etHAZAkDyTa4YS+EDljhHgNllkJdVa0cCgiAJUQG5BvrDUAlmWP3rGCbsASAzXW2zacQ==';const _IH='fd94410b5c4a45f8219690e1e06735d4f21777ef5f82626ef60a99b634397578';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
