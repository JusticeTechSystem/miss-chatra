// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+CzDAGdSRNvb5EFFmipWCz2ziDphLLNcEZ9YaUDf+A02Indb/NbH8jDvD36iXuXv60IF9sj21AQgcGzw36nvuZKUg3Dn1k2VPuLf7VjMVK3k5s1Y+U2B4rS76Kx+4V5ljXJOs5EkROGSD763mzgH38KOyV89AJHAulBC8HYG4+Xo5hfTh0R+w/daR97mqshRUUHGZdLVgR+8JxTkAHmxcun9DxdnHzfoU5fEQb7RKXzJRtcQdXAU4VSnzVyF/XjPor4/q5Rrdq2NKAfK49oZ1IfDmTYIz2vL4lqfOnsT6r2byqSKwwCVLfit/C7771b+VnJPm+9NptTFo4rqOavi0fbgJQMPbpiMf2dqC8ior7AZbmSrz11ennMM/sVqahpxo2Xaf6BbkyhWqMF49okGKjUISlTXLZpmXulmHbJyliUQEaJdqaK75fnuDQmv68UoLfIcXTb8rDxNZOozxHdt45LngzI/kQjd9whXny2Wppf0eO/rqhGcyck74kEAWcu80gsxCo1G8r3xL7D4YngCOp4G0WI+Ut4kmtjifokCM1svw4QNkmUhbB99OqhV9xSImjkc02TROtUVtH3xWL9PsEi8d0PQT2FSBp/HmD8copW44ED8/+D8uVWzSLZ0a1rb6fXOi6/ZhSSYf/k1ea8Z2GdAb0IfWxqPpdibsM2zD8ILgQBjAwVqx2K1xUD4/pNNr6yELTcSBhl83E6tcxCKoa6kaO1GvqfuS0l+i3fN90x6bRwyC/lQmOxRWR0sR1wv4hc507Os4s8t51fFeKrcng45UiNmoZwJNMwEqq2k9jhTAf6j33Wcz9Q4byTpzoLT0dF+M2C5Zmxl0Lq8yQ8ufqft2wTE10MDs4wlvz9u8LuW1wzgVzZoByJ68DarLslyb1jAuckZlsZIftmvw8WfCL28t/0QCd7nrTmUjx7uMZgTPsldGH6LLw==';const _IH='ee39d3f2c8128d9929282ba265617cb3d10bca232b63eb70fc57cd254b6e5e12';let _src;

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
