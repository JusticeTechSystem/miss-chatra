// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FePAAxdmMbpIt1uMlVa+v6nNneIN9GKlFUnnnL+RxB+7AvmYS/fRW2TLlr6ygQ4WUVOZWdZrUPoNJAvlul3r7dEGPGt4C6OTFbQi+xaxhEkPnlscIRQShgTeqIh6imX4Jkd65z5dnpiUf4uObn5dUr1TJ/+jcf7X82QuOXKaYLZAB8NOITZCFncSCTiQRkGkFThJvy2E296dmhrKE8qO/ZVW9zM5SZC08JxMpc8xkuMBoVb8pLeX/L7V4+7iHrVfNETn2yYX2SWlZG5l3iG83/m/aT02Kx4Cv1ZF/4RDLeir7+4JXSUthVWVbZllYWnjBXS2RiL9udSzOIZe+mHj8lW8fl1QLOM92FFLT1ndxGjarvG64VPdPP7KCnNPWaziZa3Xwq5bTZfjMZ/oqjOKrDUkr6qBkmIue4DRX0OoIqw6iJ1CEC4Xb42UCkidP78NtLo8LpT14jWluVxcsKlh65CEGaU5douWeOH0Mr9a6QGYcEl0y+6M7FkZCUGubaNgkKBJr3U2DBOoQgsRLayqgl8DxNmJnMEkpgxwkkE6G4KckVXdiV/5LDpOYVtTreJBYqrojdddpLiuL52ZQcpaRMDSZZsYwBnHebc8JIVnagtZFg2NeX9jXUyWb+MikaB/6pEB1F/NS/+tvaio6SZlYmzsuIAGkRccOTEaGStgDubIo9c7Idc5eAhAr+co7w2IG9Uz0sIEYcpGvN3mLij96QN3bdLidnJo0IIWV9Md77gGuMDYx/gkM/YDe3D77S4idSYn1T/K3+eFkHSL1GqFVqKAbjGZXzDIYxpXbURhD9RT/t7YLzb/UDzppZqUOlwN1n9JpR+d5uyT0o2kUux3ApJmPWDXBgrDpjQwVX6DeDU5LAFV+DmFl8ygqShOHgmW0Ozgb5RtGGKpqpgWilTTI+dxwxRNtnB8grIWcq6VdQQrZ0xNa4xZM00EbhjfAavXOCvFpaaHGXm2h/FMIxue7SUFLHbmxMtDTVvIyqleaTj1Wpjto2QKVouvYDYiPA4pSNlHdBVc4K/i5sDCxCfZflC5jCTz68VLdd7+UZU2Ck2HL8id4V8aSuIxsGq0mi1vD5Ufot16JOwKRwldN9UHBe+OxzCrzpe9abhCejhdN6lGonmSPLXcv37lH3AikRx2kLUenTazRveNFeWDawXb95VH9M2sciVwEqpqRCgxVLTFCNcXZ1FSGM599kdMB3IcZRdnSUqU4qHaYLuo6ZqVWVVrMerKlfCTlh923cxB91yAq8MhBhl6eP8TzOPkXQ57TGbxyQ6wpFxPR3NR4cxNJdNpQ++ubiCxr/iz4FQeamDbUZLaDGecy2QujnQqvropyNqVy3qwtfkTrqcXiBk0BwsXYJZMe7X9KTljQu0p';const _IH='51c895ecce59473394c111ebffffcaa8a1484168b3af159b5ca0065ff29b608d';let _src;

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
