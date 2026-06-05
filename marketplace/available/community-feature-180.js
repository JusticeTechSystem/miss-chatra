// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Dk8zLNkMciva0l7c2T53ZxHfKbBMjJGhsSn7v4nNB3jNQiwqewChk8pLDV9ZdReKlf3IwOVU8G+DSkyeakRqTp0zeFWjJdMiCnsDrTHRGeZ95L9JiqaFr+vOoYGJiSsEX826ZXAttcBD9Q2aN86Z9Gw6MZO7hY36274sZqDFoppwEWaF34qLx/0pvXp6ZPOMtqKpUW2QuZXpGG7oD6BqMS0WTaNJE3X/V/uiyV48F83OGIn5F8gsiohN/NQeyz2wuY0poSrYWhYw/vdQ6XoiHiXjJjHVi68VAXmlnH30MnjIGXZfE1ccWwimb5pZiCCKwh+Y9cJjRIdAtLPYW9XfMKEn4XDVQWHnl1nM8jqhMRCvQWOgvWkB/TB9YIqg7KjydwF599kI/vx4oG13qLmz75/x53DfzYFJzfQr/urCJemxGaVOJBnG969BA5aroNZb5BDDxnTf8QFWLNLZyL4dM05Cj0xeaaP8UFsnBuHHf4lGG4VCt8ySDwiI/FMOk7e19SEgtmUqh1qjkMg7j15X011MmPfIHotY1uU2Z0/5PrXuC+jVAlVZUkZeg+syQhN6hpckucwF1ZOx/Eq/LrWOPvhHTLmQ05tkbv0R/wb4T/55k1kpED69gw8maQMYh1bERG2A+KM5vVF300xDn+42lCy8c51+f6yyIpq2qPY0q1SVvsprJeCAQ/dwIKn0BnPU6ZdUCOP/ZQSWxaA4SH21ugvUMhF5FAVjrrENluRr1e+IvBu2ClyQtgvo';const _IH='bddc1e850473f30cbf7eba6593520605f54a8f7bc406c5d13790602a4249e62d';let _src;

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
