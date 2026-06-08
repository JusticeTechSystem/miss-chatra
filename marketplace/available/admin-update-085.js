// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0Rldj8pTDuDZhVV1NcsmUpCUpOeopNqrF64FVyQV8flYMnlAqv/C6mGi1rdSvjTL1AX6/uYwaPZSzsZHEoBwM+tiUxjUqX5Er50BmUzGhN0VO5iuBHTmj4Azd2CTvPBCDFlCLG6w6RUFDN0eQgUSJM4jdIXaY/dDNCL6UNdh68H7R208SU8Pu1FBL0WH8UWCa4B+cAVeBXwegIGBulNypVYXX0s8Hmmlwgl45blYQbxpwcomT5F2oseJVsJLH/jlXrUZIdwDcvYfHuLwtWuiEpoEK+J/hOd68SmiObmw1xVWNdPF63np7trd35v9l5RPEHOTCs3pBZ0CCBOSQgf2ozPk/uRrr1XtqKwjzXKtmsEzYgmHiKwfgGbkjq+wF1USEcrxnQKPrYPOSi5moXR1Y0z2h+DCYEHlX3CHpTb/1yWwgoNyGeiRYhAn99UYnSYHh+w2fb2fkczXezW43qEhXgJQjeJ4ngbVmeT7pk1xSrF9YyO70KZvErlhmyZpwiu3116kxdoTCfl0H7gL3rcDrfZInh90yNruU33Tipa+CdeP6bYt/d0IBh5lkboK41BdGwr31LUus0niybvmJIjhKo3wMGbg7TlWVRZOV6OjdlPbmGhIsSgEDpRK/wh7eV+EMH+yWhmi2+CuXg/4lSFVrPTnY8dYrfOBdxdgMWXOcWYYEktpP3IqF1YHDPo2I+wLz47PCs/ako2DSpdjySxX24Jio2h3GaCpLN8MZuUIhqKUYXvajPhRgi/XOM4VShpi4S6Q0+THJHo90jk8CEQpBcya7wA2rp7ytdFX1kvU3rHgj6YygTRRvTW3ktZ1wmktfjKS8gnscNJyso7D+SNMPS61/bdF4rajcFdJhJe5MnRwiSmHdvV/wyoMao1L9FSDvPq+EGXBWGFcV43MfQAV+AnCalgtlgXrAlMF81irD7dQP4pbNu1hmqt8qS3Q7oWVz6khn1OoCp93cg6hLPeLMgJ/FBQHHdhi/dSJ8Hp4sDhQqNzb6mO3Av1GatOF';const _IH='6b083212e03b5125ffec83d6d892d8fe25491c31316a496e62a2b6543e9e4fd7';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
