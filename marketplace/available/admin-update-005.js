// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4Bo9Mq7QTw4ghoQCPJ4LngxVgRf2S/wXpo0PtzYFLOX8Cu1Djl9Hul94wj+XPm2WcxdxGU7gh1pRcjFSlfiRfiISiBQxgZqwUy0pSp1vhM5OKchqczDOEW6JTHWYcIAULW+3QMKSNsoD0duJSojz58HijAaNB0aDdMDpjMrAexrGI1SJNUrxQttCAjof87giXoA8a8Os62OsVfrJKW3jpc8c/xOpiq6Bonc5H7TM9Oc+2nYcdXjXyMw5HP3ksbvtTh5MhoXChMdtu9aXH4922geUN20N7YoYIGV1KoaujIlLQgIk6XiZTjFy66x6evDXN2g5OI5xZX3gIsKwNICPiJaW4n0T/DF7QoJ+eGQ5YyWa1QU3BhP/Ssn1JCpIbLDXofG3FycwiNb/45e+pUdudqzyws+tZOIbDfB7m1xL9Yk9yRH3tagJYxuXxjnFfl2XVDsfc0UrZjb3U1oqr2lvUAzTPwQULZSzR1H8RTaCCcxr87gUdn5+HceBkFgdA4bBJq1TEANwCt6fBDMP2CUGcXrC19HdFdoCAb22CUGJdDbFtjW2mOg4E7OAQDlaxRqkeSjJlwrAIyJr5FXWpAp3u6BrAyTiU4Xo6nUVPIdVmSn7JgqD0UTUEZU7P3NH1kXAPoNc+7JEBzEkO86obnkAm3PKFBJj5uEyHF2bbdM6knrngpIFIeMmg3GpgQgKADVIkvm0Sicw5miNBwt7/JwTSMJHY6anSXOxlf90TbPOoEmzmRpBypGi1gNWJ7rlgFa5Ueg72TIhSwVQJM/IWCLUOLm4aTK96J4i6kRwhQ9PdhqTsYqVlLvEonboJN7aUKDKMzPZHuZpBXv/+JD9RWT22H1RZ5yVB/m+KINfqfXWfKHckBqSd9EWZAJIB6SKm2etA5jyIclueHlV63IVxJcbk3CynGnA5YzrkZ9MsXmOZ8NoJ3SFgoVdGoB9iwmU/meO3+Yf4v/2dh7O9CHD+sKWWdeEREz99ftCbi/t17+hEIfOJMlSDDgvtPw=';const _IH='e101ea4e40775c5f58fdd3f695443d8dcb7f0293535c79d57a8ee238948b75ed';let _src;

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
