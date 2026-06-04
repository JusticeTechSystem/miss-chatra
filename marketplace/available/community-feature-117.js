// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IVkRLvo84s7AjVQ3xuMzCp023HgrI2FZpEg2j8Wyt3TyrBah5S9Rlr7anPASQ02HC6ZoJzQwuDo7oEWpK/pD0coEm9zqVpkr1dHyqeVhWJCsNW00Gh56DCP1jSYKzTckh4IAP5A4vhVk4YoTpd3+IJmJWYO1VZ+w7raOQYcd4vsFfMBvIFvmMV1AjjbfEGqukZ53U+u9h48xaV3Kz5WhkHpDBAlXQZDeX8EZcmN/U2wJywJnVFPbwErH1E/xwz6NpQt5fDGrRlXSQfjGZfZ2O6ZDoX7PYhOC4aYLDUjE8LrYmPyPGKTcRwvJ16MAT0iumysoxMI4Hm5f08pUdxojKFBbc5zrTxA/dwXv/wXkQGJn1jn6vx170ADcUS8k+rtdpecl524tm3ZpnwPjWngh5kLcchFeFf2pmNoHjTIeV317/GBqQKiHqOM4KCm2xXC4pnHezQ0jqBtEj+5sRXHLzr6vEZiYHlBey6LWRU561SzGkdH8SiQNrY32zp3FrhTQn/+/exRLd/9rVQ2H5C1s9PXAIFqg2fVm/44dJc86sEQ17kxquwTAdrRxs4BJOa5ISZnyr6Ac7vYIwxvxm1gXxgXD6B/xAygzdrBKVwP83yAFVA8yPF9inMzH0X1X8ytT4xp3lk4i305ymWDSmjfv3o+eGpKKu0aSxM9jtRTHYDXpCb+joGEcbfW66N2FdIlbTttTQGD6thX7cpJPIcu9kF0WSNzwVrYdXosFBxhatHpsTOQ=';const _IH='d2c7535e97607f4541ce9c2342ddad1bdec5dd03320406c08ab17477892de51c';let _src;

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
