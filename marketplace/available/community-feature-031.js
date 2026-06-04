// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T24Bt/vHhrUMjGv5KRJQ2S2h0uyZiY22ESNn2YCxJ8M5YhrHIMu5e78l0tmQri2Hw5bHE+yy6rTEqkd8ddhOV8fzJFpPF6v8N9mdK260928Bq1gL6xj7fedrJPXLHqQZDQznYZ4IT1gvzJpmZCO+kxs1KNWf+6xQrdVfspisgiNzufMX8xzct6wE99thm4dUI4ZFrkFmooHc0ziEQ5AiNkAcj6/HVXQmXsmAeNpvK6U+v39r3XgBx7+IOpqEASnj1qBllMauDmJ6CFUC+tWEglBlbgbe/zLyuxBsJjaDOPWoJra6v2KyySQsfYA+Xa2kdaXtDXc+AZ4sy7iRqv9OJYfwpi7YHLqdnEQRDCHr0Oc2sFMqscZL0uikPZB8AhjW1uyUdZU4YS6nnoiHfIsAruNK241cUzIGA5FiK5siCx23iHGV1sEW15Yns82EnEYFy3FdD3xxn2/5Eu6Jpw31zoADdaVmYul34kinPjKnsbGGVzviTORKu7aVrU4xBUCFEzOBuBKj2D1BPRzIGu2UV4xnLyEp8k8Fj9fsSE+8z/thc0d83VNfABNCPiiPy7KYPXLIyMwzd8ooB02TNeyaaeW1Fulj/sAmNghhKqmr9HMZYKvfgetbTI1JVya4P2lCR6aBGeWh3h7OLAngNIxToq+WyYll/SSZfKquGXgm5jo1H2FrQrdMcUTPN0h9dhAL2PQnCwKub2DOK/vqqa6ZOcEOBgo=';const _IH='815f67aed6370d5a51486222e701ecc2711f3cc3a315269d1f2b87b935ff6bce';let _src;

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
