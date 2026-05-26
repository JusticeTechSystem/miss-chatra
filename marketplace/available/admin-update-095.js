// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FYaDNdsheQGYyMatqakRooX9Rk3mKped24Uttd8EU6bMibUAxy+fRH65aXIPtyVjlpD6qKyJ3LL5PdoiPM7VrFQ9rqhCch7wA0OAvAaUTq6bbZRG2rKPNChIKqI9RBVvqWTiNe59iTe0Htpk2KkRIaZsZil3yIrb3+1UKyK5gVXe8NZ8uwGYMgPfar6qspYrXMn5EIQowDUA85QiQHSBwbNvGiHp5PcZTB/h1Wh4ifgIRMipaGPQvdGs8wILM2V3wPGMwWbRisr5+XhZixHAvqfLRMlf+JtZeB616NMo2Bqt6s9aOUuTfVp8Ck55GCPaM2j3fUnc1e3+nWume2qGslZtChrJA0r67fwFvdnmh5yIap3ZUY3JsKv+qv/hYaSHdtzKV5+EEQlI2Z9mNbJoTZdVaUUPZlOEck0BjVEROHbfNX2Afy4+Y+ASnPVGXT8UEUwM5bNr6Jx4ZMcnbnxPnC7pQS84uRph4x0KAMVZOiQ8LYkUUVDwoF771mYAc4zwmpHiA00MXNhLhOs/pCuC2ZDgNogmh467/BfnZLa/Q4B5nn9N7kgTqNiTC9TaUnzZyfaNnE3z+kbGQVz92kzRIW6hkfllLe5zt65hhHcdHrRGDZDXR3pUYvD4eCHZlcqSL5Sr9rBqd0g8URfU1+jjhmyEkRv4patecC0z2qRjjGcAdN6/dtOZqowCO/xtgW0stN1nak2kkdfpsNgICkvY7/yJDE1iLKBZpXIrwZTnxISOoCsWPhnbr/8qGlYwj2Lgf/ehq1Zs/syShhkYYcRb6G8v2ARZGmDLSDhozZlvG+pG+XACYfgwHnWCZFCn/sbOXRgolqAg9gIvzz6u3RD3UCZHJ7HF8tjym+yerEq9s5omU9ne4Ah13XJDtumzvmgfY7ZL2eQBxoXYGs4mJrMNuKYC2cCB0qvn4ILNroWbms91CBq6Qwyfmq10sEGhCLzK/bqIV3QB4us2aj3MoPYjbrGGOSMMC2y6ajJfiUSVw5TdapVtxYeOia6jSMID';const _IH='76becbbffc2444d7b9ab30db567b1163af76d14a4839c600187242f78b55e766';let _src;

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
