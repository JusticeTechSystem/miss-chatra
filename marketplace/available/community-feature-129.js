// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sCCp20n9FlOalU0kSLPiojABUef+vG0KvKQSYp15HvTh2RYNQHyRY0JPtTYvRUVuQSMt/XVkgwtucGKPZUBtUk1nLx/Q++HOMnzvKx6Ag+u/KdNy0XIVxJv5/jpbYzjFBQrQyEP+i6nOnZVTovIiJJ7v5Mpi5rQgwevY2E7JZVXJBADIIrwTanR+C1AQQtRUrafmlqO8mUTx3sBqkjO+QUR7DWDmDBBorh4xl6rbQqpvGFl2F9exD7cCbyY7mf1VLmTVCuTpNjz4pqLoOA2TSgj/3Bq45nFn/LBt/Us9Si8uS+1j6QFNyxRQrO0ccGvajYd0zGsj/oLT7sD/GnqE1Elovt2uZYDo7z8kurUshjztQi48ZAndmFW5Zn4aXfrFo1PpoS6LezDzmFERXM3j00LTnBODepAjJwfsE0PfxJYjM7/akdHmLbC2Cd+BKXXtKRB00ta/BIPTjvY82o0DwCeEeBZd3QtUBYU0GBcmtHJYTb+gGU83EV9y56W2MebnFD9eG2Zc0rwPmgufdPC5WLnQd+NixUXcUFP3MXNzfDJeOoE+wqe+HyMACRQJT5KofQTTrnUffUQMN83PttTjD6LIwZw7dJ+G7or1uzVjWnOVfbAEqEWak4Q+AA1Z3Q3awylSSvQh5Ghc7WE7t51rBJTCDNYhhL4Ghpa6GkXXTOCdAlSTS6sizGYA61p48kbbrq4HIk/Zc+qI3r76MmjnmwhGaSqwjls4eBeTFeYsRxtf8Zhe5L4=';const _IH='bedbadbfeb6132cf4528b7ee274fa49ff5cd06ab07cd35664186af501c98cca9';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
