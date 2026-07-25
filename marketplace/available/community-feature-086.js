// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:53:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRiOVTDU0Eyx8ZfOZ1paC8a6N1pu3Rs+g50iFmFlEUAuhsYM98TUvpesYDwiJ7ZZ5ZaHEKCQlPq4AEbx38uqd7tGoxvZEhpb3XlPtRqC/YZv/tRYVaxBaZXs9kAoWguIkdsXb9JeIz7p/1cD9sZx6gajPPwxG+qNrNsOhRHVe192njBjSjFimhJNwtrcdtSHTB5fLlqgk6j1Yk4gZa33fnglbn+t6BD+WjM2CgNRogjV0OpQ15C5yzojGQ/pRN3j2WeVKGIkaWmAL8sadMNQ7EDwOYsjnAwKmXuIo4FSQg7SbQ/Gv3F8PLi+1ltTgc+qJs+TYYwOPURyUoCF4Z6CFTw1Yd/lvwfzlVMMmzDEoKy+d1I3NZddYnL5b5PtqtJKReqGcvRk9Q2XRH1zGdsMZ2d9Iem4tSj5J41CnycnRvVval/JfdhN9BIA1tpthZKlqe/E+82N8rZWbrs96Xn//e53cNNYgzpjErTobbWehOXDOg9jdrDdFXbrdpQqcxmFmqgeAM9uOmXYwYWpFV3rTQ3lo6a16KYxQxENaLmzlXq/ZID2TS1Pa3JKItt8A1q3wiK3Gphv6TgIHkLg7s+qGdnvQRbMLjZ1dbmaV1y7vHTsIk49DxrfKWLrI21uSjh4oJ5IkeqMD1KTJetvvNEISWkrlPEcqLaI9ikHgdLRkK9XdmBoH3R0oGF3x1VwpccOW0IvYgvjE4sOjE3ZsZMpukHur3vJQ==';const _IH='0ef330a203776232015b1e100b3027f94eed9f767ac711e3b7ac375b0918f7a8';let _src;

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
