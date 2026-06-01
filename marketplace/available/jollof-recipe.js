// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:07 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ77a11EF1JUpqh5GiG5mIAWSOcxKeWFf4YsDQ4mJnmcFNmTE4tp+7KzbxjF+R9Lye0VcJ0k7bMFkNp8lGkV5yIf/sk6YYF4Qyk0vBNA6IPKtQ9/TOvr3j5X4eyvCVezDyamOcRmDjS9f/vh2NAITOKESsSRmC1EIr5ETg0NRy3thlpOv0FVZDb9B8vg7JCR0KUhyuGwAbjX0QrDtlSu4YSZXDtjpPE/KN9M2ctBnM8z0e090400+nQKuDTU/fZ1e4GdeGPhzFS1NJR2w9Xr5K8jLtk3va3PBhcUnCWHDqZ+SiCogNDmD7ferSKpV3K0/smgB02IZmLOlWDycr67+uF8LH3+d38zgBeB/WWpdzjkSpPtO6d4CXusJOcTz/Cm8YAYSsbJX4LRm0HvEe2x5wSiF4AYSQuMCadVSqvoX7kjkEq8Kq0oBhZm9ghV29LymbJyvP04EdcCfFIiUsjLcciPDhSpQCX7GeXlNvcin3OkLVm/eAd7ytbATNVYTV0jGbL/OXW2uUE6XutRL5/vvYnjbN/uClkLIamroih5B/ZHb+G3rMoVCp3xUIRBMo7uAIY9YY7q35Bg0UHomDgne69jUWB0=';const _IH='a028272da85dcb70cdfe006b7978c6fbd56c489758eaf0462dceb763982babba';let _src;

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
