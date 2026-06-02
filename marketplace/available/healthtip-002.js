// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZPdlabOGrmm4ZCi5zgy9Krbne7KoVH5Rvz46oJaz8MschxS7e5OF7den0e/0FTKOXWi4KUPHLtRdPa4fsv6zWBiqbFKpE0Il8xpOWmcDbfT7OOEW/ZakN1/riCiqGL+cmroTi+jWPWLGK+Ir5tvu3QILD52Fmo9BBxkl65vjXXe0+5ew6ExI+QQhBYnkupaZNQvLot9RaMvvGtr+loTUDyXYWe4VihKtfLGk44RgEbEUMIUWz4Vb12ibN1pHh3HDeg4tRMx3G/hytjhOCkXfqkl83oMlhUPgaog8DtI6o/JKnucYHMioiVEcgUG37ulPEmPIfTy07fCWE0dWet7mct7THVXItll7AbnAYrW48egENFH/XIOupMEvC8wHSbirvhfFFeuBzo7KS4P8Y0SIAq45kp9UhpgWcsWIltZrCJkGu7hbXoKrOOEu6Myp6xT009z9p1cyO7gzAaJ6ZXfFP/CZXLRd+vhvCGntZCZBusiKrvuI/EA9HDtv5cQx6SNabJtM5XmQmDGyktwCk+dCrdxuyFlXzlF+dxvrLyotevXb8jkw7QOfkDC1T+jfIHacQj9HmZWMuv2/w3xlhkrt0ivJi7knKz78goozVgyUF6ZUvDhGBRDnsczvPg8DgEmmAGvCk9Zdl7CphZ7SS/5HTIWa89cwgQfvzDIgW9tPAkF9F7YsFwH59sRqMaqPEa1dtahGzskDKxwh7qFcrILXHkwMWYnEbKXmLfDgCSKSxDNHB9+cQWoR1NsdrQTn5YNywRmQ5jhjtitmuwPHYdFeDkNW+i1ik2snDCoHEJ2x/ltcVJHK4pr6FneTaK1FSRHVFkjyeq4qjBwGMaytAhRsJ5xmtq51Y/WfUTmOTjzNmdx8abwYuFB/DRDGk1G/aZR5vba5DIlr/zTeAJGFCWWSHfiGm/qkXAAjX7jlWsh398GpaPf2V+VJbQ==';const _IH='e50980a1610d746c2eb9cea5df6877563e8621cf823aeab9e4d1ede7d057ed73';let _src;

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
