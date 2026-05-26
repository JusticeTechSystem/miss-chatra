// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VZU32x+riu/o07PnfEIa2wmawot4kFiXkicFxX9zaNKVCVzbgyZArhk0q1Bu+nk4TotT2quwb1FBLbjrGLUn2SmSigglNNUV8Yd9o/c7x/KW84IhwW91oqNM8PDmqJAJVLARl7/5Zdk3RE4P1cnP1uagQyKjpBgZ0BP/ugnZKbWPVthRf21GcSs3eiqrrKjaDTYmxyYTz5xrhsBNFW8fTTXBFrYSklmzKlAjtRYbmtesra3CLow/A+W8oLi7nLxBAo5RuDUEiaAhAjE77dtHCTk8zFPkWODSoEbiEJzlITkLwUEr+cEdrWGZTojqVuqWIkNrRUSKUz293IK5xRoZCI/+aQ5HrVspH8euBDtfdqTneDBNsruFCyNzgf2umwKf38XBpTfFF1R0SZtdp3pgtePDf0yU3D+ip/SwPNFwNtxEOqExl+YnDeuwoPScp/uQuoNgpHVsskxMZpFeV+CgKDAMKdgZC5rL/fBCGI6AUNMxvUZDhNJEEuCyhlDE0cmFZ84vLWfDYIPrPfIeAFeEJTdDH2kdhoABV5g9UrwfG+bLiWUEk2SzmZw4V6jTzTpdx8rNqv9a6DszJgtAuahAEjoRQAAAt3y/6GuTwMLajDj6JZOH+rRFDR6DydGjwaXsL6/Qc4jiF/Ha5XmJHCxEbNiKZ2adYSy7iGIoegI88JbpycinUmEmhZ9PhxV/jmMtZ9Wn0jGBMN0wMOwpqjCukbgkTwBqHXKOXw==';const _IH='9723c68894f0f223d9d4f5d8fef25e39cb7ee63526e991a019098decf642c0ae';let _src;

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
