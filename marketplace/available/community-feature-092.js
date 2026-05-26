// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aB9bKjmU6KpyFvvvP6LLA/cJd1KkOD6zWoF+9TdZwgovIbC5bjbnircWcHyXb59Kt2NfH1WMg/XEphGtJSIwa9KXr30Ew5yuklp7vsJXVcXLERroNRzYdK0XK5l1PsNouF+JQyKuRfWQ5qNBukMsN+6sJi02mpR8ObO2QisyTdkB6fy6xldYjxa53kxSp5DgVPwJXINnlFzSu1iNPsO8RJi++m+nwHD/gB23bZtMMLCEuTNo/0mlO3smFUtR5XrRtYWcikiYFHvVNKrzuithez014U3Hof8dvKmby0irpUnxhuSsoYCISKKTugVGcIri70IVOqXGTuPz8L+KKUHQGq2zNwpbwSxfjFaYeThqVrWym1xMEF9zKGi9iyJNSwmw1Jke9R70SEpLAzzu3+QeXpTs05TvAn9vgPo6HDHOupFeuW1lrjR6cxwPaDwrptmmuIHa4LqYvYKgnxz/fzQbpZjrCRxx68Zb/AIggE1cH7DO47BiVhxsofbRUnZk6092VxACdGGJlJomxlhiJTl5t1xzMal/je1Vu+MMlJKxJF2C0MxsuXyQtVJuJg4GbEumAtO6oIb1NYOqqwm0oU+6gkkXliFKOCQkdkjB4BUldkTY2TmlfgeO6XkTzK8pF3lMbNc+IvIE9cFyyYeKkHvnt8/K5Xgu80uQ/2XOXWc5n6kzu9qP/UFaIRjV9gTg58k38ZTeVOJeUn9vCkvEptOz2fCdHRenE3yU3ZiDwEiLTQ==';const _IH='744d4c974a02731d97957f5a7118ce42164a32ac7e4194ebc60d118b511ae644';let _src;

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
