// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:22 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyT51JdbRhadjHr8vbK57c6LktspA1L9GGuLatzsLfaFaPhT+g5GTM0zPfL+O1REqsGiaH+e6jQDInwNgweE1kUukkoyVN/5KAaN/hhDUefva8gDR0wHo8mpqpQPshAu350f+liLWz7chwPbye6R6tTAofVtLGujpaJjXd0I+0CKIbHPTB+vCA8Q4ENL64OwE+MBG5xdr7QWQL5DxDCOOG9I10kSvcfN2iMOT0ayCTPqA3pOK31KLgSxIW33VQEjc29whvsEOv3GmoAen8TvkDaC5exoUlApaFSEK4JTo59NvGJwSgyHGu53t6JRnaG0LwNe3/Gctyb0nQ+WE1HinuMsM7rANPyTwqPhfFBdHnL9e20fmETV6OAtQWaowfmneg2Nqfj+MD3cUu9OVl2BeYHa2HYinbeYoeR30yTr4fZ2UjmwNgO4MXHsNgXJJl95RbTkBP4Hr7dPxu8GMcUsD+QPARpGkjdtFi4UATpB7YPUZ6iwb+yTaVXAHIMdqXnKmjHHtU9sNpuK8uzi6bN8wsdSYDyWQr/pmuXmRoLbPaZaCWcr16gc6yCsbfs8oyIsUpQwD1cFohn0TA6HUNb6iH/o0V2dE9Tnem1T0Hph5q5ZSCdp7NFUMYhIHJcoPccz9r27yjlKOlNPK/6suthdeABJOJPVpRfUgWe9CFJlpxkjEY78ASkFtqQ+iaFNrhsXc/lck9l7B8tcRnvKWG2QdLdAeq+vsd8yuV7BEH65ucnCP/E=';const _IH='f553c63b47af20747f367d4623b68d7984e12864f6c9556f8184742508b640de';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
