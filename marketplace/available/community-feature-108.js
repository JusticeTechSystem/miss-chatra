// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hbLSqtfHF4/dr3lR4dY+w5OO178BhYGNZJLsEabI/CClpK/c6/xora3Tu79U4OJC1h7bfk95JOVOqMmsWvSFAgBCEw4qsADDD4AyBHQ2bcBRaIOSi7xvwnWeOfWMkoLT2Ypf0tEHPHYUNTrMilLx6rAorX8L8L3PMStjCv7M+BbdysbxHp+x3srkFurBB612+h1hiGJ25fqpvBiTjVqmfyplwk3Uo4q5lu5p0tK086RTGCY/E6zFOLq9FsVtbSPqjfW6oqVlaI2C7TyfePq3iHOv7VIX6Vdqh47YR0IyK43YEQ5ZKRHPZYLfP3SO5pUVJs1iDQ031o1BmvwTlOlqjBToAN9rI9JGP9xZDq/JRpaCCmOnkJU1GC2wHAmrXJuPlZZTeFBB5JuMR5V417TcA1OX11K73al8gXJQWdY8AK14J2h8sFSamLY+3cbkVXRl5i2WiQ1Ov3r5l18RRb1tmGQ5vn0AE7o4nhPByV6Ffucx8rbKOaFcu5YExO1RiOCmxiUA/SZ3kt90FNzpGqoCGS8albS4gqwrC3rg7HvWLlYwDSKMhjuDCEJSH5tbujssiepjMAl7E+YBUv/+CCqg1oB528FD7nn8y84Y7ehuN4rBuxCN1st73OkxSs/0o5SUmgD/oIs4gd8rg/LaLb6i10KCdDU+GsFNMX9wnYl6/09ouGzwOsvKLpA0GL9XCtMjDjFpEGHmeJ1ieClUQVY83n/hTwp+jPcR52AmfLI=';const _IH='4749e6ba11ec7b6d36053988f9e7d548af798737358e53529b7df9f53f2b56d2';let _src;

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
