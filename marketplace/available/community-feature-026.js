// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='d7y0/jw5sxJ5Pm9vnbUfyJCnLUvm05pXYkNpz0m36QVYycyAo7DZ3CIgqULSbeSlO06vnUz5W1rYzbDxXI91FJJMApDuXvg0EF1FplQ9KE9bM22cOtIt0a6It7PtEEdMMVUK0ZKHcrNOps3VN3UCo13yzWU8kYaeFWAqXyCRjfdAzI/Kp2rNujwdfhNRSB3poVfNizsDJ/1NWfG5+EdipUC1adkfUdBxSTbiW/sH3a+IHdyXIc/sMn6ocJETr2y5gu+s7ZBu6koccd59mfml5/WNIxvA3MmxSv88V8qKkeVVHsYq8rV2rOxTs+OofmuTd1NTHuqiZhn6oj2pFCoCGMZbV2tnZoxH4DdqU8EKg8nBK6KovMqNI30t8T5qCZ5/ZoEOTKQenYWb9+3kgFCNagL+nEZlYmV0js+c2KxzCJ0HMvyio6D4GRt4MHwbgnqNqNcUngz35QJUaIo5vE7/05wF/oS/Zgrx58ILqftK/1ipkW1C0GfB37lHKERvZQ+bFitp44Kr9Z44C02+ETp4T/nB0S14yyxOwRyfrKGn0pdKyErJf3kQx+cA4R2bBwjo65WaIPcCsxcOE15FMdTe9V5TwEnuig02QaK3VhRCoglGkeq/xkA3rq1xOhxdrzYpXrMFTZvubihFnsjNBiejrr9bAwonkB2xndZTxIldhauWDZOD757B85qk1czT38xLA7p0ueMH953WofblgHCpyM8bdMw=';const _IH='6ed951088bd51014addeb2ad29e31fea013866691a9e8eba00bcf067dd7ecc34';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
