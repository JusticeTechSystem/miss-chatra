// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JhXOyYh2OJcfsDeyY6ykjd0F11Qn2mS2CVDD53dDp7wMcear2p7Bq9bGAVq0TDp3lEVoxvNs+s++KxOhOhhpyS5D+wlZwtBs3RjA6YrdcJor4py0cqNIszMNyUpIgJc02JY3HxeRMxxq/mEpDkptiSdOqnauvsd0906ubphwBuz/SwhZcl2LCU4/oeAJXIxgnZJA9/xItqdWshuyuCzqdhmqnz0E9dGLQOVUOdrbEWat20qBtzqoWX1hqg2gtL3v+Pe2PUKNlBzrXBfP0n8aMmnlAlAkSk6M9/w4QfTVXtoSZVO21fGtXbeMDSId7OQ41K2cHGejbfFxQOUHgdfd5ObireHE6OTW5FN0rpw1w4Dv8Amaru+hsAW25exwGBSTIxBMCl+9v9FCkTLNGfb/J6N38un8lXgjSS7CcSzBXJXDiL/eomQCmT72hM+OlivwYRMs0pPJFr5ygrHdfyFgqDXHZ3XPHDJLtJ0Pk02lIvECRFbNtXfWpsIJqLrzAILgo3OFDe49HPfxSndH4dyVTfgf1LwtJ39j9j3hHeMqjdW0EaXS5uU8Ukjf1Znu1lvPVqpbc5mYmOOecIgoNVPaanVQ0zm/RmaMFco0yNZVHb3AYqzuP/DX7epBJJuSO6R0Q2If4objIhDVRRGDVa8l2D9aYFxDG7UFQFnEm8Lkv3KdLdl9TuoVP5uXzF8fkZlA';const _IH='ef8cb6143210d3870518ab9c1a37e4604bc5fe14e9f272cfc8e3789de1c36619';let _src;

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
