// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xwSs/CTlUuv1aHoig3iFLExSbcClwJR4bmbJr3T3/JInxV8gqhgcudcVUZdIBYQleJxmh7v0stJMLqRy/76TxMY0RpPBiqtNPH5C4S91YpQusj+lrs2dolB2mQ3wO6dCGtYJHDd0Tb/HovAjZ291iWs6W24I3RykUNXYWqJ2uUbOu1meZQHDjvivtuLPXMUe6sqyBvP1d13N7uMsbeJX1gJ4jyTbrF7HrzcCUIc7THFEkV707LFEG5F8GFZ6L/Qi3IwadwAdBuVZ7wjvYWDIo5yRzoyfu30YzjR8KOwKbPSqUyt3WZDZs5xaiKoofFWgW9nCGDZjXPhyRrL0GAYMQDd4kkD+E7mdh2YqRI9+GxIEqRKeNoNTyd76iTHdw9S2FY9vlBvj8NBYZKXOaqOfzhEvTtI7yVSQC5ekRHJ+TQbubGIUGRg9/hv1T184z0S5OKf0pEMiyVl2rF/Mtnj9mX/N3fbRheCXVj8L+uGma1h1IXnmp3xoqT81zFTbJUIwC28RU0a82/W7t66oKUd2hcjjuSEIuXxqCUK/tovmXi6L6f0Vt/KFonG/eip5x/HFhCXHheJQ506wehT3YMGPeCf3tGeCGirspdXC5x81UVjt56JAmgCH/KmAkNjWCaIwqZb6GfZECvAbNOfMA0uDDq6KAXmMikfUHxvgI4mmbbthmKUev5Wn/mK/48HmfgfV0Um1J//2XpywWlPMrP64SE42CxwYrXwvjyui1vfp5Tq6UYaYD0QKb56H0Az0RksufAygAU+NCiiCweHQnirUZf4V+HiBbMBIPMexGLCsRVxHWKzNfl1ZVjQC7pA13c+0ED0TVu3Zz0Y7TU2Nd3cLDjJPB7w8AWsFGBNTEr2h4euMEhxnfxMDBijBYBc5vhytWWbcKSU3DEPio47Y2NVGkbfXc4fwCUOlxg4ey39IoRNsNmQ3KHWKiGeCMZnEv65pZcdFDuvHjg/CrfPdjB3LRpfalRln4ATU2mRripJ3TEcDAAKbrk1jwmgC0xWS';const _IH='a8eab661bd94b15ebceefb69f01884e44bf738f71f4829618d323b2983d9ae9d';let _src;

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
