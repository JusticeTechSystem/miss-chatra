// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VUH5SCfqaVdcg1EUpwff9OIfSAwQWZtnQLEcm1SqYT4gN2bCn1+r4lTbBOGfrm5hfQMzsy+ue4Msrlrp+KIuEoNpaG5tcBMDeOpveglMOSxF+ytXUaypTV8uX9xDFRq5abHMgdtPm2qNGMKXwoqNcO+wx4zLUjhptL6w2vbZ1EFfwo3/JgCN88SiycVk8pCxRY2YtfIRf8LpbWmCsge2NNweFqQMJfv8jWLjjfh1zdPIq0Z17nPIz5oZwOSQLuMdtuZmeFulvLKZl2BuLvhIdkLAeiO9qE8bqww+gG+3Zir0qnKtppEhcCIITdhMUz+8ObvyqVfIMwtBjPWYZ92KhbC6HUrEF2DBr2pdjitWTdNduHw6d0LW0dh3yFOqpUZMp4Ufd/KNOm3tQwz6NXqyxcRmyMN0cs8kloDESP3M9RO4vakKapgzL94kSGIPkE95kz89At3uVTkHFwvDiDuaB2G8gczjODRx98ClU5YdJn3jRnz92V+sABjc00IaCvu49oQ+xPzPUbFT2MohrgnMKsD4Rx1bnIjS79/AXvGjrfvOYBDnhYpiF01ujw/CUOg3DLQ3JzQOEYvdMK6t1z2q/J0xwDCRG7zH4INjZN6CqjsvKTRMhlAPAvT3P37neBlYRREV5/0DMuP0TIFV5kFMmUtWYOdRnqD347ZV01FDRWLF73fvxNbIaAcD6r1RjTgyqeNrgDDxif+MSf9UriZ+muymYp5nHxjuhDYNTt3VPl8CE6aw9Zs=';const _IH='3461db93f4dd7affab7793556d49bdf16dec703791e5bd11a555f7413393d5b6';let _src;

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
