// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FgOZoRFRDvTV4gth8sywZjEllY/UbDicgESQEFS5YxiWTOhbCUXARytzV6QKZBp55Dq7jrKBmR0+U6AkpMRKg3B8E1IPSnhjF9unQSF6oAzyURRCtYw4IiMnmSAP62VMHy/caYLfV3GEEb0tODtTPekRjYf712IjePE1VhRPny3WdbqERG0SVbi3fHD9MNIj3vDSDhzpqn5ps1QaIbcORBEfrQ53StOm5E0sYEqZB5GZbxX+yr4DToz+Kpn7JB+Z82tPisLMqTKYVP4J8SK4H7vfst/sIQ/8rcI8+u4wuOSusm7HI635lRD7loPtWeALvY8NtZu+x7w8BQeWTqdYd32SjmSpUWnvZ+ujGXpdVKb/m+L5G6ACfb3sq4bs84Rk78jAmj1ZT7QAhlEVb+9bIAZV6J2BVrZh+nAf1/jEoFxH/S6vH9cZ/+tYDGFq09nzPnJjCAQKBPDuXGGeCuhP5j4LE5po0mPVNJo4KOOIxYkpZuxQwTIUyu80q2RUF7t2a0lWiI57EiOJfmdjRgifbmzGiPWkKcAaktWZj4RFEHto+figzBliXhsYr+cohob8o+DbpZXyJSIdD2ndrRzMogk51Vrt5p5qRDipHJxfRUiAmzLgGeSnDTzXBCfxzCTJJMaa77diUxGZ7UIVFgLtbXMzQV5MEqPNMDzFwjR/k22pDiJHrXrthF4PPPnRjCbzab9OEg/1z7qZHf/uWkAjCWZk1n9s9nwfSz4YB9+xMg==';const _IH='bbf731d3454e37619e1b5d25160f3e87fc75285bc8191fabed61cbc93ea09a6f';let _src;

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
