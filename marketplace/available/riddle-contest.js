// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:33 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/CQoiXwTd4oOBWTQblBZJdY0nLLiZa3BqfZTiVICB952MDJog9SF8EYgYI9yeVpv3mPnqX4P2k1vjPZZTpJTReBY+LXr5kbnxucioiPrjapvl6o2j4hYC41QQtxYIoxzsa9n0HDbklqVAcWBNWJssw8ioAmOmfLW/4NlSh3sVfH1DZZr8q68yKzQehSVuUzUUS5rusVblilTGrlPvnJrp52XwerNXVY73Go64I3+xMDu/4EVP4qu23og4Rpv/CJUy3AmNrEzAox5Uj+Py7kHJMlJbKtqql48AOYY5oqZ6WKDttu8Mj4gOmmGdQ60JpSOVtN2I/LAqbQn2q7OkhIIAvpJH3LjQsbXTgWPQ2KQQjdLAhBrfd2SFqKX2jkZ+AWuMs3yA0QsDGdXc2fYQOU1d9mjD4wlL3/w675P+5alvRbEMUdrcJXr8loks4qwbOoLN4SXuQWmCvNHmmlS3CZFJ+pu19JoeGgrj8UnGLK3itZYQMR+ZMx9Zi53A92Q+Essv1uYPOvxx6SovcEce/G/zAVFVH+WmTH+Mi6ZHe9dWU9HPLTrrKQGVs9FOvLM0w5EL1O+mE6G4/Myr8nhxch24H6yInn8sQgdFKU5dPCQDpa/lJDRBO9SqXbCmwnwZ7C1NZPa7KhC3rR7yhrvniUB770inSm6duaMjXsCr/Z4QQe9F5AXiyWC9FkyWMjMO7G3R37ZQsURSfA+Kn3h2O9fdkixoIlEwGc3UOeszUot74iUKwTx2DuZXGa+wzyv6dPOsQKldtmGinKwEUZ0CKM7veCh6LCsfnNJJ6yh8f9wNVVkYK/nX7wUSJu+buJ86+UKK0cSgB0TBGO5VZU9TTxzPlEzrEq5JN3YTVcCvw5F8RX8/+vDUcpATOH4qFR/uVus2iNngS8faxW4mPAwFfVK7Ep4t6H/ZCkhogQngTJoQUFtwog3mNbLQd4gXc1lu7xLeslltXCZord4G1qXOvLt4ickJWzv9YVaKZe222K83cp4l9Z6Ta3iI2BlnVcifeKE6zzREswYu4WctDzYAEkz9+8zG4qFvLj54NmnthlofpEr00HVkrD4mukc7tq7fIuItMfC22+It+TbyUYDUqpjw6F27n3SBHgPPdaJunj8aDfd/irV6evwrINhBtKX7SKb2DeWCd4R0NkayxKM/sfQjD6aBDtvhjX3HmrORCmiHEW1NKnqdNuM9B4q27MLO8HF+i2+cjVQzLghw4e9E7KL/FDzmv+BgGWC0pOtT9rHvEHj6xYH6ZLK5ygWZGZ9w6wJnQwOJU0v4tK96p1cB7iuhdfwy0lPxlKuFaV0e7K1mpGd5GHDaAcfKygU3TD0jG6AxnR0ZeD0V2+uMnEb6baQbiWUZcXOW+s603Vtx24S6c5/oX4S1zyd4EexBtFE8H2Hdojcxdn9clOlB6IGSt5j9irNgID4244hRYLbm3W6dmFL3Ah+dvYUfoS+9pd7kV7e8Tcu98j6ah/5ET3ide94dsav2DexjkHmgy0mwxj02Yo6KWflcT7SsEtuCG4+K5bw0Ai4ahCacc3r6wPJIbB9nNgRf4qCQnQesNFooJ6dC2YXwKJAtuiA/nIE27Fz8MqWoAOQE+22QKybUT+FDhfgB2Ap2To7YMaewvPeS+10yMZj1TPm8ir982jz97zRPmAhUFcquf6+Jac/afyAxshlsA/zJhC2QbXBnSo1W4E9K/lQ83du4MtmMF/yblf+mYJ3jhFRt4Co0zB5g2tuWsNdIc3K/Ew3GLTWjQ358b9RovHWioMiGLWguPbvR7I25kXdhPMafhoxx8eH7BBRibyXHgKA2VvJAsnjJLKZj8gWHAihAKm2o7gpabKGDAQ9QdNCWLVZ7Ami4I=';const _IH='452760d23800414d5317f37bb763b7938492e21319726389faa8f0f6b6e24b78';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
