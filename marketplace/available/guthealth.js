// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sEp0kEtB9ew6pUsJul3octyawzlZ9y4LMp4ppRq9st1dtU/5THmWtP4L9l8XEjBprQ8aU1Az63w8/FWO6oB43G9cxxQAFDa16fzGNwLY17T+VvsntQGA2bgYMsUSCjOl9Ef6puhEF0cOXsfA63j+0QWXJX0Ig6+sxag920jj8XS7lxLzPH4EfCQdBL+cdIq9N/r9tDDmmbovzCpLmHh54BcOttDkr1w9yJUacMDiRGTiX71zD7NS4O7CqraW9aMUe2oapVuv5mzKNGXIHRY8vpL8L6gIl64FZgphdZFJsAkBzGu04zEU1k+YPiWhDFFnhaMtFY5Sxc9gnwAjyw49wTsQSCA2N/0mRhhAZIfQ2tEEUAhZyBj/8R/caFOForYcrZyN07BRzyQcc2E/wGT6dDLLH8jjxkGJqjMvtVOLdlIb4qKLNa9dX9PQtY2019hE63+Siq99X6aqZgBpgfV81EzEfQYxHObObbWH8E0t+TnCTik7exZzxwPwEovUjHIjM+r2fDdZhuM4nEkCqZt5/aSe0pgNWEXhNIaFh7/M5By8IPnTbOuz/z7gQocbXOPGbA/1yXkks59oKCeYeL83G3ccbM2eAtAXOoi/I6+Zy0MOlYSQmxt5SUOSBtlgJWYL1/UeSW7Onu5qDvqMYQ0zAZ61Brcn45n/srgOQcW3OJDBwhYh77shK5yxB+27S2Bh2clRLyw1N+dULK89eWYvNikdQPhFkmXkEaA45Ttge/hwNOghZIP1yeGuSIdI0nhtXNBTxw3wZYH0qJb1T4AX3MV+wz8tc34NbFLskNAgYVMDisZGABfSeIpkEhYERaxVRjahS9YRASKCu1f2sigqiLUnvxI1UqdP8dFrUMCc+JbokRc1ZNhbXGSoUeMyuij8qwu3iB5tLA7/02l2t4nMzuWFWv/OdgIsSs2wPNp7/Czbs3DZIxM6PnRx/QU1mXyG2Y0ZjA+lhJiLs2Jn471yIUK1I77uUSN7TD2U753amrZzJPGJ7lStxokwxSthgBKMdYreD9y8PAIzwRgBGTQbjR8P1CFL00o1mGUi6ceXWMXYgAt8rUXA3zpV5PYsiYG41YeZFM8+Is86AIM/LDKVKbAEvPrdaZz2ODjnYJtKWe8fVl0OYWaDXkRTA/U/CWvJk45AsiUPGA7r2rH94sb7yPkC5s9Q/cc8CUcGLBO8WiTGJ2rzydf9rtP1eu80+vIxaA==';const _IH='e44a6ea26e5ad89d46c440b722cb42ea5e91edca3115ac33273ad6295a69fea0';let _src;

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
