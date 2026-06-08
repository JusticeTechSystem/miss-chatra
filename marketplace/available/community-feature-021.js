// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bOWgTuK2sGiZ4EyDWRJfOtgHwKPxV1BgUe4dkm/qKftGzzC2N5RdLMoVA38bnVthedzUKMytB4GZQlXzn5N1RM3icln+isMKi6PbKGBhipuTLO5uZIDuHzhu6kVTzpc2PIU6sRxWqQW6RhfK1UShKaazbWoIZr/aQtIdlxJbrUlw58qxtslwgiv20KHPTcrhGbb6EpVpj2Jn+TDXOP+FSg7IrGgldiDq3p3Jv8Mmfg3ggZCsF6Dx0aqfVN5V8aqxaFXtF+MG9pYOD2LSI0LxCsglTRW+JqbwL3AXHbrFEkOrAMhu1/sDtkqNvS0IJYvczZTJz7tjyP7Z/WtFalnwudlxb5A5o/G2tV+rWr2m4pWxvTl3LFh0n9vVWj+6l7FfyKt6zWN1qe8dU3fswbe5+TtoWGW+a1p6fbTnu5iwO1gKcbd07efioaAdNZmCF1ed9EnDkUQSShDuFD3Q8Jsx+8c3ME+cGSaXKVRgNOhmLcskKYbCcKhS7NnU0UkMdF4l0KmgZUtNg9092UT0hbw78HFli8p0gPcymD8cvBYs5FH+HKPK+Qv4pUb7/GSa3v/qvhk4vdgXWltfGiaTe8yUFMIhJ2SNbR2OJO8fEb5WExVop3FnWvRjPhBieei0E9vaQ10feywJAYWHOkZA86lWHl7bsX8JQSy6uKBCzDRRdQdzINiWW64/5FIaFFfhrGTE/gWCdS5tcE08ZZgvLkU6F3GKlUk=';const _IH='abffe69de0bb045f4b095170b60f6774846f54a01e2bec92efa522523624ee71';let _src;

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
