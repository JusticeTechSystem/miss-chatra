// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NQcnp14p9NENWvLSte5G823DUIU76pBFUXtZs3+cGntLg2gc1czMvKA1fp/Vj4Ihk9rr0Rxz1b+MtDdx4x8YS3Dw590gJRMs+6keGfC1gYSinQDvKCb4yhsGzJGaNFvFg/vz2zpARj563DabbU0r4S+bpRh0uhjIRQ3215gZSTZl9fz0l+elkxbaf2eOsBU72+qbn5a3jqqgKwNlRjNvUuptH5i2PlzyE1D+uHV6agAkBQujXmClGiVJ1GYfevXutK5hbyp2vbwFrEplV7R+t84gAFt3Tk4AzBYu7PJ9KWy9oRJ006oiO+FP+sfmvMhG0o8fxUYBj0PCcJUAFAIC/2suILXwoqeTpaAvmlEn725cDsvlDAk76HqoG83ClclHzPqF65YcSmfZm/EXCaFau+XjCVUpbJUq7lhC/pLnT1h3VENRfDgBEUnOX/p6P93WAWgeiZZ1raTCDHj5jQbfmTVrgBfRAqV2EDA/nqlWCKp1HGXZJn7r6oQlPHFga6Ac0GL0LC6PEBOOtUQHXsHATYIQ/BtC378yQdfRCasYtm7zTQICVojqfzhQLrHudpQlf1uhdktDkR2+Bn2CAp4LIzfcy4PWDA+km7+pJvFjBM5Z5bNH3AudOwbDHFY1340oX01X4NU8pb8jzWP3SuNvxIGiSNkQHgyX+6epoFd7FUn268RnAbsixqmlKBxBONDNylDhSO1OEs3x4liDkqK6HN14m/Hul4YkoKEF9LWkP352ryVHgh0=';const _IH='1ebdb4ba4cf8012b9d15b6336221594d2063c8f7dcfd6d1c2feaaea5d109930d';let _src;

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
