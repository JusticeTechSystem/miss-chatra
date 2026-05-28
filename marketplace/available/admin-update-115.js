// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1Z79KT1zT4M7ddz4JJYg4X55OsLswXWE8zVGrHPGTi+7wPV2Nn56EROsgdg4yAW0VcoNbdIYowkAL2pwdQMWNwxpRCdp+PTrGrvx5Q3wQgJGctRXHhovFZT6P6yMPeu9+mIPyLV+0eIXLYMEV08/FeX1CjjHOfUKdEVOKNRJ4tjFwDB3Pwm3CsgtKQVWQtXI94O5hxPpHiOHyniQfZDxngHUATNKVXb67Lq09hhsp/56NvyesI98ryGIaEmmlr3wejnXOFX8mCrxq/p1YvGkdlljhQAHqhRCvYzGytulEK9uOqx4ldNrutc1pyH7Ulh3/jYQjHN8uaLP7Z99LLmus4YFvjvPHyukThCqMqjdglTBoDkWgbA22q4Psn4E2oj93Q4rt4eLW3rzrrKHNAsVgp3ISuTkgm7jFGOMifoR09Cjy4+8SXX+D6w3SLRurDZ5nVdOD4e0gkRJikgmhpMVZBgWGPv06KstiXmjmaI9fGA2troST7dUuVU49NOyjD+KUwbiD1uqfh3jVULNCFAxM0ILYgqEk9RQwmjLB6P/UAeg+0f8RdeWEgsVSKYnsZ3du61K/ec6/l/aJ86YViTCT01jZv8XZ9DiV8DUHl2mwWiIVhoDZHgZ3GZib3s483BQYCRHRdxcl+E7qtgkWO31NVKRzUmAsjZAq6Y5Tg8NvMqhrH+Pmn4gEboIbdrvjfhgMkW+Q4rcDd59PFM/iiqfZizlUnD1DDsIuduzEZSOfqXMN8++MmgzkswTqL7MOPKB3P1CmHZ1b20rkMcI0QduHztd3LrVwBT/owMWAjw7Vgl7D9yEH0Mk08VRFzqbe56w2MH/DP6Jdc3MnBOqiFl+9C5jz/nz1jUfEH03cVje4mk5X/c2ksfZiCKoPViXBppygi9B5mb98TlZzth7QZhOEE6rHQ0bNfH8qIHeEF/2eddNszsvN+sxR3+mab65IasbzhYvB1+EELqKj/q7ClSlOb22Qxg52qaXBedClbHuqygKVLNPdGbBVbjc8T8OA4OMAw==';const _IH='d2f49fa5170a438a8ee36de3c3c674ad13d28e5239abad2bec0bffd48de76e0e';let _src;

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
