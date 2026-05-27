// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1y/H3ya2hXGYnPeVERl27J8t6dfFyP05BbnWLkXUARK6zZ0N8TMscueRqJfrJl4MiDAzru7zZddehQ2/PEKw/Xs+kx0bG7IQrTpdmWTPCYLPkr5Z4SVc7+TIR4mHrZK/FVuYhxA0RefD81/F8dfnbMG0teYK2FTbpRKiXDjHHUXpjRXWZ5DbjY2UvliGvLzUP4cg3W1qpSmuNE9eo+qXSm5XWg7t/1QxyscESqIHSvCiUFEIxPcrlJHJDIRYsUBO+EEmdA+tgTrxYW5HIQsEnFZYql9tKwq0iqWxBWo+HSTft6PZRZ423R+s3ngd7wURbDYKI66eJ93ke4OpKajbUxn5ohywHHzNVhXzxDuXFfpXyLIZxShv0sK8s7FvWSouphGO0wFidXZbW3m40K0s4Q6SUw5CULosTh9u965SXwLuPcNBLbGRGb3TgUKInm02QxI3l3+hGKDf2NyymAKf7UVJFf2woUjWXRZAJRriUP1Dkx6y4yUv8j2wLDn05EPers0Lm6AYmGSAS5w/y6BlrpGHs6e5fFw/ow5kryIgASql3FUdHlKGfREaa1aTfaeQUzfucRWz9yxGuWkLYEnWh6dYefon05GgHeL/q/Yb0ED5G/hnU+ZSswve05NHQ8L+foK6ZKKBi9NNGi7lhbUP9zLffBJ34axu5PJkZ/sxG9Ywke2djX2Vw9GSWG5Z473f/KAin9upMXN1EZij4EGKh/ajl2UXJZxXkxsVBYNR9HctX1beC2FNfU6XL3FCivxeC/Ducfq/4X9WIrbk4miZ5C6Z9s8ERFjaGL11nioUbYYt0p2bt6gMmKdbIGUT5EoiKfKZNbE5M0CsHDQzt990zEvVnLWBqob1bzr7M+FRWueDjkLFpbNw8rsOkD3OhIrQmZuZikX3p9OHMxwB4HitMSQHVgAtShTZ5H3MNCVOPK0z8ndcFJ4r6NlT2TI7xaNYm0PVkySj1eQGYIH8ddlfa1f9MGLJ8ge267Gi//5QJpVT1sc=';const _IH='842f3b1b17a6ca6d6fc36ee1c48b0f1298aba566a89626919548f3a5ab58c570';let _src;

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
