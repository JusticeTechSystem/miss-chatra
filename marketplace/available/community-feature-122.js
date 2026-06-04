// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Y7rgT8M18eYfDcggBWkayKpDCFhLP3FgfbidrqVdhin9wF7VIDO5e1H3GvGh3q+rsIjN6NUIG0bErwrhSJJsPxrYFZS8I2/UYPKcJ9B59fNQl1PHBrfFM6vVLZ7hXbtPgVixBbpgR44XW/0ryP/W7HX7Ye/mZ4YNKYI3wVhnygEJ8oHZ7c4FDse9i7tEzUuxELffaCtMGMndJsJBzcEEVWfhuMpPSbyVRbuNVT92t9mAUbe07y6LpZGftglEi9BdfzDJX4NKgsMbnemPNlqCtsZJ7lB6Nf/OHY0WF1Y2EfKuD4o3Fb/q+WfZiLIKy+KaiVII/BrfvH7Xd7Gl+PHQnxe541+xeRBoUjY65uByOL/lI/2h3f+EtMNLckxtgXssa6546zV3dFM2LDfY6Ldh71piGJtJ6jqa/TYdb0THr++J0n1wE42dPrW/cN+ieSc7+po4hwi1EkxKOeaUDwWDGGIbHPzOZlyMZ831fUrG7LbjoGizAz04G4Sgk6keZ59Ioa5+9Uf4t2K1iyAGAZW6exWVp7iBZb9glGvG8eaEFxcglGIEEO/FjUnO8bfKxQGmWCM0Vb2VLjbldHkteBsHzytsjoAbPcIqqMoiZ8DDDuMBldtU4XdJv08BXCBmG90bBFDO1wx8VmHXIrDlRkxwewkKg0QP2FH02Lb3kePLqYrpOgCAkFbuSKE0KOhrRfa5PKAMGq4GdhIXri6eLsK1BK1QW8hOpt6UpgHzgjrvv8Mb0Tw=';const _IH='10667d34b1d3b680914fb7942848ccfac445c785b4892d6d1a82544ab7e7b12d';let _src;

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
