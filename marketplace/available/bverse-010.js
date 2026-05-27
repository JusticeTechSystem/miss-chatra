// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='N3yETR4cSCunZYJD+G5+HBAWqx2+jAjg4gisSiorsu4ZIagk+1p2+CJF0RH3zy4IQ95mFN3VdYJTNzcJQx7YzIdnqd45F8CzMs43ZJHrHCEvddP6B/YmAJTJj4cEnLN9H/CSLdJIKknm5su9Mpj1p8jgw1/DHXBOiavSBo6Z+5IQUFt66I3AYagJaFUfiDW7y2DJPGI8hBvVB1DURT/vPjR4EQKon36BfxhgtdT/qeo+YAl5f1nW2J2xfTHLGAbN7+vSs67gEH3WM+1cM/eT6UpsAWrkChBFnau1dUhqj3B8jc8NM+s5EcJYN5LMd9K+8QL6lx8L+CiQ2pdR8K83lp+zDF7VU8HgQi/oRitrNc7hgFL+52PgBN096Ap3yYeVFMLl2mUx1jTZ7vOz+CwEMVjmdu5Bi2UKtOxHSPwRz++lyjzATJ+4KvXJUcgcT2ihbFtVAPY5ZiD3sSpXN9UP6W7C5hqM7zuoAhf7MqCdXuQV3bQOX6piiwPtBFX0Wpoay/rRF3CrZNKN70GWmuYkrP4ytBbSybai+ne9JG1febwXDuEet413Cd2Nj2cRdJjmQgYnjvsbxLov8VwcusAA1tSOwgmMwVEgzYXjrVkzVzVoHr4bObPIrei1oglh830yqVOdazk6ZnkRi8f2fbJ9sIjXrHAymw9Lg/pstfMkx1JBQNtapgJ3t8yFa1MDAZvwc0R4HxGeiFY+V0oH6ZOHvjddfGT4sw==';const _IH='6e9862ffabdcab126fba2f781a135588dd6d2f79ae54d662b30c3ee4c5275e3b';let _src;

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
