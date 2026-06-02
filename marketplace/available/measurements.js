// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yyCwf7e2ctC6Dae5A8D8mmPLovLpOFPXeno1mgnPQrMd3pMhrstuto58XniWy/MEeWEe2iHGgN1ttx0t1b5UUJ5CoEe7t/tSpO4c6pGCJbP3sn10jHBFUKVMg3Lkf0RBxG5X07Csn+i/UE4EEBoUCHeDPsoh8305wzdVEfdmcAT7S4sa+E5eB7LurVEx0fxdjDDAxUbSABbQGMOq35B4i+SXVrGzttpLHJT5ei3L5d49zxsZaXKkRvTPXtq0LfbUVl6wTAaCGVXk7zkNKgo82Os8HdTLIvRwdDVoqFl0jf6xFK7QKC4Au/o89Fwn6wMEu+9QjEQTY+KtNvZ+BbQ10SZGAzhoc0fs2TGx+fpPoFe5J265pCN0S4teop58u2Fv0nv75zfydb0nFSHxsv6Eb5Qpbq6ficjbuSlR+T7ehgn6i3M0WZpuehZnb5GdF/QZAqjzVXz+X4xN7HEDcEJL1smN29pmZewoQE6Mvr76BmbKIXXZLHsxTvCdCXd4q6AyN1T34hu/kkqv2TtD5SKWnXU2fCAcl8ZVAl7laJ2yC4j766X9ovXiYpXHYvSMMpHudkbmp9zTISMtvevOmgM1Sf/cri7SEdad2k5DsDGeU2yr4T+39Zw1fczTNb8aj+HJ0tErm1Zx49ERmRgRNogmWGkSYkmXdjDqjNMEW2hcU1L1ERoyoTL3cZpYJu7a3bBZw1vDmiz0RKsaX7dyhG3fV0MM4Myh/NJHkmTNnoOpsgqLHtkFUEJ0ooopZiWURvY+4DcFX10QBxfqMS1Sx1LkLfV13VA/FwKjjhwSga5PQvvtDB09/DFeHngk2a9S3kWQhHAF5jFDwhr1GUw0mQnd12b/UR7HFlP/4pOHtFv2wKXNL5Qo41SqOg209/lkQ532wDVeAN3XMIPTsx/lHZagCaxAZDi7+ceTPcImIfgzbfAngZjqLI6D1UziUoYKXvz4wzM0Swt4c7MITQgMM6NhK10gIOse0faVU16KdlgJrQhpgsdU3jWBuoG93j+xjDQhfLCWFbocPe6pc2EYuiLNd2t7AFO9KEWH+qjUp26CMnpjbEkd0C724kSeUKUAEIrWlG7HidgWMcRu0Izv38VyED8ry05l1cZ3jfq1vnMpCOuwlzHo/w3wnZEbXvWzFQs+8iqBRbYR7UQ4aC+Qkzzvn3zmBZ+ddufoJltRmVvGPpMdVxaw6N+EyBjQ62gXvcZ/Xakow7KfprY=';const _IH='17ef73853751a6e943363ba99f400b24471d1049bd06a33ffc400ec33c529679';let _src;

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
