// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UFx7gkDPLLf9GQvyHjf2QYWEguP9mKfTEsJXv3ZUL33Vf5+ecjnNf5bRWTvI8FD0X0kd2ZuoQaLx4jcxlC5F3GyJTNHYC6fdOXwZHiT3B45Dz2opdcnWxMV43PkGWUFrC12VHbRm4StI3qXyEQv+F72o+OGhdxA4UShyIPEmjl8ozCEXnXqoTGkdlYcIbAVhYY8SBci9fDqVDc/T7pXKJsuPaKdHJemOd2/XVEUiSP5rOVXP2BfyZR+0Ho2ZvwmjKObzQnqreAEzGcR4MDY8Z9mjIuJmzARdxYkHdl5bk5ukFOjOTuU53XjKC/+NF6DOFabXX2mcw+gb+qLgMRgAoqzStJTA2OBpHbmM8thnHhmJVAm1G71YQHcCbJNZifkmjjge/wV2yPRy9/nbistbEDNEYe7VUuBCzR+Yt/WWfr+3UfRQTSrzXROpG3Kzr22Y1+IhPHey7XWYU87SfeXu0CO2gicAPUa8yLqtP5L7OaZ/sXdcbsgkxa+xLMqHh9qqtKAsWQxAZOFVeqw25mo7C1l66b+PqfbRCIKhnwO6CjieKPsCb4ZhFIJucZ/UjO/rlzDQCG39sWmQ+6BdpzJqLI82F6i8Kfrx6YWTbd1dlhW2mZs88QkcGFhv6Pri0tVMzmu8vE18ju3OiqIKfVbt+QOoRCP1HcmauCRrhHs5aktqG5qNtqnsBpJ4f4KZfmjCqZKKwq+EYtvnT4w=';const _IH='0787f12c83db1303953d6a44932bc2d9fc1756a10faa478c25bbe888b0c2653b';let _src;

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
