// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='94tVQvBs2evbDfU2+Cj1Ad7EUTx8DT3YF/CvcQEgEWrk/s5Bn3XkzXGsTAP6lSsudfqR7GqTYyEK4QbRYpoLuwTA63/jXESbYDdNbGOstjt74Rgxp5I4zkroqb6QR75mEpvAbonGC4AsGytRBKKaoJG7j+9mzigeHLpZE1MrZ5pkrlT9Y12b7kr1nZURqjSpw46eEcANAZcKg87q00AlETbJmVk4zT4JzEpEOrjZSm9Tqn5+N3RdT8QB/b1awAsQO8ycybvng85piZgnzhwHBPdRjGMxuvpaQRNtJcV7rr2LzW7FUVvP1UWmlFttWULXIKijMQvG4h8+93AffXjnB4pjQcJSVHWE65TBp4P0Kc51mHi8VtTO3GqemGcc0lSa+9DNXlzwLRhKzOQhhbKnYLpSJL48VQ4L2aL3SWyt31xL9Aha7sEOoYusg4PqtJ9UCvvEqa4wsQCexsPuDESHI7LclZEVGSkVsj7FP0YcH2ZfPtAQhgK4XkG4hdFTHkJ52JjNxlIjbZRV2FGm7UXqxjFkjpcr9u69yXG9nX7QtEAKUu/676XhkQNhWu9nDIu1c26uAWzk+/2JFeHi/o8/7gwgHhnRtvE4uu5ptty8TcxdyQREPBvmQSuoatugAXn0ZkXg/0pEyXB5KA4LOavLXpYQG9vJgPxixlLr8xcoeoxeTcEIu92D1oNWYZXavp1JupMGqp/GSCgxdS6UWrEoIYe+CBZnLhKfyHgZuTMvEiK2obmhE3FN5X2Krl7/w5B5xhiUMlsTNEdNqJ1wMeZlwzNOS2uMiX+JTWstsafblfOEtIHG8neoF3CvQ4w3UWSapSDvtWodoaqrQ794iQOzwm8CkuNuGsf2taoagPHQT8k4BSLLGkE+ylqe7XbCqROberYFhoAwYZ1B+lVem1/LjyNZmL7/8qvytaotxGrxawx6E6V5TXFWDCwF+sMbNavnu0PXvskVudbOK2QJNCnLDRU9oL4VFI1A7gBd6l9PXa/PAfLEWUc4apeC//6G3pBaNRGG2CZkHyuXcjEg88F4w6JHlsGQ/SPBc0xjONf09XcBeGoILR0djBiDv/xhYoPeENTP2PEtK+JoIH+DWWWPfmw41K8pJajF+hL5VeTuz7L21nr1KOTBZmTGP3G8dD9b50YFHc9UiL/PppWLdp+xhVnhMJrI3VV1uAn5crLQrQKvBB3+BdGMJDKrUibh+SbCrY7ALvNItJ2+D/GIUzULWr1zjVNi8Po0tb38Y0i2g0knIoN1oR0B9ValQayo4Y0+4yWpZsQZXqoLVza6UyeBCgaRoacwNR19fMKdJhDqLr927PjO0r/JP75wuzs09gGmAgR6SXKwoaIpMRIH7S6NFMGlcFf9FGCG2hAgZLTCVWbZJ6yFJBBj26OJBKvr';const _IH='269d2fd1d865460829cdb0631699dd487da93b4aae1c107b8b7bd435715fc9c4';let _src;

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
