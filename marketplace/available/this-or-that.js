// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZuB8vbcnEnnVEDr803pUHNBmp4F5HKAfCTh/YTuO46rZXfQngSvmdeRrYS5noMv7KLgTWWhHEN2qN9Uh0QrFH/0hORRHRV5AUeHJm+Xk+ePXlxKjq8EWEzVSB9ukTCniY5rzB3Gnwjb1eiGp/GNZIXBmH5HnbbfdyTX26Y0RlFs6QEdwdqGnZH2LjqcSUQYf3v+BVTMiDDE5Gvpv7BrogzZF9Pc4FY/oY1X2jNoHGYQb957983bjZS1iooXc5zi8l6/UixpdLmj4m47ty+oUHeW1F0DAtX9wXmPUSCPITLBLXEzH5h6oSGEExxxEKC+wpbY5ylkG5AQKHt4SblhNzi4JX9wjian8IxU1ZoFi954IW8tltgwi92EUbCKsJ7NdOVw4oSqH8+ZhlpTjV0GWV60+MlvL7oI2PKsy4w3yAxa3yJH6EYPBYqfLP6aUqS4pdNmchj//ZEjPata88RxprhHTexWaEw9tDiCvQM5sH1wfeXm7XeyI/xbA+LzcVilhOInYUuxY+LzpK26bdkCNn6zJgUZfwe5x44TzqzdKn2Ajqmpx1BXMVmZGrvbssrYeQ8fDBn2BwV+PpHQm118=';const _IH='bdaa71c6ce374d28502becd3458d062c5a951d7f92c5777f37075d211eb91f74';let _src;

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
