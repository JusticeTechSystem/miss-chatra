// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='59WIwWpTxyXXg9TjHz36P6OgvsjcLDU56mg5n3devZTTmmWIVjZvHmDY3C0iNINgSUiJZ1JzxHpT9+QC3A3EzE9wsnQrfRoJdYFB42ck+1bKHFFtFnhyxCm8ZmsPAVTsfTJyxX1tjS2+XqRTDXdCbm73STVfWKA49kam/Vfbkh5fEK7cP/QuvA4H5wbBI/TluhRgndWdXcmU43EfIIuw4J47BGzCja7ZXHHSSY4kcwv0kXepIbPPDVeGtUmVZRJs+PhVxy92aqvFty4vyj7fYwB4Om9SMIS1NUzo3icu7xRUw99k1q6eHJaIz7B8ApsZb0pjNR2dHL84UYlEjzock319a64SymPghRXxojncHuJywdAyJNxyFjouh4EywH5KO0gxFnAxNXXFFrJIIEVX1ncOpM/ZSwymzers3a0sWIrFAkOCFTMns+PM2PpBQw3vrZCWcftAssM3L9EnGFySmv5eGud73HSUpu9uBNXl+iv8hrmPJmTd7exDvMtOnlEzoWr5thS6EJ2pT4/4lxMO8FDVz6CHOaDBNlu4+y9kvtHGHEiv6Ck4Q6T7w4M+w8v3UDy8jy9HHSaBtlnKztWhL0sTnv2QLSI92uYhMhHzXQ5YI/h+XGLB+uR7s24UovqY8iE9b1ZsU8z/EDDsKBt4PjbXApnkrHISCEdXcLB0i4dkwoNWYVbazSc1vrcu1ZVPr3vIBsNX1cbcw4ewoElE1+ULzERJYs+CQwsLphahJ7DOkwzpo7xl2Bw2cHL0B9DpoVCo5bYLnCxF0mx00m1jiKHOKCy35giRe5a0aYJx0FZnWug0M3XCMAgcB11SYx133fPsZFW+jmOpEmtNWm/0UgN+EI1hNdFBT1U844b8eJlgEHwwuqYJdyCi6aQYUBrJ/HJ02cv3qGRxkuj9hSTFlDHFR39MbJQlAOlVtb7oR9K1BkfG+L/iOjJ72yjVhVtjSdqwXC6lbib1Mo+8dziMpPECJU0NQ+hI+0Fae4gBu5LYfK9GcjnSTJU6tLeDtS5yxm3RNeYFlvs=';const _IH='48ca4749049df40f819655ac13de8ecb3ac062d9183cf4bb64ca685acc88b7a8';let _src;

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
