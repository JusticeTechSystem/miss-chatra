// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1Sk+oR2TMopd75Iu5nf6a4OBUlxEfoubNI2KV4WGSwqWZSkUi+9rAbPe/3ioxZ+0M7i+oAhO/qeaSWUJdv2LPE28PJMsMiDIbtI7O18HktXfueZkKF9dYsQFAkIpt8knScYCR0RpHLd9xecwii23Tx3EmtxJoHduPvL7UxH/1zh9UGQOr0w/pEdClGX1Kmf57HjnAPxCcPX830mNVoU6p1ovK8hvfMUgKXHgFUR/lJoilHzbcWasjKsBfMA6ZFhbI4NK6y7uuwGIjRpEfXdRLGg7kac7gUTiN3jZCWbTdTBR3pn3mDuEGjwKlqfIafiW6kFXD4jtKYIBZOUFY8zQ/E+SAf6KEyRfMj/+xjyLVmZ2av6oXw65KJmVCXYkuVsl2cx4PK5sESMyOp560BYVQ10WbnMZUw4Bt3bv/bTBBSv3Ts0Q7U/nd+Vhwi5tkQoWrC131mSXtci62rAH8HqqXzPNQE/HAVyJ0zLy9xgvLNYKGKmODNIjUI4/gNch96kj6NehKLqZYokCWjllzs3gQ18csmQvwG8S3UFqthhyW1UGF+iWvabBafCKDFb9eX3cdeqOYu8okBGLsPSWSWOLvG8VPjB6HHQQajdFD+SC89w9oue0fmbxuVZQh+Ho/ju2XI5ynrsmsSoFIuOt6D8GwzGLXsF1ClR6DMtJqL1yQeRVPc/9hjdG917YUufgsiGVNNS60DlhvXNlCIMw3fIzDx0MOtbWl/VtO91pwc1UVleoz8OBrCZzLR3IxLhdE3E3wWlsvVI8LGq8lBcILxSQoRaH21tsfFvk8r54pqexOZvyfovaTPP/AoFQr2sqCGwz23pR9x90Ck7cthHqtMVEuyjSMvUbiVw9lVPRcYMMnAIU11C/oulzYwX4/sxr4UyUXG/Ucp/M1KaF0xMeKzY8RnT5RbF5jnTfpge5gqCSAN4qLPLijSLxCh43622kSwYHth1iUsm7t/xUrlnTswLOl3kUhZNdz1AzimSJtz9bvAiQz5yIjmI+kA2ruQ+zdvb2suHlYlff6INxSz4o3dmr0HoviV8ZjoeSw0ikDUb5jYqTAlNcbaOZtgzPy+c2V6ALmj1wk8yK684tGYmyOA95kzdF+dJNT4hbAw4AVKsj8dbNRG8mmYNeFL+691nc3GMWrNbGoFq4AKLX4gzkxdKH8/r21OE6tkJ8MQWYSr6YRYqnRek3E0bpaNstKCCrsJ3zmQePo90RdfA=';const _IH='3be8f54bb662f4127a61866c7576c6ced976a719cbf34e1903a2b1324e93f385';let _src;

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
