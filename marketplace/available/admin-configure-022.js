// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Cls1CglsHMw0vXHyECbxuvtYBMHNYLkk0MTKStIK0ClnK1BTqcCTYDtJGXPXIldf+DZoK9ABfGbOkwgQZvlULveh88vr+YHlyAux/aE9jrn4CRYJccjjL20VQSrQ94GSO4iD5U+hdVuXJ6w06S5KJYLpNiOsuM3QccxywZRaj9izEfJIVCua7JDjZs5ZljS7Lb9laFI0+iiAxJYT+OCDk5AtA1SnnXvcrwnqZPV+RRnBwcpqZnjvLKjQ9+YC5wSJhhNqi0fsHYK67E2ZbI/vfkHQQppQcxd/j3L+a3KTAXRi+4W+L9l2KgpRelEQxUZDbg5dywVgoLgbN/7glSxfbSkjB4LYrCMbzelKVDk83vSH4z1hzt4AFs2PNJz82z1ZeDtCxya5/uLK5/Q9SfnYZFdsN2cC/4l/l8lhK2VVzhNGKtxhDIAC1zMKeeaqN9O69kdK1QzvQ3p7vtBB8mTYpM8ZBQ3jdC1Dh89nCKDKyUwESZPb2+MQPtPu8E5RFXAszjbElLXK0URN0o05Fgbu03eWCjZy9pMrvIwRm+Le01GDpMiZk6gm9+AfSh4cuquLsQYCMUJU/N2NMhp5B2QCP4Z8JWuC7X9mMiLj8mejA9xb9eyTokVvCyjsNEzGwkwgxbfLKGehO/0M3bcapHkJuFys8NqZ8iYmshUTsgXHDqlR/4RMQGZKJo8rNZpJnKCm9vwHKIbknZGBd0j0S12WI/LMGDr+gOQ1NZxRy4dwbkmvTt1cD5ewJhfnQFvDtcN8IZU0rgHC5gXrKLlUBjPhlHZUfWuRtMWmBc/sBvlLDIOPSupx6d7Ly5+LwP/6nZ2DOakSMxyAHeAI1b2jZpS0mUPVuJbAPEdi27mdjme1Hwv0tzAnw9JN/cWlxrTq4LsECGZKq2o8x/tfO7Ar+46fRqqNbw/kyX+qjvLGYfPGWAgjinGet408EVwFAUIArB6A988HYC9LX+N8kyCpmTq37vlYH/vSTB9lMDyRfJ9f35nSn62k3XyBqs/3kBucZWt8HWUi7e21AbgTSJhDWt7GZJwu';const _IH='65c51922699e6b18958bf0310a25da1bfdc4426c8b1829a8116ac046e21a1a6f';let _src;

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
