// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+2EQYZLwcZorkJd9WaFWTEjpGBIB1oCIs2CsmopJPEkHrMjJ5NZE28+3e2VFJ7mTQIK8unZkovApeghpQWdcOfOmLUfxkNH25qQdJvFjG+aWnQg0I0Jk/KIOd6qliHQmmSI0NmjsdUjRnYMUf1xDMdl9lB1ocwQ3f0csG+JSwJIj7C6I85KUK5Ia93WnxXJg5M79xIGePkNiWe4vodiP7edudFb45SlZSmJlqQT/4h0xGuBraCH7O9oCNBHJhjZMTAJfm9mc+epkzbZ+R1yreAmfc4mJ2rksNjY+6TDiPBprt2wxyR5Gjlljo/X9Dsvixm0CXStVChZ/O1ZNooY+PADQ2PRlX2spF+7GLFaGqwZVS70BZXTS69GcZYHAHcF/l2yFO+m8QME0y8bsr8MUmnmSIDI5PXGLSTXASwzw4skGlhRwbPNekVn9JhYP685Cti/8weRCTg24e3crn4cOhKeKEYGlg3js3mmlrLIIXqEB6tii0+YLx2KZAE14xscTkGNDZ7ZhnLGgcM6g68A/puJLZJzSyhmL3xqqdudjZ91HfU7hz/ArLvZj9zXzEy8aFr/FHEWKdq9F4AzVg//sr3ASMjtTc5DISrl+V/truz7gWe4216XByFFWRGp2GD7jtmXcpiQiUz2O36f5bxbOON+gb2WMjc2IJLCfJnoByF9gu0jJ7hrFq97r+WRchobOdMIyaScXzXMXlP8+EHqLpsmCRPqxQNWHodiSjyX6w+AZtTodnyibhPnPi/CYGTysbThxs2wZr8KGqj9pjDQg408Ql1t03fbFZ1YergKwmiaDKcn7z6sOrHHijcPmb/bmIhsMuPmVuL0e4OJ+NioeCf0L62xKcTnARcQQmtAfGH1/Cbdy9CjDAJKqB94xUHQM2/m/NsKiK+Wtcrgo8UsAnxAmOjpSPPcpvIF0f2so4qvzwrKlhTyG3nWj0p1nQKJXRvyKIN2fN2E3b7wOiuSAtCwKfpV43lCtsBYNLSRgPeOOfHMln4u3PUBA';const _IH='466945528cd4bd40e965ef0868da18e4e5614a32510dd44661871318a116ad2e';let _src;

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
