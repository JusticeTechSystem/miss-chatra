// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:46 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5cfuHVtE8PZOYvzhyGZbobi0pGli7eKwjHXND0U+TFRqIHRb7aD7ugYZEGI1PBgSZH5VTNNZnXZmdLkZ7XCCcIDg80dTNSRaVsuVog0C2yXBynHvPM1nB9/g2SCURFxajJg0KPPhxGGi4oMC2+WZ08MXPA0NkuMfJljnTD5xTQya+tslFTKjj1BvUC87l/sqwWo0tagcD8ynw/UsH6NWYNTwRNfH4puzIMGB8oiFBr+fH8A31/n85LyxM8lMHUEm8CA83FXk//wDR73WJd2C9jCSe3P8lKw6jL2Lz1OE/XMfUzYZIOGIhg/+Yg11ZOEjfwnR+ubQgkWw98YTLWKQ3q0Wb0FDy/roZNrc9pESCl1FGXJUhTw4+qwBM2toNmxVmpRXvNaGcBNe85CtCzo88Bm56oqFUhJtHyhyugh7T+w8gke2wlCtJGb1BV49paD+sAR9gn/+PccB4ukY2VnUCFunzpBDzDdQYVVRzbHFO/UUdAXkE6ObBbbSfVPUeWUWkc3ln6glV0wKBafRgHN4SI2wWaKrHrUhwiZEYcBtuFU1bbszUoJ3bXa5LZ3Y8dkBgcFLgF6FVjm/5Yy2pJFfwEfjIEaPwKj85KV5bRjQhw3crcknLHDtsI/MNiAh26KQu3aqz7U0AqnXlBYCm0U6gSeTF163AOmJUR+icSMKzdNO07iCU7e2W+ZkG7rfnaurqDupJra4pdacXqolSTu2IsC81+3IEvPhNBMHzOg3OvdH60=';const _IH='582a1b72824c0ec40c15b8c19698297d3ef0e4fbcd8feba5fe34bb15ba969c43';let _src;

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
