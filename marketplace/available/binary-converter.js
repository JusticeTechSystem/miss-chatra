// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='l9kBG0Rrbv21BVTJ7pgRoysD6KvEAD7ku8qgtSgNGPS3F4tbj1zxqbgNbWwc07nPWyeEUYs/FRaPOAGWsu/0D+o3bB4fpzj+koiDbdq6gUydP5gnCk+OJ6qLU0hObrSOf8GXTY3rdcgi1OqmUmRKFuKUAvlOFYsdZ/MH1Zn2HYU0cuwl3Rs+k5vbKyOqHpjeylKP069JDLzeHzXbs4yNnR0n7IzGfoIeD8Lr9Hp7OKJ4qiG7CIFHieEZXnsgrcmCDiS0zL5diKrwfCqP2HmC9+7/vTYzzZO0jFc3Z+EQD+g+2vMtjlIZJztgJE8xzZ/aKBtszAKAUfRuxmd1chJdi8g8giIBsmfTNHTO/DCkEM9eP7Xwn7pO/Yi+bSD+EfDBdy7VP2BbV4Qdf33PD4LB3FzYOTkvvItfxVgdupamh+bw+pP9U0AvErF9jRqgpHK18cnKTnGIvD2uZfPSE/ZUgQ63zDKbl3PVJqoSfftiVSWszkO3ZxTca9PR3aCRBAXRvV3UcMibfWKCjOc7i3SSxCTNk5Da8Vcy5hs/KIvoHcl6LUYIWQTmwum9EAXT9pBjkDWEvwmJVdzH8qbv4Q==';const _IH='2b5eaba19efc431ff8c38ba5e8f8cd75a2726d63cbc05032351bfcb6972188b6';let _src;

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
