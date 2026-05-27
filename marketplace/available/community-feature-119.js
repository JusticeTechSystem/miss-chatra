// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='M9doJKY6ot0OhjEkLE5o3EGQSSH+4M1xFF5KNpKwfxev/FOAmRIFqr0tMC6RsoSMVY7Sd5ApvYpW5ngLgVbLgFV+/SJ+k867hTFsdncv+C9o2OKLzjLXDgZUXJUPj1+BU6yKp0hGuFwTxs0KnQkwVfDorWO9KkUE2VMZXWUag53g2MXV/PceI0TLBkb+AYeYqA/VqwMuZIKuw3eoVFRQJwNlBDQM8t3F2x6JmEEqBLkkbfvZpcyh0oMpJVxsKUIBX8m8WFEaP5N33YPnzoNXQuqLBFDSwY7shppx47TsZ0jLpgIXK2i4+n6HlFhyPy014AIdv1J/2bnR8KZIcj21EXtYrBbaZiokKGyOf4mMD6oKohCwlD0m8sYNydwqNse0jxMjaPYcn32WzjJW37Ab3BCo2Zs3oz4MP6vkEBzC/+wDBEc/DhkU5BWl3mPIgfqrbmc2w5HnGSn8PHb/BxS7sjT6g3ZxlQHEq8l4Ey8/nhmVmGMraLhUHeGhXw9b9kR3YUXuUAud/4/Gs1nCXaunIyEQpZYdPGeJd191do6ZnQyKULC6/JglBt3NzJ3NZiHi9kWPxsSSOpgM4DP57BqRn6T2rWsSvQ21b8wp+6mef8qiwLzdRTwxkrl5J8ykAklNdaqrBVWFoP9CboNKxkdkKi9B7KH0h9cKNbwZSofHSsw6JwxHbkCyByhni+t/56jo04Uz7DFI2pFJo1aViVYWTbWCkJjMuiB6TYGKoekzl3Od9udhPyU=';const _IH='ac0ad2e4e6eb4b534bfe5af8fcfffc29b258f720c349afbfcc90cbe3d41f12eb';let _src;

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
