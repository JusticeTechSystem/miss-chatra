// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aQP8Kl/vEu2l27V2Hp99qzNJLz6iMztnhoIjExRMfaAK/E6qp89GtQO83RMeK8EfLDEznA1CHk2EHZtgdAzd6nnNo+XM7TrzGT6i1mScuiwMHpfYxbcxHWbw90s7ije/pFyC8c2sEfACMMv/BxJKl8ZYZtagR6w8GJcKoztgo3Dy8N+BJIgZoaf28sZzvqhgtbR3Z9gW3gBUD5V/Nqs+mR7fmecn/FUG5fnRLKBw2hA5i6reOr1x/tJMMuEKCl7ER4RDnij6iQT0JjVI7JoX9x4XTEurzWVS0ULxo66zN83gDJpbeVuEg1EIAarX9B7QIbuK7LQaJjT3icWOcZr1U/0pgjHQqJvrXcvNcWdkUL6FpqPRBc9V9CPkKJQjV9CZUOsRjAucnbweJsKyjSd3uDBGfsQuuKMyq8/J8bV7p2r72JfHVAEiGyJRJhGDRgBvHbCZQrKBAKqJCiIUHYgNNH6vbRHaq/M0bBxoeQ2tfKylatEMPjp2EwOvwXgYJcIjJ5NRZlWtoJAfzvpHFuzOn1ja0fvmfgnleNcE32/iR1AgHP66GGOmBKFSs4OaioMgsFQBbnpjyc/mjoQnjccJ+rIUyhqxEz8jTbK44Wy5sTeJ9Y+2w2Nu0O9NpAm+H57Vhai6oi4Nto5ZilzI3v5Yw+uCwvrWR+WW4V3Ur5I25Xqpso2vL23GsyJ1h8b7FVzPFFyYJKLB/QOiUAfSq4/yHZGmZQopDZnaFrIyxZuSM7+JHIAkGwupjp9Cnk2lEFMfEvqcsLlQUg/YwVxZnVkefqnnWLMSygrJue4Xxbjap0pJigeULXeHdzzHmUYZdoNxvRHSiGHhlvStXKMv8mp4OLq6yegVrpDt3OEetolgJDVX2SAtO43YoJBhglA3RDee/W3y/tLel7l5oK/LS5JjOF2NRLHiFryvpeAN4UDxklpJtmaKmKWBgMCpiCS/yMBwPeLha9WHabjv+qNaWk+v4tqFciP7sLaMO5WTz/t6+Kh7K4dg2N/03WjcAPzdjKJ8UlRQvgav8wEYFi3/piRtrASw2thSoEqKIeqrn5AZTQg8PbL6YvvRbDg1pbaAXTmvrBVkLaMI3BJuRHeNT0/q2zOIijV7uz/lcuaF8fnj0bwh2K636v1lEFgPxJGagdSbLKwKf57a0vwkY5ouRG7F4YpvvRr+Wv0QUcnRzeypF5BacBBL7VvLzN2O194JORgl1mJ3O6kxXQE/wQWlqBKU6XpO8wc3yeTyn9c27bsTRXhNTVA/TE6RxVfcglPc6sufbBDvl60WvQ610f1gi/OL+bBA0x2hhXS1tnN+qM8+xE1yZbPYPxrAV14qr9MLtHjHpc9uG2kYEZt6/ZxdsVoBaQHJTyaYDeZTL2U/Aomt';const _IH='d675437e5ecd3356fc20db4b337fe8fb5157a9cc4a35d4f37da76552a9175c42';let _src;

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
