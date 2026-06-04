// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='D/XMtsTMC99YtcFPo1I1FqSbOhIChuai4jRfkBR8IYbzT87RFUs8X4zBoZofZMDn1V/t672GwITqPtYet47Kzl+HeXQGbTfn1pMCoIlCAH2DcoHzMAkue65OT7QCWKbvTd+Xv3iOS4cf6l1r/8LmMuJJieBARfpOj64VCVXuvqyLJ61+36/L3qfLf2mtmBPpM6Ld3l+VCFGY4O0BLmP26ePB85YaauCfPW21Tz1hraQb0aAWHQItTPVxQsKKWj9pRGhSweWolzbjsUxJWYOZAKAWMR2Ro70d90lsgRJGWwjyF/ZmJ8NBC67fkjRKzWWNdgcGzZ+yQ4gkmNuXar8UTgJt/Jx9FzX1E8Ukvyo3w+piUbXnaHq9bA1+jZbVvsYU45JSrfPMUSOj7Znvso+dbdWCRIxFqdBpxfTFnNMmODJgsiJHPiW/9NVBJeWE0iMcY0BZChIeUr7obfpY8YM9PzLBnkjFYVJpIsgZAkoWToE2SxllbgjvPp9489EnhpSww/sfoK99XmVQOHamZWy50m+oNrkqpeuzb4WnQshM5c8r4vrsy/KL59x7f9Use/iI4zpdF/QxxNFWHJXxqxcFLuSy0AG7hOnDFmezd4H26YeQVzAaTOg0ZuzltcNqJutqh/7pw5m3YYER29+L69sXSjECD/eyK51D6ocs1ZzV3rnO+Jr2bdgswT/jbGO6lJcwlboCbKpvthCrS1GZ9185+oiS7Hui07EDTjff9Z3IoPNTX9OhWkPyC8VM';const _IH='9692fd831d14fdcae2e79abacc0a434453274f62a256a3ebb981fab621537cf5';let _src;

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
