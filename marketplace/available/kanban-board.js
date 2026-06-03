// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NTTZMXP+Wf2q0vriJJVcZtMtKvqTIQsmbZdWa4La0jeON2W7MRm2VUrgSO+s7KANF+swzKEqgOqTPXOMfFL74I8TMSceVgZ/HBSBwodCvKtJr2fKAGpfsTOO7Atjlt9LUolA7BfL8jCKmFA0+/QLRnCoC4iKsP9b5yT0A/T21WQvGs9tD5ayM6dHVDJrxWBsKjeqtDKMDnbKA6sS6t31M6hfAslrjoIE9vMFVgj3jbeiydsHr9feCeF3iDilGjiHCqwZGIbEKr5hg4gXqBHs+nAgb22EfnCzFuHx4BHcclO/sb5WV6+ADJPu8aaHUrD14r3EmLecIeZPmU6zmQ86UGHh+cpavVlPbkn0IZke2k01gUdNWIZ1804Ce24ipYQpDya6oQrQgSzoZfN73VJe7FDq1h4qWFnfi5+9rAt54+EjDttaZNWrvssG0LyHCqLs/i5isvP1p0TgV3mSSE1YcwWAMurEBnrIDuqTDEmKNINaAvAR6PdXch8Tzea0IsZYLFVH2vzWR5x9eGFZJIzW1u9Ee0bNHAv+Eqkiow/z4Xktxv091TEHMcSLStP4+S9CytInCGmrAS+kVRsZ';const _IH='27100050e0ca3b62b43b9a3b9beab75b2885b66102d5c30a094aedd5be5b9e51';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
