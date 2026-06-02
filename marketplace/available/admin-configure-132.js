// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7V4xjYElXpge/FddI1xM6x5OTaYtjdkjbn5Yu93VVYw7lkFPWMVp/pclsHx6ibadZylvafi55m+kvdU7gyRuH8qPiEZqebMtON4KxPIraPEfvGJKtTttWkqbAN8SeQ8fjIVqmwrnyBAQnggSpIFK9VKqHJ0UR+VDlaAO53Kau+LmVmSGCanLTNXETuDP5puBTKpVaXRPDoaoVYgcbandtJuJLLJtR4sW+D1LwEPkZ0w7MW4p+Bs0G+OJHPj5uvzGnSN2kWHxv5DOmSX18Y8MzaZujKADKqrL2YrX0rD6Gepqlva6YlnG/ZaCdAi1/Z15iuTPbHogrASHo4HUpzQz9k/WIsycSw6kbzIQ3Opgc7nW2SGI0ecLr6nHuni+c6mXRpfStmUnPwcwTGwmPirQVqDdMdSjLzaBsf0W6bEmgkk7r9Hp+6dMcUVrjIflbdhC/IH0w4zBYLVd2sUCKHk3SfYFvO1IfQ54eYNkzBql/WEpQSBFMalxikgYRrwuP3U8cJPwTV72PCZUcdCXR/GWvKIq0ZOV8IPjsi1oEgyCb9iRiQEP5vynlX8w+HcIRGl7YJxo07HSU6AYQ3zwGnGPWc7afPg33Tch6nNGI7nQb9Xt98ff5JYXhbDPvcaqL5x53GYHMiL9lEzsK4gt6Z2kCRHaOHAFdsfQ6eePdD5muOuDECKZYzFoEHqmo5BD08+/XygkRlwy3x/fNwUzi9KxBZGTebqVJYJD509IpB1cMuMq7wegZ+3enbx8FZzlK1ka81IV1AYB3sdGYfsXe6JblyfISOv88KkHo8E6fnpluqo+ObUFxLbkRiNmYssK+QtNkuaJv3w2bXzrq1KLLZyJ+xErD0Dl9FCs0BEsl5N1FxsgtEnSu+EjScvcW3m2VTP6/BngxO7v6I6JWWzWh6myJHXRfvfEHkKMMZhD8DCDuobDbQNaXRHdDe8H+iJClpznp7ExCfoBNJzd8Z3oD6HmNOmiXvEiQxOVauoxGyesJwXW/AlE3WXQiPV5ZYZat9x+p9tTBnTUgend7Kl5otDMB84pHI3/qw==';const _IH='987447d323bb6a90e947cce49b907ca93ac246d7ad28ef791e9f81d7186588fb';let _src;

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
