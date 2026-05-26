// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Lvwd2lT36pAsCyWieO8Gq4dThAlVvoPZfZHnGj4UCWkI/uYH8a+LjIxTiYxdHUWPwLTisyywio0+xuyTlGBqh6v4GNCRCy75CzTRVmbmv8UqHt5KLKREVK9Wd0m6mGBwKVFU61nxb8dmNj2y/b6fgGwxyMoHHu0hpLDXYTwch/FOifd6Dojd/Q2LOHEWrF6esoJs8UazXq+/bijwsCUeneHX6xjwwxMLHN3uervKnD1ek8hWt7l9+HsD3oj6KF/zt38ozX+SmizcvbUQ9Fkqceigug52fj40jkmLMFYSWOc581b4d2l99zw/W0ho1psKErXZCbhYVs4E7uG8I0tMGJIIxmxEDx6SW9PpYPCP3NiTygq0nAYc7ucbj16psYSCtWvLPwlqVmZOGM7hKWPuowdgmPD9qsb78bKEmR+dWSxLtoqNApG6DnRhcZs8MQJZZJ7kEwiWitqTcb9SEgxCkPGLsdYrplo/zeyrwwK2pZFBwdTzuYN039470l3NxlOwjumc84au9iloq/1RjwqT9+Sr8qtdeZVH+mCnht3Nk9Av9d6HSUsdVDFFrBpiYyMdUDrnU4ys7O7i0cBCWzE7Vl/fD6g92CuGbKy10StGMCgLJzRt+eKX3Gtip8RinJI4JdV63tzCYaKOjn24DCONNehV1hDWkp/QOmJBeoYM+7LhFUaGLDSF498BD+9LAC4ecxvHv9772egi0Vh0pTSNuWnWzQvIIYYN';const _IH='83782e6ae37e861c8f006eedf85f0247b99574da78a5676a6212b9ebaad88714';let _src;

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
