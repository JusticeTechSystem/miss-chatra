// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IBIexRZmNYVBgG7OEOMajT4qf71VG1c2oWzFd207+PTwsfTtV5KtPws6N49ljpZCUtUtcplsvtLV4hIcW5kYKE2w5a2hHUEElw81SBIB3LEmnmhlqIJkeDvGDZtJCyoar2UvWqrZAI7cQGESNaRqcRTKMB3Y8Mzb9egqGeNupfHB/5OTQaBW3euhhVyUN7771Z+SRLCj6sK2wSUpsIrO/XhjR38mT9hjso97YBw7/8RQSX3tcGUSPOjkPw+dPLuRPGJOm+sLfjXb6xBH1t4ss7ELl8AJuHWwxbsxbfwK3en76mvli2E2PRqWEWV91W/j9NwuDGOZta+G4COCMm9QmSSminQnbqXUgJFBnRStdyBtA39jqT6eGEoOpfBwk8HfSzlPmcGKLA8T0j5cm+YOTRjUWai2w2v11Odh0mps4F1yA2Hr67XEK/L+KrBjY+8hlfv1IdhzqW2vR+mI0VjxPwli7+jLgqaaPQ7NZ1fvlDbWaExqNDM/qivdKM/l1Os65QkxalztGS0PfhIeUhRMgmUa80Pnm91As/vNI9SS4rUzNE+aW1x7d6jzz8e4NjCsPYjB/OVkHADZwMl35PLpZ0fWbOca6NzORbq70ik75AHbBdHvZ+aRi3ATtVdBNe4UH62K5pqqXrmT/PVY1mxf5UlyocV7kX0xe45LKA5FOlMO6T5Q5uaopOv2wFL2mOE=';const _IH='a82ad120d4160520c03b0fe9bfd00f125ce3e7072c49b904da6a117ac2ed0b7d';let _src;

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
