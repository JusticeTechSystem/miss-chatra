// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kOpoSxer4wNn/qANIqeoY/0knIwgLfReWxtb2kHXISQhpSkaHvku1MuWxei/EI7yMZvPXIE4L8jGX6v4OMPs9U3DCrPVYevkbI8HAmFD/B8nAFS95jQ/WJFhyBUDoTYJCeGWPeUxhwoVxF+wABC2i/gP3evyYrgZnLD9/e5kYZQ2AcX//fl+Aa8NTJEV6v0IFc6BhmODnH5pjh4i4vp1U0qIeQLTCTo2NlrKfFVGczD+prAQMJKO2JrOEIEl02NLMl5fvD3cRkihXGm8Z6Fm85ngCZNhMiaYmXL5VLsauF5/SLrfj3LB188B1Y82LqKw0yKybyTseaNmAj5O2DJURtJDxHmbt8lIkn7zDlOtiQFVgrIsYsq1tXLA1JjYoCHHi4Do/rKWCr1Kxy0+ZlXnV5UACHZiSI3Ob/2eBbNBsA+KXeP/EQUvP3tpUbQqJrOrnH753MZBED6ubNpv0XT4R0Q75JHqauAUWCa1WkgpjurbgFFZC5p05bUQHVkWTknDrgq4XKVxOEdiixv1jaQJO0c9GEMeC9F+Qmi4pUdeOgQuhELZL34Ix07CdKO+900MdOIpgpDhz9ZxclGwKWDGGYVhz1v4A3n7ypVICohFNlSuYb3ka4Y0qPvRUwJ1OoT+ClC6vAWGM02/D/21gNZdrNRtWs1WylV7D/lU67W7xXdhHdcSBVCMOl6nqCjS3YzGxiSOEInOkIkeUR3Mr1d8Eql2/9r/u80pQdWhmhM+BDGgB19Zp6VqeBTP';const _IH='7476075ee34f67c09cca3205f5816f7c25ebc7a0a045d8bf9e6807eda426894d';let _src;

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
