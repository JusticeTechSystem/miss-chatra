// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRbSMt+cPnh96bCYNxMiTw5nFOuRu2oCtrWrv1/K66wOxVi/CRLVR1yxojIk4Js2bdyFuvmzzOURRxHr2ZA8yejaBNww7rD2Pe6jolxGichYQeIIlYOPU4eq95PVjnmAyxM8xuuRf16qb84mCFcs1s8KCpvLgftf5hDVj6DO6F1vh5bNYqqMKwVJnTolE4zkAu0XZgzOoGjrfQzGuDQmxjhZMGRjFJ+3xWFjqDl2aZf7Xk7p8wAqtyjHTn7F6f0GyB4wKmCVb44IFTnd76LNKUL3sF3N3A05A6k7VqmHhnd8O6zCWmQCiy2ipqI8cMbtWAw1uXJPeEu5DICwmzqwLfLtIhdVuqzgeW09wVtB5vW9GebbG+T/BnI67k7q8ucEawTdTgkS2B/JWT6SlmUn5zPHN0hfxebvBUksVtMvfcx+RXQC/HVJNl83rF7DcKISZDjiR/X66CdPgpZSsx5Yu3eSLrdkZXB616OBlG/Dkgx0Aeh+Ac0otmv4nEpZg80l2u9kOhanssnQhbvSdDb6cAjO4uod2NV2eYEn83jCdqekDQ6X7bWHrTpzj/Ab5Ec/8WhxVdC4kZDW789iCVMBLeSo40tPHKDCOj+S3/rR/JMblXedCfN3yg3bfOVNpzMUZUG2SzXDtTnha7bZdKtfNEzqw60T/5/NxA/c/i5UCBKf0tR9GkpYMIDJ8RzgXoi2/cwJjaObdybGrnzdeel182PZPVqqQ==';const _IH='66c352254171c25a5e6b84c0f5034cec5f6912c2edb3f2a5d32b1b72b2579f25';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
