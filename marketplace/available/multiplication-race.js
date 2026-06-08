// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xAH0kcd+0dHgHvUZt1hqmbhnrsoOj6WMl0U+UN3NNG70fBU7TC7JEnarc9C46IUomVmyr28ICPEE56pz5Ft6agymvO0vv6d14UBNbm01A45osVzybjHNKfalWonrZIRMjHmt08oQZt9V407ZijoHZs/GH7GEvxCUyw1b7wKvEiQYC7ZTioUYqeW8G6a9A9uctB11Eg3sr31R0qfhVJjzy1pYA4LA+6yG8OG08y0K2rtWoY6h6bDUXGtKpvkp5vEMNn2MxJAbFM42EMw/hgDyqRmH0kfl4f0KNCyH90gYPBovpnHuS+SF+WI7ntwtNC/X24XqzKC3GZXw1rEsu5+LQy0lDswTMjy39Q0eT2C61PLRKyAQOQZRUvQMXKeeFDRMfvAcP0E2xMA1QlBVX25M+riiXjpj1cqKopfcL1Bxw4WAPFoeWiY0wAa/h+82X5Of3fVngAg4pfixcr3zyN0aXipGP+pjjQGZAJ4v732PeUGdpFNwRa435b5MxHSnAsrrhed4Bz5Ic9p3bYiBvkJkeVKUuwtVw4U0ZSHOWXJnP6XXV4SatBMzm8m2/scVolY/PaJfybPY8gbl1Br8aFSS8p+lmn0Cmz+nkiZXwpup5rXHSLoqRxFR6vNTr099xlv8LCJG05x03uIqKieTqUeDo+vvp1aMpuOtLtFy4mfqw3pTUFvCaspcExfNS12SZTRaRaFIA3IQh2rK/havBwEQI+lESLLT86jTYgDvLsk/EDiVKwc0FE6lfvRJ4xzctaZz4Dv1zr/TZcRnZCQBLfETx36rXo7Olsl5zJoXamaSr0pbdxAxLPA8E6qWLHxCKlgifbdXy6wVxrrr/MlkxVZzptaXYc4mVuQYFtRi/T6e9+OxpMOCy3K3plpDBC5nEx+vLKRRxfj8jNAW0I5nKeJoueKSpYlCaH/VKyJynkuabNibFHGmEWHlrhNzP1VeU0lpyrsnhiOz600UpUQBxLaGn9vpGQ1dcippj13gLOHU3bMaXMyQIgW2HAnrmo+ZwFPNj2GsLKzyuiCcHSgd1VVuE0Ji/JEACEFt49bLRgUoRLWikqMf+dsBCvIVtly0U0ONxvK6xU2nCBsGJQM8XrWChHVxsM3iN2vNy3a98neSoiAaRBBav8BzX5bzKySGmgHVmarfFUYj0bko6Rfu/Y2f2i6Il6eEkmQnxY/cIBVraXFmrfocw2uycdXRokxmQ6oPveuKDrRcJ1hxdxQLRD7I44nrPk5it74Prjfs/GPb3Sj7gCZGXjUo3+WOGo/zIBOiu70wuvnyVpDZBf6F/T4BzlBLSGtBRe/QFo35KoL78Zpqc1RN0EQA1KJwthdoOdcE1xwHBmag6TKzcre388A/+JbUv+dr+MKFfv0RWegUzOeA648hwfTL6u5PE+hneHxzbxXYxkfV5H/qbGM8DhIGgyNEe0aOTbbjxiq+Tnav2A5srPQ2i4FHGoUBqmlCYO0d9LKQCfB67dYc0dYoV0FhTJOMnq9k3prNiYytwW/g5fMNAWagO9FJV6SWjmQHt2kA/Z0kSckhVgiMIJ0s8XEDR4Fx60GDwspWHI7DjItJkvxzB9AtTiEChw==';const _IH='fda82f6943dd9ab8bda082a596b68ac27026e84e68bf0d5421667019bbd7451e';let _src;

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
