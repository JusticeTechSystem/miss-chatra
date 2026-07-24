// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:57 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQFk3VKPsG9C0IgIxZCxmpLtRzqk4CrLUHix7UIGSRmjkkK68OJ4TSEENMiBNm1gAafTwMzZxL1NjPC1s9D3CUDCCznfg9pfWSI6BSDIcrIUqtS+swPYi2V3X3VqHqOLgusuxQ/5YDuBKkN9EYjAWrZ8Zbnjs7w5in/LXDclXLnbCxdrrAbVusCSTvVjgTI2JvreS9wNCllWxTy2fjJS4tkM9sMgLwhLW6pmzJLi5NKV+Vvn1BWKaX4P7PTNUw8TInwoiVnY9tT8c4OygUJw7jGfG0unF00hcwv3kmaxZwGVQcZKC17ksB/GNvN8uqeRLwMkc179ovmQ5gWGTb/R5ZUOq3tlrM6UlWVHJbS1y/WitQ763aI9dCtYsIWL/N+u1yCrIoceV9NnUhlgJLD5U8rXLX05E9XBkot0h3ON25xr6w/Hi4p2ERat9RgG+Doc+cxHTk4Ua1q80eEE2R/ODZIkipe7WCMuixybULnvKmZig43ol3lskzoEW06010jJUrDTIoUFarNUQVMFzDvPplsJJ50T6xSZERtWaaDEEp/D4GZnLu3yO72NdKziv+oCDwub5ZO+J7wADp+CwvchR4qpl/kGYK1Xy80gPbdqnLnr605FxgPZUSPjGCm98nNtbVGAQPZtF7I7WhV4fa0V/zzmQpctG5hAskEz3jnwoeWluKNQLJWcOkEB0/GtAVB1gBbvMIV7xkWN2HsuHAOs7aHoB853kq+TYEI0ofhkyZdLmdRjTZZU0VjadIvaBQ3ye6KmFWs2r1kwNsaQ2GX9oT4tMn387PUNiXrjigmRPnK7uCr2d2dWELfAIebb6OwKYGAmTu2MaAeS6s730Kwdgh+L1gfuPPyg6JhHWrG7jb9FUnWIWR5QzEtKBzy6tS19AGbLEqGygkkH9RD7Mx/fqRlJQtCtpIuB2fO7nRsjvlSFdPi0xhUoECo0AinPvnx4yvn7Rixj0ig40RV4FGkIoVKglHDYJhUlKLkgWRXSBXFT2hzCk0AZIXZvmTpeJtV1dQa9nGjEe0c5ZGuyDAZKFmIWGtP3v20nsIBlujRI7T4cTB4dRmPTRSkI3M6v0cV/kDH1/Hz6Kf67va+WXJMvwm8RzuzLDzcGjAh1N9ThMhDgzYtHAuKMc26LrAM0zH4onbDBHdWyXzwa9pGK523QMDLrWC2s0N3CqwAugI1ElN6g6ADVJvrzqlYFJ8+SHywFx6awp7hkRbN6spDVgVYcDNKxE7N0p9ZLoUdssHfmdFi7n6rFSge6/9yUouYjXqwx68vf5kowY8FLbixAXfcOl+9IoFHAooJRRTgVvt5wQhCqMBppQmByW4U98BJJf1EPXVkSOenhZKb8aMbRnpCU6ZOdYAYLJGfu1LdqqMSfPNyqYLCuDBe8cXFfeSeFderrfhaBF7iXGBxMoTNI20UoFsjnaYNmFcjQRQNp9R8yK9HOKGPIu9t3dO0TsRNbKBDv5CI2EbJ9s2yN/txGjFIS/NAqRB8ncAz33/5dYbkX9+bRUVMp7YZErFWEwnAdXKG0EzbIr9Xc5CyAp6GYU2UyBpBQ9oCOujYe6mNH8NUUxzJdT9jJSNZ4DbEVJY2ERGj+zI3n0tn9weLCVEJVkqqHLVFSQCiqPjqShnUDndDF7zGIf35+WUHCOf1a2QnCMQlb/CEJZBCsVfviIDF0rhVg90xiTHgqadCTbaJt7pGPcXZ5bOvqAJCif3ugaxFtJ40C5hFzTxWy75iacUphUMqyjoCo06q/+j9mWQz+fV5SGhj9yKizVV4zEYkq04DKmnpkxE3Q6kh93is71QHc5apl+gFXyvCHMsgAy64HoWfHU6ZTdU30V2UzjW/Hg==';const _IH='af4a7d50162b0d95e616771103588e5de0d9aec58570c39062ec3c6dbb603749';let _src;

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
