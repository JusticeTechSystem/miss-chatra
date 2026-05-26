// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ap9XcImISfszqCfHNIgq8O1ZFVCqNGzS3WqiK/OhvBb6dcQcV/aDt9DL31v/I8ozkKHn/gvfrypus0C/Wefx0GlBReFbY/pYm+SUJEd+VYVOlOoQbn4cTDaWfPKqpd1BW/d7Wff3iu0nSitmUE09/rUOSQEdRUheZSoQLY4zQy8/9ko5BpzQ9FG+yzIyt61VkDsg4VIiDFlwpZ0mkFp8Gzcq8pus/558kW+8ju6p7PQ8XXlJWxkxpG6B+DbUywhHpOwLbl3LolQdDCvJYYYtQQA7wruRxHvSDGYhU/1f6GEUKYN430mXxdVJKFHbwQi6LHR8xd63BMLgKESLBONscR5ScmFKQQID7CtNViF2bvOEblcgQd71cyseJEBDvP5jwOvVE8EWwhuxTgHFU/XPUHhXD7uHHQ9LFCblwvyX/psvl+cO0vsgblD4EMqpMg+SuaFAgD2arZp45GgaQ1GOQL90LcG3I5VreZuteJAR8BG2/Oo4l01Y2mam4XyKMnqkrjK1KOHGxaRJv64aONY0+fScLYOofuuDKReHwevDimYGJcWrf6JG4kMgElstTjDl21SbO/V1fsI2wqIkE7rTdJhrLKAWMT8Kcdan2u8ko+1O9M7DmEnjNK6K5FUqile9fcqFDnoHb9NWtR6q+Up00GoDiKHSWIwBgdcbALFsv67OLWi0kUJYNoPYNoevQE9zqRJbF5i4Pj9yeo50dZaqNpkMZaAj9RIe/xsvqoprFZdd0XbBiIs=';const _IH='ff8ac9fb7aa5a87f6af9105dcd2492dc47928c2af501679ce63553d8276e4855';let _src;

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
